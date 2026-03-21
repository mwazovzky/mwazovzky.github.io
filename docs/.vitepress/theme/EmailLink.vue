<template>
  <a v-if="email" :href="`mailto:${email}`">{{ email }}</a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  user: { type: String, required: true },
  domain: { type: String, required: true },
})

const email = ref(null)

onMounted(() => {
  email.value = `${props.user}@${props.domain}`
})
</script>
