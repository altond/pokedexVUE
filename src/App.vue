<template>
  <v-app>
    <PokemonAppBar />
    <div class="centre">
      <v-main>   
        <PokemonSearch v-on:selected="setSelected" v-model="selectedID"/>
        <v-container v-if="selected" class="pokeinfo">
          <PokemonTitle :pokeName="selectedName" />
          <v-row>
            <v-col xl ='4' lg='6' md='12' sm='12'>
              <PokemonImage />
            </v-col>
            <v-col xl ='4' lg='6' md='6' sm='12'>
              <PokemonDetailsType v-bind:title="titletype"/>
              <PokemonDetailsType v-bind:title="titleabilities"/>
              <PokemonDetailsType v-bind:title="titlestats"/>
              <PokemonDetailsSprites v-bind:title="titlesprites"/>
            </v-col>
            <v-col xl ='4' >
              <PokemonDetailsType v-bind:title="titlemoves"/>
            </v-col>
          </v-row>          
        </v-container>
        <h1 v-else class="centreText">{{ homepagemsg }}</h1>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import PokemonSearch from './components/PokemonSearch';
import PokemonImage from './components/PokemonImage';
import PokemonDetailsType from './components/PokemonDetailsType';
import PokemonDetailsSprites from './components/PokemonDetailsSprites';
import PokemonTitle from './components/PokemonTitle';
import PokemonAppBar from './components/PokemonAppBar';


export default {
  name: 'App',

  components: {
    PokemonSearch,
    PokemonImage,
    PokemonDetailsType,
    PokemonDetailsSprites,
    PokemonTitle,
    PokemonAppBar
  },

  props: [],

  data () {
    return  {
      selectedName: '',
      selectedID: null,
      selected: false,
      titletype: 'Type',
      titleabilities: 'Abilities',
      titlemoves: 'Possible Moves',
      titlestats: 'Base Stats',
      titlesprites: 'Sprites',
      homepagemsg: 'Click the Dropdown Menu above and select a Pokemon!',
      
    }
  },

  created()  {
    console.log("App created !")
  },
  mounted()  {
    console.log("App mounted !")
  },

  methods:  {

    setSelected(name, id) {
      this.selected = true
      this.selectedName = name
      this.selectedID = id
    },
    
  },
};
</script>

<style scoped>

  .centre  {
    margin: auto;
  }

  .v-main__wrap  {
    margin: auto;
  }

  .centreText  {
    text-align: center;
  }
</style>
