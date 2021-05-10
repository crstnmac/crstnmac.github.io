<template>
<div>
    <div class="container">
        <ProjectSection :projects="projects" />
    </div>
</div>
</template>

<script>
import ProjectSection from "~/components/Sections/ProjectSection";

export default {
    async asyncData({
        $content,
        params
    }) {
        const projects = await $content("projects", params.slug).fetch();

        return {
            projects,
        };
    },

    components: {
        ProjectSection
    },

    transition: {
        name: "slide-fade",
    },

    head() {
        return {
            title: "Criston Mascarenhas - Front-End Developer",
            description: "I’m a Front-End Developer based in India.",

            meta: [{
                    name: "author",
                    content: "Criston Mascarenhas "
                },
                {
                    name: "description",
                    property: "og:description",
                    content: "I’m a Front-End Developer  based in India.",
                    hid: "description",
                },
            ],
        };
    },
    computed: {
        ogImage: function () {
            return;
        },
    },
};
</script>
