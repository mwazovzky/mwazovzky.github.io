<script setup>
import DefaultTheme from 'vitepress/theme'
import Quote from './Quote.vue'
import TechnologyCloud from './TechnologyCloud.vue'
import PoweredByVitepress from './PoweredByVitepress.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #sidebar-nav-after>
      <hr />
      <Quote />
      <hr />
      <div class="center">
        <TechnologyCloud />
      </div>
      <hr />
      <PoweredByVitepress />
    </template>
  </Layout>
</template>
