<template>
  <h1>Memes</h1>
  <h2>{{ $store.state.titleApp }}</h2>
  <button type="button" class="btn btn-primary">Primary</button>

  <ListMemes />
</template>

<script>
import { useStore } from "vuex"
import ListMemes from "./components/ListMemes"

export default {
  name: 'App',
  components: {
    ListMemes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
