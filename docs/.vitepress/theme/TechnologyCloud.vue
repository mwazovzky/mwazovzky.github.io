<template>
  <ClientOnly>
    <WordCloud :data="data" />
  </ClientOnly>
</template>

<script setup>
import WordCloud from './WordCloud.vue'

const data = [
  { text: 'PHP', count: 36, color: '777BB4' },
  { text: 'GO', count: 36, color: '00ADD8' },
  { text: 'Laravel', count: 24, color: 'FF2D20', rotate: 0 },
  { text: 'MySQL', count: 24, color: '4479A1' },
  { text: 'Kafka', count: 24, color: '231F20' },
  { text: 'Grafana', count: 24, color: 'F46800' },
  { text: 'Docker', count: 12, color: '2496ED' },
  { text: 'Redis', count: 12, color: 'DC382D' },
  { text: 'Prometheus', count: 12, color: 'E6522C' },
  { text: 'Elasticsearch', count: 12, color: 'FEC514' },
  { text: 'Vue', count: 12, color: '42B883' },
  { text: 'JS', count: 12, color: 'F7DF1E' },
]
</script>
