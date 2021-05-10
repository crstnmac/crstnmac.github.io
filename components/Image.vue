<template lang="html">
<div :class="`image-placeholder ${isRounded}`">
    <img :data-src="imageRequired" :data-loading="imageRequired.placeholder" :width="width" :height="height" :class="classes" :alt="alt" v-lazy-load />
</div>
</template>

<script>
export default {
    props: {
        imageurl: {
            type: String,
        },
        alt: {
            type: String,
        },
        width: {
            type: String,
        },
        height: {
            type: String,
        },
        classes: {
            type: String,
        },
        alt: {
            type: String,
        },
        rounded: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        imageRequired() {
            return require(`~/assets/images/${this.imageurl}`);
        },
        isRounded() {
            return this.rounded ? "image-placeholder--rounded" : "";
        },
    },
};
</script>

<style lang="scss" scoped>
.image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    line-height: 0;

    &--rounded {
        border-radius: 100%;
    }

    .img {
        z-index: 1;
    }
}

.isLoading {
    opacity: 0.5;
    filter: blur(15px);
}

.isLoaded {
    opacity: 1;
}

.lazyLoad {
    transition: all ease 0.5s;
    border-radius: 20px;
}
</style>
