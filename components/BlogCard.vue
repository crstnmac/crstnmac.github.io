<script lang="ts" setup>
// micro compiler
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  path: {
    type: String,
    default: '',
  },
  createdAt: {
    type: String,
    default: '',
  },
  blogType: {
    type: String,
    default: '',
  },
})

// state
const path = toRef(props, 'path')
</script>

<template>
  <a
    :class="`transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline`"
    :href="path"
    target="_blank"
  >
    <h1>{{ title }}</h1>
  </a>
</template>
