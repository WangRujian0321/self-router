<template>
  <a @click="switchUrl">
    <slot />
  </a>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "@/router-made/index";
let router = useRouter();
const props = defineProps({
  to: {type: String, required: true}
})
function switchUrl() {
  const routes = router.routes.find(item=>{
    return item.path === props.to
  })
  switch (router.history.type) {
    case "Hash":
      window.location.href = window.location.origin + "/#" + props.to;
      break;
    case "History":
      window.history.pushState({
        url: props.to,
        name: routes.name
      }, routes.name, props.to);
      router.current.value = props.to;
      break;
  }
}
</script>
