<template>
    <v-card
    elevation="6"
    outlined
    class="mx-auto my-12"
    v-if="sprites"
    >
    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      <v-row>
        <v-col class="nopad">
          <v-img
            :src=getSpriteFD
            max-height="100"
            max-width="100"
            class="centre"
          />
        </v-col>
        <v-col class="nopad">
          <v-img
            :src=getSpriteBD
            max-height="100"
            max-width="100"
            class="centre"
          />   
        </v-col>
      
        <v-col class="nopad">
          <v-img
            :src=getSpriteFS
            max-height="100"
            max-width="100"
            class="centre"
          />
        </v-col>
        <v-col class="nopad">
          <v-img
            :src=getSpriteBS
            max-height="100"
            max-width="100"
            class="centre"
          />
        </v-col>
      </v-row>
    </v-card-text>

  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "PokemonDetailsSprites",
    props: ["title"],
    
    computed:  {
      ...mapGetters(['sprites']),
      getSpriteBD: function ()  {
        return this.sprites.back_default
      },
      getSpriteBS: function ()  {
        return this.sprites.back_shiny
      },
      getSpriteFD: function ()  {
        return this.sprites.front_default
      },
      getSpriteFS: function ()  {
        return this.sprites.front_shiny
      },
    },
    methods:  {
        
    },
    data: () => ({
        //
    }),
}
</script>

<style scoped>
    .nopad  {
        padding: 0px;
    }

    .centre  {
        margin: auto;
    }
</style>