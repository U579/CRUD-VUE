import { createStore } from "vuex";
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    users: [],
    currentUser: null
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user);
    },
    editUser(state, updatedUser) {
      const index = state.users.findIndex(
        (u) => u.id === updatedUser.id
      );
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    },
    deleteUser(state, id) {
      state.users = state.users.filter((u) => u.id !== id);
    },
    loadUsers(state, lista) {
      state.users = lista;
    },
  },
  actions: {
    addUser({ commit }, user) {
      user.id = uuidv4();
      commit("addUser", user);
    },
    editUser({ commit }, user) {
      commit("editUser", user);
    },
    deleteUser({ commit }, id) {
      commit("deleteUser", id);
    },
    loadUsers({ commit }, lista) {
      commit("loadUsers", lista);
    },
  },
  getters: {
    allUsers: (state) => state.users,
    getUserById: (state) => (id) =>
      state.users.find((u) => u.id === id),
  },
});
