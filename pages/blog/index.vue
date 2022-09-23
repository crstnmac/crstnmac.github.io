<script lang="ts" setup>
type BlogType = 'medium' | 'own'

/**
 * Blog
 */
type Blog = {
  title: string
  path: any
  createdAt: string
  type: BlogType
}

const url = ref(
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@devcriston'
)
const { data }: any = await useFetch(url)
const mediumBlogs: Blog = data.value.items.map((d: any) => ({
  title: d.title,
  path: d.link,
  createdAt: d.pubDate,
  type: 'medium',
}))

definePageMeta({
  layout: 'page',
})
</script>
<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.blog.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div>
          <ul>
            <li v-for="blog in mediumBlogs" :key="blog.path">
              <blog-card
                :title="blog.title"
                :description="blog.description"
                :path="blog.path"
                :created-at="blog.createdAt"
                :blog-type="blog.type"
              />
            </li>
          </ul>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
