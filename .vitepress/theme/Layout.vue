<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div v-if="!!title && !!subtitle">
          <p class="title">{{ title }}</p>
          <p class="subtitle">{{ subtitle }}</p>
        </div>
        <div v-else>
          <Content />
        </div>
      </div>
    </div>
    <div v-if="contactLinks.length > 0" class="hero-foot">
      <nav class="tabs is-boxed is-large is-centered">
        <div class="container">
          <ul>
            <li v-for="link in contactLinks">
              <a :href="link.href" :aria-label="link.label">
                <font-awesome-icon :icon="link.icon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>

  <Debug />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const { frontmatter } = useData();

const title = computed(() => frontmatter.value.title);

const subtitle = computed(() => frontmatter.value.subtitle);

const contactLinks = computed(() =>
  !!frontmatter.value.links ? frontmatter.value.links : []
);
</script>
