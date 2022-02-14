<template>
  <div>
    <h1> {{ title }} </h1>
    <div class="row">
      <template v-for="meme in memes" :key="meme.id">
        <Meme :meme="meme"/>
      </template>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue"
import { useStore } from "vuex"
import Meme from "./Meme"

export default {
  components: {
    Meme
  },
  setup() {
    const store = useStore()
    const memes = computed(() => store.state.memes)

    onMounted(() => {
      store.dispatch("getMemes")
    })

    return {
      title: store.state.titleApp,
      memes
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
