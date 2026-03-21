<script setup>
import DefaultTheme from 'vitepress/theme'
import Quote from './Quote.vue'
import TechnologyCloud from './TechnologyCloud.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #sidebar-nav-after>
      <div class="sidebar-bottom">
        <hr />
        <Quote />
        <hr />
        <div class="center">
          <TechnologyCloud />
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>
/* Push sidebar-nav-after content to the bottom */
.VPSidebar .nav {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--vp-nav-height) - 32px);
}

.sidebar-bottom {
  margin-top: auto;
}
</style>
