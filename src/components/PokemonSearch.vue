<template>
  <v-container fluid>
    <v-autocomplete 
      label="Search..."
      :items="names"
      item-text="name"
      input="selectedName"
      v-model="selectedName"
      @change="onChange()"
      prepend-icon="fas fa-search"
      filled
      rounded
      >
    </v-autocomplete>
    
  </v-container>
  
</template>

<script>
import { mapActions } from 'vuex';
import { pokemonNames } from '../data.js';

  export default {
    name: 'PokemonSearch',
    props: [],
    data: () => ({
      selectedName: null,
      selectedID: null,
      selected: false
    }),
    methods:  {
      onChange()  {
        this.selectedID = parseInt(this.names.indexOf(this.selectedName) + 1)
        this.$emit('selected', this.selectedName, this.selectedID)
        this.setSelectedPoke(parseInt(this.names.indexOf(this.selectedName) + 1))
      },
      ...mapActions(['setSelectedPoke'])
    },
    computed:  {
      names: function () {
        return pokemonNames
      }
    }
  }
</script>
