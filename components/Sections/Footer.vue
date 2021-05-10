<template>
  <footer>
    <div class="footer__main">
      <div class="container">
        <div class="footer__contact">
          <span class="text-negative">
            Feel free to drop an “Hi or Hello” back,
            <br />just writing me a
            <a
              target="_blank"
              rel="noopener"
              href="https://twitter.com/devcriston"
              class="ani twitter"
            >
              <span>tweet</span> </a
            >, or sending me an
            <a
              target="_blank"
              rel="noopener"
              href="mailto:criston2011@gmail.com"
              class="ani"
            >
              <span>email</span> </a
            >. <br /> </span
          >As you see, I love emojis so don’t forget to add one.
        </div>
      </div>
    </div>

    <div class="footer__info">
      <div class="container footer__info-container">
        <div class="footer__copyright">
          © {{ year }} — Open sourced. Check the code at
          <a target="_blank" href="https://gitlab.com/crstnmac/criscodes" class="ani">
            <span>Gitlab</span> </a
          >. Project done by
          <a target="_blank" href="https://twitter.com/devcriston" class="ani">
            <span>Criston Mascarenhas </span>
          </a>
          using
          <a target="_blank" href="https://nuxtjs.org" class="ani">
            <span> Nuxt </span>
          </a>
          &
          <a target="_blank" href="https://vuejs.org" class="ani"> <span> Vue </span> </a
          >💚.
        </div>
        <a
          href="#top"
          class="footer__top-page"
          v-smooth-scroll="{
            duration: 2500,
            offset: -50,
            updateHistory: false,
          }"
        >
          <div id="circle-text" class="ct">
            <div r="50" class="circle-text-almanac">
              <svg id="s" height="75" width="75" viewBox="-50,-50,100,100">
                <defs>
                  <path id="p" d="M-50,0 A50,50,0 1 1 50,0 A50,50,0 1 1 -50,0Z" />
                  <circle id="r" r="50" />
                </defs>
                <svg class="arrow" viewBox="0 0 1 1" height="0.5em" width="1em">
                  <polygon
                    fill="#0051ff"
                    points="0 2.33 4.72 2.33 3.53 3.53 4

4 6 2 4 0 3.53 0.47 4.72 1.67 0 1.67 0 2.33"
                    transform="rotate(270) translate(-3,-2.5) "
                  />
                </svg>
                <text id="t">
                  <textPath id="tp" xlink:href="#p">
                    Scroll to top • Scroll to top •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss">
.footer {
  &__info {
    background-color: black;
    padding: 1.5em 0;
    color: whitesmoke;
  }

  &__info-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;

    @media (min-width: $screen-sm) {
      flex-direction: row;
    }
  }

  &__copyright {
    text-align: center;

    @media (min-width: $screen-sm) {
      text-align: inherit;
    }
  }

  &__top-page {
    color: $text-negative;
    display: block;
    text-align: center;
    line-height: 1;
    -webkit-transition: 1s;
    -moz-transition: 1s;
    transition: 1s;

    @media (min-width: $screen-sm) {
      text-align: right;
    }

    @media (min-width: $screen-md) {
      display: inline;
      position: absolute;
      right: 0;
      bottom: 0;
    }

    .ct {
      display: flex;
      justify-content: center;
    }

    #tp {
      font-size: 1.5rem;
      color: whitesmoke;
    }
  }
}
</style>
