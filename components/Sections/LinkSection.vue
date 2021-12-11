<template>
<section>
    <ul>
        <div class="links-group" v-for="(elem, index) in links" :key="index" :elem="elem">
            <li v-for="el in elem" :key="el.link" :el="el">
                <button @click="openLink(el.link)" :class="el.style">
                    {{ el.icon }}
                </button>
            </li>
        </div>
    </ul>
</section>
</template>

<script>
import SvgIcon from "~/components/SvgIcon.vue";

export default {
    data() {
        return {
            links: [{
                twitter: {
                    link: "https://twitter.com/devcriston",
                    icon: "twitter",
                    style: "bt btn-twitter",
                },
                github: {
                    link: "https://github.com/crstnmac",
                    icon: "github",
                    style: "bt btn-github",
                },
                gitlab: {
                    link: "https://gitlab.com/crstnmac",
                    icon: "gitlab",
                    style: "bt btn-gitlab",
                },
                linkedin: {
                    link: "https://linkedin.com/in/devcriston",
                    icon: "linkedin",
                    style: "bt btn-linkedin",
                },
            }, ],
        };
    },

    components: {
        SvgIcon,
    },

    methods: {
        openLink(link) {
            return window.open(link, "_blank", "noopener");
        },
    },
};
</script>

<style lang="scss" scoped>
.bt {
    width: 100%;
    height: 3em;
}

.btn-twitter {
    color: $twitter;
    background-color: $twitter-bg;
}

.btn-twitter:hover {
    color: $twitter;
    background-color: $twitter-bg-light;
    backdrop-filter: saturate(180%) blur(20px);
    border: 2px dashed $twitter;
}

.btn-github {
    color: $github;
    background-color: $github-bg;
}

.btn-github:hover {
    color: $github;
    background-color: $github-bg-light;
    backdrop-filter: saturate(180%) blur(20px);
    border: 2px dashed $github;
}

.btn-gitlab {
    color: $gitlab;
    background-color: $gitlab-bg;
}

.btn-gitlab:hover {
    color: $gitlab;
    background-color: $gitlab-bg-light;
    backdrop-filter: saturate(180%) blur(20px);
    border: 2px dashed $gitlab;
}

.btn-linkedin {
    color: $linkedin;
    background-color: $linkedin-bg;
}

.btn-linkedin:hover {
    color: $linkedin;
    background-color: $linkedin-bg-light;
    backdrop-filter: saturate(180%) blur(20px);
    border: 2px dashed $linkedin;
}

.links-group {
    margin: 0;

    @media (min-width: $screen-sm) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 25px;
        display: grid;
    }

    @media (max-width: $screen-md) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 25px;
        display: grid;
    }

    li {
        display: block;
    }
}
</style>
