<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Pokedex Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.icon-icons.com/icons2/1898/PNG/512/pokemon_121114.png"
          transition="scale-transition"
          width="40"
        />

        <h2>Alton's Pokedex v1.0</h2>

      </div>

    </v-app-bar>

    <v-main fill-height fluid>
     
      <PokemonSearch v-bind:names="names" v-on:selected="setSelected" class="centre"/>
      <v-container v-if="pokedata" class="pokeinfo">
        
        <v-row lg='1'>
          <v-col lg='3' min-width='475px'>
            <PokemonImage v-bind:pokedata="pokedata" v-bind:selected="selected"/>
          </v-col>
          <v-col lg='4.5'>
            <PokemonDetailsType v-bind:pokedata="pokedata.types" v-bind:title="titletype"/>
            <PokemonDetailsType v-bind:pokedata="pokedata.abilities" v-bind:title="titleabilities"/>
            <PokemonDetailsType v-bind:pokedata="pokedata.stats" v-bind:title="titlestats"/>
            <PokemonDetailsSprites v-bind:pokedata="pokedata.sprites" v-bind:title="titlesprites"/>
          </v-col>
          <v-col lg='4.5'>
            <PokemonDetailsType v-bind:pokedata="pokedata.moves" v-bind:title="titlemoves"/>
          </v-col>
        </v-row>
      </v-container>
      <h1 v-else>Click the Dropdown Menu above and select a Pokemon!</h1>
    </v-main>
  </v-app>
</template>

<script>
import PokemonSearch from './components/PokemonSearch';
import PokemonImage from './components/PokemonImage';
import PokemonDetailsType from './components/PokemonDetailsType';
import PokemonDetailsSprites from './components/PokemonDetailsSprites';
import { pokemonNames } from './data.js'
import axios from 'axios';


export default {
  name: 'App',

  components: {
    PokemonSearch,
    PokemonImage,
    PokemonDetailsType,
    PokemonDetailsSprites
  },

  props: ["selectedName"],

  data () {
    return  {
      selected: '',
      names: [],
      pokedata: null,
      titletype: 'Type',
      titleabilities: 'Abilities',
      titlemoves: 'Possible Moves',
      titlestats: 'Base Stats',
      titlesprites: 'Sprites'

    }
  },

  created()  {
    console.log("created !")
    this.names = pokemonNames
  },
  mounted()  {
        console.log("mounted !")
  },

  methods:  {

    setSelected(selectedName) {
      this.selected = selectedName
      axios.get(' https://pokeapi.co/api/v2/pokemon/' + parseInt(this.names.indexOf(this.selected) + 1))
        .then(response => (this.pokedata = response.data))
        .catch(err => console.log(err));
    },
    
  }
};
</script>

<style scoped>
  h1  {
    text-align: center;
  }

  .pokeinfo {
    /* display: flex; */
  }

  .centre  {
    margin: auto;
    width: 75%;
  }

  .v-main__wrap  {
    margin: auto;
  }
</style>
