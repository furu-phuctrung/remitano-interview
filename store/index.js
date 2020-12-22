export const state = () => ({
  username: ""
});

export const mutations = {
  login(state, username) {
    state.username = username;
  },
  logout(state) {
    state.username = "";
  }
};
