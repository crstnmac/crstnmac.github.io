<template>
  <div class="articleSelected">
    <div class="intro">
      <div class="elevate-cover">
        <div class="elevate-cover__textOffset">
          <div class="elevate-cover__left">
            <nuxt-link to="/articles">
              <div id="circle-text" class="ct">
                <div r="50" class="circle-text-almanac">
                  <svg id="s" height="100" width="100" viewBox="-50,-50,100,100">
                    <defs>
                      <path id="p" d="M-50,0 A50,50,0 1 1 50,0 A50,50,0 1 1 -50,0Z" />
                      <circle id="r" r="50" />
                    </defs>
                    <svg class="arrow" viewBox="0 0 1 1" height="0.5em" width="1em">
                      <polygon
                        fill="currentColor"
                        points="0 2.33 4.72 2.33 3.53 3.53 4

4 6 2 4 0 3.53 0.47 4.72 1.67 0 1.67 0 2.33"
                        transform="rotate(180) translate(-3,-2) "
                      />
                    </svg>
                    <text id="t">
                      <textPath id="tp" xlink:href="#p">
                        Come Back • Come back • Come back •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </nuxt-link>
          </div>

          <div class="elevate-cover__left">
            <span class="articleSelected-year">{{ year }}</span>

            <h1 class="elevate-cover__title">{{ title }}</h1>
            <p class="elevate-cover__description">{{ description }}</p>
          </div>
        </div>
        <ImageResponsive
          :imageurl="'article/' + id + '/_main.png'"
          v-if="!noMainImage"
          width="100%"
          class="elevate-cover__img"
          :alt="'Blog picture'"
        />
      </div>
      <nuxt-content class="article" :document="article" />
    </div>
  </div>
</template>

<script lang="js">
export default {

    async asyncData({
        $content,
        params
    }) {
        const article = await $content('articles', params.slug).fetch()

        return {
            name: params.slug,
            cardAlt: article.cardAlt,
            article: article,
            year: article.year,
            title: article.title,
            description: article.description,
            id: article.id,
            noMainImage: article.noMainImage,
        }
    },

    head() {
        return {
            title: this.pageTitle,

            meta: [{
                    name: "author",
                    content: "Criston Mascarenhas"
                },
                {
                    name: "description",
                    property: "og:description",
                    content: this.description,
                    hid: "description"
                },
                {
                    property: "og:title",
                    content: this.pageTitle
                },
                {
                    property: "og:image",
                    content: this.ogImage
                },
                {
                    name: "twitter:description",
                    content: this.description
                },
                {
                    name: "twitter:image",
                    content: this.ogImage
                }
            ],

        };
    },

    transition: {
        name: 'slide-fade'
    },

    computed: {
        ogImage() {
            return `${require(`@/assets/images/article/${this.id}/_thumbnail.png`)}`;
        },
        pageTitle() {
            return this.title + ' – Criston Mascarenhas';
        },
        href() {
            return {
                href: `${process.env.baseUrl }/articles`,
            }
        },

    }
}
</script>

<style lang="scss">
.overflowhidden {
  overflow: hidden;
}

.articleSelected-horizontalImage {
  height: 56rem;
  background-size: contain;
  transition: all ease 0.35s;
  opacity: 0;

  &[lazy="loading"] {
    filter: blur(15px);
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }

  &[lazy="loaded"] {
    opacity: 1;
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }

  .intro {
    display: flex;
  }
}

.elevate-cover {
  display: flex;
  flex-direction: column;
  min-height: 459px;

  @media (min-width: $screen-md) {
    flex-direction: row;
  }

  &__img {
    border-radius: 20px;
    width: 100%;
    padding: 2.4rem;
  }

  &__textOffset {
    width: 100%;
  }

  &__left {
    max-width: 500px;
    width: 100%;
    padding: 2.4rem;
    margin-bottom: auto;

    @media (min-width: $screen-md) {
      margin-left: auto;
      padding: 2.4rem 4rem 2.4rem 2.4rem;
    }
  }

  &__textOffset {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 3rem;
    font-family: "Tiempos Headline", Arial, sans-serif;
    color: $secondary;

    @media (min-width: $screen-sm) {
      font-size: 4rem;
    }
  }

  &__description {
    margin: 0;
    opacity: 0;
    animation: fadeinmove 0.5s ease;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }
}

.nuxt-content {
  padding: 1em;
}

.article {
  font-size: 16px;
  line-height: 1.7;
  color: $secondary;
  scroll-behavior: smooth;

  > *:not(.datagrid):not(.image-placeholder) {
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  @media (min-width: $screen-sm) {
    padding: 7.2rem 0;
    font-size: 19px;
  }

  h2 {
    padding-bottom: 3.2rem;
    padding-bottom: 2rem;

    @media (max-width: $screen-sm) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2.2rem;
    padding-bottom: 2rem;
  }

  li {
    list-style-type: initial;
  }

  pre {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    padding: 2.4rem;
    border-radius: 15px;
    overflow-x: scroll;
    display: block;
    margin-bottom: 5rem;

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      height: 8px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(108, 92, 255, 0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(108, 92, 255, 0.3);
      background-color: rgb(156, 145, 255);
    }

    &::-webkit-scrollbar-corner {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  img {
    width: inherit;
    margin: 0 auto;

    @media (max-width: $screen-sm) {
      width: 100%;
    }
  }

  code {
    border-radius: 4px;
    display: inline;
    font-size: 14px;
    padding: 0.2em 0.4em;
    background: $background-primary-darker;
    color: $secondary;

    @media (min-width: $screen-sm) {
      font-size: 16px;
    }
  }
}
</style>
