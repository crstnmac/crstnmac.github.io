<template>
  <header id="top" class="nav-header">
    <nav class="nav container">
      <div class="logo">
        <nuxt-link to="/">
          <h2 class="logo__text">CRISTON</h2>
        </nuxt-link>
      </div>

      <!-- <div class="nav-alt-header is-hidden-xs" style="margin-right: auto">
        <p class="nav-alt-text">WEB DEVELOPER</p>
        <p class="nav-alt-text">DESIGN</p>
      </div> -->

      <div class="toggle" style="margin-left: auto">
        <ColorMode />
      </div>

      <button
        v-bind:class="{ active: isActive, 'nav-list': isActive }"
        @click="isActive = !isActive"
        class="menu"
      >
        <svg viewBox="0 0 64 48">
          <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37" />
          <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24" />
          <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37" />
        </svg>
      </button>
    </nav>
    <transition name="slide">
      <div v-if="isActive === true" class="nav-list">
        <div class="ulist">
          <div @click="isActive = !isActive" class="item">
            <nuxt-link class="linkto" to="/articles">Articles</nuxt-link>
          </div>
          <div @click="isActive = !isActive" class="item">
            <nuxt-link class="linkto" to="/projects">Projects</nuxt-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import ColorMode from "@/components/ColorMode.vue";

export default {
  components: { ColorMode },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    projects() {
      window.open("https://github.com/crstnmac", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  max-width: 100%;
  align-items: center;
  justify-content: space-around;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
  transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.nav-header {
  z-index: 100;
}

.nav-alt-text {
  margin: 0;
  padding: 0;
  margin-left: 2em;
}

.toggle {
  padding-right: 2rem;
}

.nav-list {
  background: $background-primary;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  > .ulist {
    text-align: center;
    position: absolute;
    top: 10%;
    left: 20%;
    right: 20%;

    @media (max-width: $screen-xs) {
      left: 0;
      right: 0;
    }

    @media (max-width: $screen-md) {
      left: 0;
      right: 0;
    }

    @media (max-width: $screen-sm) {
      left: 0;
      right: 0;
    }

    .linkto {
      text-decoration: none;
      text-transform: uppercase;
      color: $primary;
      font-size: 12rem;
      font-weight: 700;
      font-family: inherit;
      display: block;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;

      @media (max-width: $screen-md) {
        font-size: 8rem;
      }

      @media (max-width: $screen-sm) {
        font-size: 6rem;
      }

      @media (max-width: $screen-xs) {
        font-size: 4rem;
      }
    }
  }
}

.nav-list {
  height: 100%;
  transition-delay: 0s;

  > .ulist {
    > .item {
      opacity: 1;
      transition-delay: 0.5s;
      overflow: hidden;
    }
  }
}

//slide animation

.slide-leave-active,
.slide-enter-active {
  transition: 1s cubic-bezier(0.18, 0.08, 0.4, 0.99);
}

.slide-enter {
  transform: translate(100%, 0);
}

.slide-leave-to {
  transform: translate(100%, 0);
}

//menu-icon style

.menu {
  /* --color: rgb(26, 26, 26); */
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  right: 1em;
  outline: none;
  position: relative;
  z-index: 50;
  border: none;
  background: none;
  cursor: pointer;
  -webkit-appearence: none;
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 64px;
    height: 48px;
    top: -6px;
    left: -14px;
    padding: 0;
    stroke: $secondary;
    stroke-width: 4px;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    display: block;
    position: absolute;

    path {
      transition: stroke-dasharray var(--duration, 0.85s) var(--easing, ease)
          var(--delay, 0s),
        stroke-dashoffset var(--duration, 0.85s) var(--easing, ease)
          var(--delay, 0s);
      stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);
      stroke-dashoffset: var(--offset, 126px);
      transform: translateZ(0);

      &:nth-child(2) {
        --duration: 0.7s;
        --easing: ease-in;
        --offset: 100px;
        --array-2: 74px;
      }

      &:nth-child(3) {
        --offset: 133px;
        --array-2: 107px;
      }
    }
  }

  &.active {
    svg {
      path {
        --offset: 57px;

        &:nth-child(1),
        &:nth-child(3) {
          --delay: 0.15s;
          --easing: cubic-bezier(0.2, 0.4, 0.2, 1.1);
        }

        &:nth-child(2) {
          --duration: 0.4s;
          --offset: 2px;
          --array-1: 1px;
        }

        &:nth-child(3) {
          --offset: 58px;
        }
      }
    }
  }
}

.logo {
  &__text {
    text-align: center;
    padding: 0.5em;
    margin: 0;
    stroke: 1px $background-primary;

    -webkit-text-stroke-width: 1px;
  }
}
</style>
