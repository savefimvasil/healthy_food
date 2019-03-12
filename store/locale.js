export const state = () => ({
  locale: 'ru'
})

export const mutations = {
  SET_LANG(state, locale) {
    state.locale = locale
  }
}
