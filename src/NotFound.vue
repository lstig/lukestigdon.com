<template>
  <p class="title">404</p>
  <p class="subtitle">
    {{ getMsg() }}
  </p>
</template>

<script setup lang="ts">
const msgs = [
  `Oops! Nothing to see here...`,
]

function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)]
}
</script>