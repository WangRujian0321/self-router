<template>
  <component :is="comp"></component>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "./index";
let router = useRouter()
const comp = computed(()=>{
  const route = router.routes.find((item)=>{
    return item.path === router.current.value
  })
  return route?route.component : null
})
</script>
