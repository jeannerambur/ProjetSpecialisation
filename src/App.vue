<template>
<div id='app'>

  <Nav />
  <div class="auth-wrapper">
    <div class="auth-inner">

      <router-view />
    </div>
  </div>
</div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav,
  }

}
</script>


<style>

  img {
    width: 100%;
    position: absolute;
    top: 20%;
  }
  .navbar-expand .navbar-collapse {
    justify-content: flex-end;
  }

  .auth-inner {
    width: 80%;
    margin: auto;
    background: #ffffff;
    box-shadow: 0 14px 80px rgba(34, 35, 58, 0.2);
    padding: 20px 55px 20px 55px;
    border-radius: 15px;
    margin-top: 30%;
  }
  .auth-wrapper {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: left;
  }

.auth-wrapper .form-control:focus {
     border-color: #167bff;
     box-shadow: none;
  }

  .btn {
    margin-top: 5%;
  }

</style>