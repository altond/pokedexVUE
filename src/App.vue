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

    <v-main>
      <PokemonSearch v-bind:names="names" v-on:selected="setSelected"/>
      <v-container v-if="pokedata" class="pokeinfo">
        
        <v-row>
          <v-col lg='3' min-width='475px'>
            <PokemonImage v-bind:pokedata="pokedata" v-bind:selected="selected"/>
          </v-col>
          <v-col lg='4.5'>
            <PokemonDetailsType v-bind:pokedata="pokedata.types" v-bind:title="titletype"/>
            <PokemonDetailsType v-bind:pokedata="pokedata.abilities" v-bind:title="titleabilities"/>
            <PokemonDetailsType v-bind:pokedata="pokedata.stats" v-bind:title="titlestats"/>
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
import axios from 'axios';


export default {
  name: 'App',

  components: {
    PokemonSearch,
    PokemonImage,
    PokemonDetailsType
  },

  props: ["selectedName"],

  data () {
    return  {
      selected: '',
      names: [
        "Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot",
        "Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales",
        "Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe",
        "Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta",
        "Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch’d","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby",
        "Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra",
        "Goldeen","Seaking","Staryu","Starmie","Mr.Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte",
        "Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"
      ],
      pokedata: null,
      titletype: 'Type',
      titleabilities: 'Abilities',
      titlemoves: 'Possible Moves',
      titlestats: 'Base Stats'

    }
  },

  created()  {
    console.log("created !")
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
    display: flex;
  }
</style>
