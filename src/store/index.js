import Vuex from 'vuex';
import Vue from 'vue';
import pokedata from './modules/pokedata.js';

//Load Vuex
Vue.use(Vuex)

//Create Store
export default new Vuex.Store({
  modules:  {
      pokedata
  }
});