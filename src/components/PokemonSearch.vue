<template>
  <v-container fluid>
    <v-select 
      label="Search..."
      :items="names"
      item-text="name"
      input="selectedName"
      v-model="selectedName"
      @change="onChange()"
      >
    </v-select>
    
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
