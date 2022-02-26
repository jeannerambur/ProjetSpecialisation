import axios from "axios";

const state = {
    user: null,
    pets: null,
};

const getters = {
    isAuthenticated: (state) => !!state.user,
    StatePets: (state) => state.pets,
    StateUser: (state) => state.user,
};

const actions = {
    async Register({ dispatch }, form) {
        await axios.post('register', form)
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        await dispatch('LogIn', UserForm)
    },

    async LogIn({ commit }, user) {
        await axios.post("login", user);
        await commit("setUser", user.get("username"));
    },

    async CreatePet({ dispatch }, pet) {
        await axios.post("pet", pet);
        return await dispatch("GetPets");
    },

    async GetPets({ commit }) {
        let response = await axios.get("pets");
        commit("setPets", response.data);
    },

    async LogOut({ commit }) {
        let user = null;
        commit("logout", user);
    },
};

const mutations = {
    setUser(state, username) {
        state.user = username;
    },

    setPets(state, posts) {
        state.posts = posts;
    },
    logout(state, user) {
        state.user = user;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};