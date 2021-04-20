import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    search: null,
    user: ""
  },

  getters: {
    allImage: (state) => state.images,
    searchImage: (state) => state.search,
    user:(state) => state.user
  },

  mutations: {
    GET_PHOTO(state, photo) {
      state.images = photo;
    },
    SEARCH_PHOTO(state, keyword) {
      state.search = keyword;
    },
    getUsername(state,username){
      state.user = username
    }
  },

  actions: {
    async getPhoto({ commit }) {
      await axios
        .get(
          `https://api.unsplash.com/photos/?client_id=BdUWQR1k6bJH_vj0c1HLKasFt3p5vpUwpSoQGahCS90&per_page=20`
        )
        .then((response) => {
          commit("GET_PHOTO", response.data);
        });
    },

    async getSearch({ commit }, topic) {
      await axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=BdUWQR1k6bJH_vj0c1HLKasFt3p5vpUwpSoQGahCS90&query=${topic}&per_page=20`
        )
        .then((response) => {
          commit("SEARCH_PHOTO", response.data);
        });
    },
    getUsername({ commit },username){
      commit("getUsername",username)
    }
      
    
  },

  modules: {},
});
