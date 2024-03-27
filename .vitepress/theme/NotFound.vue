<script setup lang="ts">
const msgs = [`Oops! Nothing to see here...`];

function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)];
}
</script>

<template>
  <div class="hero is-dark is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">404</p>
        <p class="subtitle">{{ getMsg() }}</p>
      </div>
    </div>
  </div>
</template>
