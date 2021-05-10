<template>
  <li>
    <nuxt-link
      class="card"
      :to="{ name: 'article-slug', params: { slug: article.name } }"
    >
      <ImageResponsive
        :classes="'cardThumbnail'"
        :imageurl="`article/${article.id}/_thumbnail.png`"
        :width="'952'"
        :height="'509'"
        :alt="article.cardAlt"
      />
      <h3 class="card__title">{{ article.title }}</h3>
      <p class="card__description">{{ article.description }}</p>
    </nuxt-link>
  </li>
</template>

<script lang="js">
export default {
    props: {
        article: {
            type: Object
        }
    }
}
</script>

<style lang="scss">
.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;
  width: 100%;

  &[lazy="loaded"] {
    opacity: 1;
  }
}

.card {
  @media (min-width: $screen-sm) {
    padding-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  &:hover {
    .card__title {
      color: $primary;
    }
  }

  &__title {
    font-family: "Tiempos Headline", Arial, sans-serif;
    color: $secondary;
    padding-top: 1rem;
    font-size: 2.5rem;
    transition: color 0.3s;
  }

  &__description {
    margin: 0;
    color: $grey-2;
  }
}
</style>
