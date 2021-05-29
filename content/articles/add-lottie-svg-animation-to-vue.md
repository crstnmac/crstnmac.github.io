---
key: 3
name: add-lottie-svg-animation-to-vue
title: How to add Lottie svg animations to Vuejs/Nuxtjs
year: 30 May 2020
id: add-lottie-svg-animation-to-vue
# description: |
#   Add lottie svg animations to your vue/nuxt project.
---

### Step 1: Create a Nuxt project

```bash
yarn create nuxt-app yellowdragon
```

my nuxt startup config:

<image-responsive imageurl="article/add-lottie-svg-animation-to-vue/create_proj.png" width="100%" alt="proj"></image-responsive>

🎉 Successfully created project yellowdragon

To get started:

```bash
cd yellowdragon
 yarn dev
```

### Step 2: Create a Lottie reusable component in the components directory

Add lottie-web module:

```bash
yarn add lottie-web
```

```js
//~/components/Lottie.vue

<template>
  <div :style="style" ref="animationConatainer"></div>
</template>

<script>
//import lottie-web module
import lottie from 'lottie-web'

export default {
  props: {
    //props for native lottie-web preferences
    options: {
      type: Object,
      required: true
    },
    //props for hight and width of the animation container
    height: Number,
    width: Number
  },

  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto'
      }
    }
  },

  mounted() {
    //render config for lottie animation
    lottie.loadAnimation({
      container: this.$refs.animationConatainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings
    })
  }
}
</script>

```

### Step 3: Import the lottie component where you want to add lottie animation

```js
//~/pages/index.vue

<script>
import Lottie from '@/components/Lottie.vue';

export default {
  components: {
    Lottie
  }
}
</script>
```

### Step 4: Download the lottie animation json file and add it to the assets directory

[Animation link](https://lottiefiles.com/23498-they-see-me-trollin)

Here we will add the animation files in ~/assets/animated

Now we will import the animation file using async method

```js

//~/pages/index.vue

<script>
import Lottie from '@/components/Lottie.vue';

export default {
  components: {
    Lottie
  },
  asyncData() {
    return {
      lottieOptions: {
        animationData: require(`~/assets/animated/yellow.json`)
      }
    };
  }
}
</script>

```

And finally add the component to the render template

```js
 <div>
    <Lottie :options="lottieOptions" />
 </div>

```

And your final `index.vue` should look like :

```js
<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        yellowdragon
      </h1>
      <h2 class="subtitle">
        My breathtaking Nuxt.js project
      </h2>
      <div>
        <Lottie :options="lottieOptions" ></Lottie>
      </div>

      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from '@/components/Lottie.vue'

export default {
  components: {
    Lottie
  },
  asyncData() {
    return {
      lottieOptions: {
        animationData: require(`~/assets/animated/yellow.json`)
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

```

And you should get something like this :

<image-responsive imageurl="article/add-lottie-svg-animation-to-vue/yellowdrag.gif" width="100%" alt="proj"/></image-responsive>

[Project Link](https://github.com/crstnmac/yellowdragon-lottie)
