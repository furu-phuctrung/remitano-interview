export const state = () => ({
  username: "",
  urls: []
});

export const mutations = {
  init(state, initalState) {
    state.username = initalState.username;
    state.urls = initalState.urls;
  },

  login(state, username) {
    state.username = username;
  },

  logout(state) {
    state.username = "";
  },

  setUrls(state, urls) {
    state.urls = urls;
  },

  pushUrl(state, url) {
    state.urls.push(url);
    localStorage.setItem("urls", state.urls.join(";"));
  }
};
