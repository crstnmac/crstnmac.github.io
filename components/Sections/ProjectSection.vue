<template>
<section>
    <div class="projects__top">
        <div>
            <h2>Projects</h2>
            <span class="emoji-title emoji--boy-coding" />
        </div>
    </div>
    <ul class="projects">
        <project-card v-for="project in projects" :key="project.name" :project="project" />
    </ul>
</section>
</template>

<script>
import ProjectCard from "~/components/ProjectCard.vue";

export default {
    components: {
        ProjectCard,
    },
    props: {
        projects: {
            type: Array,
        },
    },
};
</script>

<style lang="scss">
.projects {
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
