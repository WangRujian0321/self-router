<script setup>
import {ref, computed} from "vue";
import HelloPage from '@/components/HelloPage';
import AboutPage from "@/components/AboutPage";
import NotFound from "@/components/NotFound";

const routes = {
  '/': HelloPage,
  '/about': AboutPage
}
const curPath = ref(window.location.hash)

window.addEventListener('hashchange', ()=> {
  curPath.value = window.location.hash;
})
const curView = computed(()=> {
  return routes[curPath.value.slice(1)||'/'] || NotFound
})

</script>
<template>
    <a href="#/">Home</a> |
    <a href="#/about">About</a> |
    <a href="#/non-existent-path">Broken Link</a>
    <component :is="curView"></component>
</template>
