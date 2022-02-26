<template>
  <div class="home">
    <p>Bienvenue {{ $store.getters.StateUser }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
