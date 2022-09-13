<template>
  <div>Hello {{name}}</div>
</template>

<script>
import {ref} from 'vue';
export default {
  setup() {
    const name = ref('About');
    return {
      name
    }
  }
}
</script>

<style scoped>

</style>
