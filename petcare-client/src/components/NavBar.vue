<template>
    <nav class="navbar navbar-expand-lg navbar-ligth bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">APP-AUTH</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
            <router-link to="/" class="nav-link"> Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item" v-if='!isLoggedIn'>
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item" v-if='!isLoggedIn'>
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item" v-if='isLoggedIn'>
          <router-link to="/profile" class="nav-link">Profile</router-link>
        </li>
        <li class="nav-item" v-if='isLoggedIn'>
          <router-link to="/pet" class="nav-link">Pet</router-link>
        </li>
        <li class="nav-item" v-if='isLoggedIn'>
          <a to="/logout" class="nav-link" @click.prevent="logoutUser">Logout</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['logout']),
    logoutUser() {
      this.logout();
    }
  }
}
</script>

<style>

</style>