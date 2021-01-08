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
  export default {
    name: 'PokemonSearch',
    props: ["names"],
    data: () => ({
      selectedName: ""
    }),
    methods:  {
      onChange()  {
        console.log(this.selectedName)
        this.$emit('selected', this.selectedName)
      }
    }
  }
</script>
