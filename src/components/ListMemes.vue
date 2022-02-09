<template>
  <div>
    <h1> {{ title }} </h1>
    <p>{{ memes }}</p>
  </div>
</template>

<script>
import { onMounted, computed } from "vue"
import { useStore } from "vuex"

export default {
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
