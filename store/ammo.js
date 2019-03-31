import axios from 'axios'

export const state = () => ({

})

export const mutations = {
  setNews(state, payload) {
    payload.sort(function (a,b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    this.state.ammo = payload
  }
}

export const actions = {
  async getAllNewsFromApi({commit}) {
    let url = 'http://localhost:4000/foodlist';
    await axios.get(url)
      .then(response => {
        commit('setNews', response.data);
      });
  },
  async getAllNewsById({commit}, id) {
    let url = 'http://localhost:4000/foodlist/findByParent/' + id;
    await axios.get(url)
      .then(response => {
        commit('setNews', response.data);
      });
  },
  async deleteNewsById({dispatch}, id) {
    let url = `http://localhost:4000/foodlist/delete/${id}`;
    axios.delete(url).then(response => {
      dispatch('getAllNewsFromApi')
    });
  }
}

export const getters = {
  getAdById: state => id => {
    return state.ads.filter((item) => {
      return (item.id === id)
    })
  }
}
