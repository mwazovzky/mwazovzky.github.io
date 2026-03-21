<template>
  <svg class="word-cloud" :width="width" :height="height">
    <g ref="content" :transform="`translate(${width / 2}, ${height / 2})`"></g>
  </svg>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import * as d3 from 'd3'
import cloud from 'd3-cloud'

const MAX = 50
const MIN = 20

const props = defineProps({
  data: { type: Array, required: true },
})

const content = ref(null)
const width = 240
const height = 240

const counts = computed(() => props.data.map((item) => item.count))
const min = computed(() => Math.min(...counts.value))
const max = computed(() => Math.max(...counts.value))

function weightedSize(count) {
  if (max.value === min.value) {
    return MIN + (MAX - MIN) / 2
  }
  return MIN + (MAX - MIN) * (count - min.value) / (max.value - min.value)
}

function process(item) {
  return {
    ...item,
    size: item.count ? weightedSize(item.count) : (MIN + MAX) / 2,
    color: item.color ? `#${item.color}` : '#777777',
  }
}

function draw(words) {
  d3.select(content.value)
    .selectAll('text')
    .data(words)
    .enter()
    .append('text')
    .style('font-size', (item) => `${item.size}px`)
    .style('font-family', 'Impact')
    .style('fill', (item) => item.color)
    .attr('text-anchor', 'middle')
    .attr('transform', (item) => `translate(${[item.x, item.y]}) rotate(${item.rotate})`)
    .text((item) => item.text)
}

onMounted(() => {
  const words = props.data.map((item) => process(item))

  cloud()
    .size([width, height])
    .words(words)
    .padding(5)
    .rotate((item) => (item.rotate === 0 ? 0 : ~~(Math.random() * 2) * 90))
    .fontSize((item) => item.size)
    .on('end', draw)
    .start()
})
</script>
