<template>
    <v-card
    elevation="6"
    outlined
    class="mx-auto my-12"
    >
    <v-card-title>{{title}}</v-card-title>

    <v-card-text>
      <v-row>
        <v-col class="nopad">
          <v-img
            :src="getSpriteFD()"
            max-height="100"
            max-width="100"
            class="centre"
          />
        </v-col>
        <v-col class="nopad">
          <v-img
            :src="getSpriteBD()"
            max-height="100"
            max-width="100"
            class="centre"
          />   
        </v-col>
      </v-row>
      <v-row>
        <v-col class="nopad">
          <v-img
            :src="getSpriteFS()"
            max-height="100"
            max-width="100"
            class="centre"
          />
        </v-col>
        <v-col class="nopad">
          <v-img
            :src="getSpriteBS()"
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
export default {
    name: "PokemonDetailsSprites",
    props: ["pokedata", "title"],
    data: () => ({
        //
    }),
    methods:  {
        getSpriteBD()   {
            return this.pokedata.back_default
        },
        getSpriteBS()   {
            return this.pokedata.back_shiny
        },
        getSpriteFD()   {
            return this.pokedata.front_default
        },
        getSpriteFS()   {
            return this.pokedata.front_shiny
        },
    }
}
</script>

<style scoped>
    .nopad  {
        /* padding: 0px; */
    }

    .centre  {
        margin: auto;
    }
</style>