import axios from 'axios'

export const state = () => ({
  news: []
})

export const mutations = {
  setNews(state, payload) {
    payload.sort(function (a,b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    this.state.news = payload
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
  async deleteNewsById({dispatch}, id) {
    let url = `http://localhost:4000/foodlist/delete/${id}`;
    axios.delete(url)
      .then(response => {
      dispatch('getAllNewsFromApi')
    });
  }
}

