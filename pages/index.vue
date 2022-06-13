<script lang="ts" setup>
// meta
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper class="flex justify-center items-center">
    <div class="w-full">
      <AboutMe />
      <Work />
    </div>
  </PageWrapper>
</template>

<style lang="scss">
$padding: 0.05em;
.animated-text-bg {
  position: relative;
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  content: var(--content);
  display: block;
  width: 100%;
  text-align: center;
  color: theme('colors.slate.800');
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding-left: $padding;
  padding-right: $padding;
  &:before {
    content: var(--content);
    position: absolute;
    display: block;
    width: 100%;
    text-align: center;
    color: theme('colors.slate.800');
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    padding-left: $padding;
    padding-right: $padding;
  }
}
.animated-text-fg {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: $padding;
  padding-right: $padding;
  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
  position: relative;
  opacity: 0;
  z-index: 1;
  animation: anim-fg 8s infinite;
  animation-delay: var(--delay);
  @keyframes anim-fg {
    0% {
      opacity: 1;
    }
    16% {
      opacity: 1;
    }
    33% {
      opacity: 0;
    }
    83% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
html.dark {
  .animated-text-bg {
    color: theme('colors.gray.100');
    &:before {
      color: theme('colors.gray.100');
    }
  }
}

.triangle-shape {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid theme('colors.green.600');
  transform: translate(-15rem, -6rem) rotate(45deg);
}
</style>
