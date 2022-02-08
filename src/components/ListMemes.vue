<template>
  <h1> {{ title }} </h1>
</template>

<script>
import { onMounted } from "vue"
import { useStore } from "vuex"

export default {
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch("getMemes")
    })

    return {
      title: store.state.titleApp
    }
  }
}
</script>
