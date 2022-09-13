<template>
  <div>Hello {{name}}</div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const count = ref(0)
    const name = ref('World')
    return {
      count,
      name
    }
  },
}
</script>

<style scoped>

</style>
