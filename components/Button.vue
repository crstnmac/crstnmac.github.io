<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: '',
  },
})

// state:styles
const defaultStyle = `
  cursor-pointer
  border transition-color duration-300
  focus:outline-none  focus:ring-offset-1 focus:dark:ring-offset-dark-50 focus:dark:ring-dark-400 focus:ring-dark-600/[0.6] focus:ring-offset-dark-800/[0.6]
  flex items-center justify-center
`
const styles = reactive<{
  [key: string]: string
}>({
  primary:
    'text-dark hover:bg-gray-200 dark:text-white dark:hover:bg-dark-300  p-4 border-none',
  secondary:
    'text-dark-800 bg-white hover:bg-dark-200 dark:text-white dark:bg-dark-900  dark:hover:bg-dark-600 border-none',
})
const sizes = reactive<{
  [key: string]: string
}>({
  lg: 'h-12 px-8 text-lg rounded-lg',
  md: 'h-10 px-6 text-base rounded-lg',
  sm: 'h-8 px-4 text-sm rounded-lg',
  xs: 'h-6 px-3 text-xs rounded-lg',
})

// state
const selectedStyle = computed(() => styles[props.type] || styles.primary)
const selectedSize = computed(() => sizes[props.size] || sizes.lg)

// methods
const onClick = () => {
  const router = useRouter()
  if (props.to) {
    router.push(props.to)
  }
}
</script>

<template>
  <NuxtLink
    v-if="to"
    tag="a"
    :to="to"
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
  >
    <slot>{{ text }}</slot>
  </NuxtLink>
  <a
    v-else
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
    :href="href"
    @click="onClick"
  >
    <slot>{{ text }}</slot>
  </a>
</template>
