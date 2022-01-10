<template>
  <button
    class="
      relative
      overflow-hidden
      justify-center
      px-4
      flex
      items-center
      bg-gray-200
      dark:bg-dark-surface dark:text-dark-onSurfaceSecondary
      rounded-full
      outline-none
      text-light-onSurfacePrimary
      dark:text-dark-onSurfacePrimary
      transition-colors
      duration-300
      ease-linear
    "
    v-bind:class="{
      'btn-orange ': $colorMode.preference === 'light',
      'btn-green ': $colorMode.preference === 'system',
      'btn-night ': $colorMode.preference === 'dark',
    }"
    @click="setCurrentTheme"
  >
    <transition name="from-bottom-to-bottom" mode="out-in">
      <span
        v-if="$colorMode.preference === 'dark'"
        key="dark"
        class="inline-block large mr-1"
      >
        🌚
      </span>
      <span
        v-if="$colorMode.preference === 'system'"
        key="system"
        class="inline-block large mr-1"
      >
        💻
      </span>
      <span
        v-else-if="$colorMode.preference === 'light'"
        key="light"
        class="inline-block large mr-1"
      >
        🌞
      </span>
    </transition>
  </button>
</template>

<script>
export default {
  methods: {
    setCurrentTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === "system"
          ? "light"
          : this.$colorMode.preference === "light"
          ? "dark"
          : "system";
    },
  },
};
</script>

<style lang="scss">
button {
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke-width: 0px;
}

.rounded-full {
  border-radius: 100%;
}

.show {
  animation: show-icon 300ms forwards;
}
.hide {
  animation: hide-icon 300ms forwards;
}
@keyframes show-icon {
  from {
    opacity: 0;
    transform: scaleY(0);
    // transform: translate3d(-100%, 10px, 0) rotate(-180deg) scale3d(0.5, 0.5, 0.5);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
    // transform: translate3d(0, 0, 0) rotate(0) scale3d(1, 1, 1);
  }
}
@keyframes hide-icon {
  from {
    opacity: 1;
    transform: scaleY(1);
    // transform: translate3d(0, 0, 0) rotate(0) scale3d(1, 1, 1);
  }
  to {
    opacity: 0;
    transform: scaleY(0);
    // transform:  translate3d(100%, 10px, 0) rotate(180deg) scale3d(0.5, 0.5, 0.5);
  }
}
.from-bottom-to-bottom-enter-active {
  opacity: 1;
  transition: opacity 100ms, transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}
.from-bottom-to-bottom-leave-active {
  opacity: 1;
  transition: opacity 100ms, transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}
.from-bottom-to-bottom-enter {
  opacity: 0;
  transform: scaleY(0);
}
.from-bottom-to-bottom-leave-active {
  opacity: 0;
  transform: scaleY(0);
}
</style>
