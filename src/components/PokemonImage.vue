<template>
  <v-card
    elevation="6"
    outlined
    class="mx-auto my-12"
  >
    <v-card-title>{{selected}}</v-card-title>

    <v-img
      height="400"
      width="400"
      :src="getImgSrc()"
      class="centre"
    ></v-img>

    <v-card-title>
      Height
    </v-card-title>

    <v-card-text>
      <div> 
        {{pokedata.height}}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>
      Weight
    </v-card-title>

    <v-card-text>
      <div> 
        {{pokedata.weight}}
      </div>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
    name: "PokemonImage",
    props: ["selected", "pokedata", "pokename"],
    data: () => ({
        //
    }),

    methods:  {
      getImgSrc()   {
          return this.pokedata.sprites.other["official-artwork"].front_default
      }
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
</style>
