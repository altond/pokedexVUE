<template>
    <div class="centre">
      <h1>#{{ pokeid }}: {{ pokeName | toUpperCase }}</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'PokemonTitle',
    props: ['pokeName'],
    computed:  {
      ...mapGetters(['pokeid']),
    },
    filters:  {
      toUpperCase (value) {
        return value.toUpperCase()
      },
  }
}
</script>

<style scoped>
  .centre  {
    text-align: center;
  }
</style>