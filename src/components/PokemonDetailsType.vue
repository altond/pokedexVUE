<template>
    <v-card
    elevation="6"
    outlined
    class="mx-auto my-12"
    >
    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>

      <div class="text--primary types" v-if="title === 'Type' && pokedata">
        <ul>
          <li v-for="(type, index) in types" :key="index">
            {{ type.type.name | capitalize }}
          </li>
        </ul>
      </div>
      <div class="text--primary abilities" v-else-if="title === 'Abilities' && pokedata">
        <ul>
          <li v-for="(ab, index) in abilities" :key="index">
            {{ ab.ability.name | format | capitalize }} 
          </li>
        </ul>
      </div>
      <div class="text--primary moves" v-else-if="title === 'Possible Moves' && pokedata">
        <ul>
          <li v-for="(mv, index) in moves" :key="index">
            {{ mv.move.name | format | capitalize }} 
          </li>
        </ul>
      </div>
      <div class="text--primary format2" v-else>
        <ul>
          <li v-for="(stat, index) in stats" :key="index">
            {{ stat.stat.name | format | capitalize }}: {{ stat.base_stat }}
          </li>
        </ul>
      </div>
      

    </v-card-text>

  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "PokemonDetailsType",
    props: ["title"],
    filters:  {
      capitalize (value) {
        if (!value) return ''
        value = value.toString()
        let words = value.split(' ')
        for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        return words.join(' ')
        },
      
      format (str)  {
        if (!str) return ''
        return str.toString().replace(/-/g,' ')
      }

    },
    computed:  {
      ...mapGetters(['pokedata', 'types', 'abilities', 'stats', 'moves']),
    },
    data: () => ({

    })
    
}
</script>

<style scoped>
  .moves ul {
    display: flex;
    flex-wrap: wrap;
  }

  .moves ul li  {
    flex: 0 0 33%;
  }

  .types ul  {
    display: flex;
  }

  .types ul li {
    list-style: none;
    flex: 0 0 50%;
  }

  .abilities ul  {
    display: flex;
  }

  .abilities ul li  {
    list-style: none;
    flex: 0 0 33.3333%;
  }

  .format2 ul li {
    list-style: none;
  }
</style>