import axios from 'axios';

const state = {
  pokedata: null,
  pokedataTypes: null,
  pokedataAbilities: null,
  pokedataStats: null,
  pokedataSprites: null,
  pokedataMoves: null,
  pokeID: null
};

const getters = {
  pokedata: state => state.pokedata,
  types: state => state.pokedataTypes,
  abilities: state => state.pokedataAbilities,
  stats: state => state.pokedataStats,
  sprites: state => state.pokedataSprites,
  moves: state => state.pokedataMoves,
  pokeid: state => state.pokeID
};

const actions = {

  async setSelectedPoke({ commit }, id)  {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
        .catch(err => console.log(err)
      );

      commit('setPokedata', response.data)
      commit('setTypes', response.data)
      commit('setAbilities', response.data)
      commit('setStats', response.data)
      commit('setSprites', response.data)
      commit('setMoves', response.data)
      commit('setID', id)
      console.log('setSelectedPoke called !')
  }
};

const mutations = {
  setPokedata: (state, data) => (state.pokedata = data),
  setTypes: (state, data) => (state.pokedataTypes = data.types),
  setAbilities: (state, data) => (state.pokedataAbilities = data.abilities),
  setStats: (state, data) => (state.pokedataStats = data.stats),
  setSprites: (state, data) => (state.pokedataSprites = data.sprites),
  setMoves: (state, data) => (state.pokedataMoves = data.moves),
  setID: (state, id) => (state.pokeID = id)
};

export default  {
  state,
  getters,
  actions,
  mutations
}