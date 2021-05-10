<template>
<li class="project projectContainer">
    <h3 v-for="tag in project.tags" :key="tag" class="project__tags">
        {{ tag }}
    </h3>
    <a :href="project.link" target="_blank">
        <h3 class="project__title">{{ project.title }}</h3>
        <p class="project__description">{{ project.description }}</p>
    </a>
</li>
</template>

<script lang="js">
export default {
    props: {
        project: {
            type: Object
        }
    }
}
</script>

<style lang="scss">
.projectContainer {
    background-color: $blue;
    border-radius: 2rem;
    padding: 1.2em;
}

.project {
    @media (min-width: $screen-sm) {
        &:last-child {
            margin-right: 0;
        }
    }

    &:hover {
        .project__title {
            color: $grey-1;
        }
    }

    &__title {
        font-family: "Tiempos Headline", Arial, sans-serif;
        color: $secondary;
        font-size: 4rem;
        transition: color 0.3s;
        opacity: 0.9;
    }

    &__description {
        margin: 0;
        color: $grey-3;
    }

    &__tags {
        display: inline-block !important;
        background-color: rgba(255, 255, 255, 0.15);
        padding: 0.3em;
        font-size: 1.5rem;
        color: $grey-3;
        border-radius: 0.8rem;
        margin-right: 0.5em;
        text-transform: uppercase;
    }
}
</style>
