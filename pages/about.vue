<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper class="flex flex-col justify-center items-center">
    <PageHeader>
      <PageTitle :text="$t('pages.about.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <div class="flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/20360870?v=4"
          class="inline-block rounded-full"
          alt="crstnmac"
          width="100"
          height="100"
        />
        <Button
          size="xs"
          text="Criston Mascarenhas (@crstnmac)"
          class="font-extrabold mt-4"
          href="https://github.com/crstnmac"
        />
      </div>
    </PageBody>
  </PageWrapper>
</template>
