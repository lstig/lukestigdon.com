<script setup lang="ts">
import { useData } from "vitepress";
import NotFound from "./NotFound.vue";
import Home from "./Home.vue";
import Page from "./Page.vue";

const { page, frontmatter } = useData();
</script>

<template>
  <NotFound v-if="page.isNotFound" />
  <Home v-if="frontmatter.home" />
  <Page v-else />
</template>
