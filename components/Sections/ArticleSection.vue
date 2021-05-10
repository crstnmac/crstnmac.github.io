<template>
  <section>
    <div class="articles__top">
      <div>
        <h2>Articles</h2>
        <span class="emoji-title emoji--writing" />
      </div>
    </div>
    <ul class="articles">
      <article-card
        v-for="article in articles"
        :key="article.name"
        :article="article"
      />
    </ul>
  </section>
</template>

<script>
import ArticleCard from "~/components/ArticleCard.vue";

export default {
  components: {
    ArticleCard,
  },
  props: {
    articles: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.articles {
  margin: 0;

  @media (min-width: $screen-sm) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    display: grid;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 4rem;
  }
}
</style>
