<script lang="ts" setup>
import '../../node_modules/vue3-drr-grid-layout/dist/style.css'
definePageMeta({
  layout: 'page',
})

const layout = [
  { x: 0, y: 0, w: 2, h: 2, i: 0, data: 'co' },
  { x: 2, y: 0, w: 2, h: 4, i: 1, data: 'mi' },
  { x: 4, y: 0, w: 2, h: 5, i: 2, data: 'ng' },
  { x: 6, y: 0, w: 2, h: 3, i: 3, data: 'soon' },
]
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.projects.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <client-only>
          <grid-layout
            :layout="layout"
            :col-num="12"
            :row-height="30"
            use-css-transforms
            :resizable="false"
          >
            <template #default="{ gridItemProps }">
              <grid-item
                v-for="item in layout"
                :key="item.i"
                v-bind="gridItemProps"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
              >
                {{ item.data }}
              </grid-item>
            </template>
          </grid-layout>
        </client-only>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style>
.vue-grid-item.vue-grid-placeholder {
  background-color: blanchedalmond;
  border-radius: 15px;
}

.vue-grid-item:not(.vue-grid-placeholder) {
  border-radius: 15px;
  background: rgba(199, 193, 193, 0.356);
  border: 1px solid black;
  padding: 1em;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
