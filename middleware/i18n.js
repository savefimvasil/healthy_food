export default function ({ isHMR, app, store, route, params, error, redirect}) {
  if (isHMR) {
    return;
  }
  else if (!params.lang) {
    return redirect('/' + store.state.locale.locale + route.fullPath.replace(/^\/(ru|ua)/,'/'));
  }
  const locale = store.state.locale.locale || 'ru';
  store.commit('locale/SET_LANG', locale);
  app.i18n.locale = store.state.locale.locale;
}
