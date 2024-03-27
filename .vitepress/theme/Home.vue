<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const { site, frontmatter } = useData();

const contactLinks = computed(() =>
  !!frontmatter.value.links ? frontmatter.value.links : [],
);
</script>

<template>
  <div class="hero is-dark is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">{{ site.title }}</p>
        <p class="subtitle">{{ site.description }}</p>
      </div>
    </div>
    <div v-if="contactLinks.length > 0" class="hero-foot">
      <nav class="tabs is-boxed is-large is-centered">
        <div class="container">
          <ul>
            <li v-for="link in contactLinks">
              <a :href="link.href" :aria-label="link.label">
                <ClientOnly>
                  <font-awesome-icon :icon="link.icon" />
                </ClientOnly>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
