<template>
  
  <v-card
    elevation="6"
    outlined
    class="mx-auto my-12"
    v-if="pokedata"
  >
      <v-img
        :src=imgsrc
        class="centre"
      ></v-img>

    <v-card-title>
      <div class="overline">
        {{ titleheight }}
      </div>
    </v-card-title>

    <v-card-text>
      <div> 
        {{pokedata.height}}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>
      <div class="overline">
        {{ titleweight }}
      </div>
    </v-card-title>

    <v-card-text>
      <div> 
        {{pokedata.weight}}
      </div>
    </v-card-text>

  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "PokemonImage",
    props: ["selected", "pokename", "pokeID"],
    data: () => ({
        titleheight: 'Height',
        titleweight: 'Weight',
        
    }),

    methods:  {
      //
    },

    computed:  {
      ...mapGetters(['pokedata', 'sprites']),
      imgsrc: function ()  {
        return this.sprites.other["official-artwork"].front_default
      }
    },

    created () {
      console.log("card created !")
    },

    mounted ()  {
      console.log("card mounted !")
    }
}
</script>

<style scoped>
  .centre  {
    margin: auto;
  }

  .test  {
    max-width: 475px;
  }
</style>
