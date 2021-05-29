<template>
<div>
    <div class="container">
        <ArticleSection :articles="articles" />
    </div>
</div>
</template>

<script>
import ArticleSection from "~/components/Sections/ArticleSection";

export default {
    async asyncData({
        $content,
        params
    }) {
        const articles = await $content("articles", params.slug).sortBy('key','desc').fetch();

        return {
            articles,
        };
    },

    components: {
        ArticleSection,
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
                    content: "Criston Mascarenhas ",
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
