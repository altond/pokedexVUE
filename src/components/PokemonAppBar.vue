<template>
  <div>
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
        <h2>{{ appbartitle }}</h2>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'PokemonAppBar',
  data () {
    return  {
      appbartitle: 'Alton\'s Pokedex v1.2',      
    }
  },
}
</script>

<style>

</style>