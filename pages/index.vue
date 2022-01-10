<template>
  <div>
    <div class="page-index container scrollbar" id="style-2">
      <section id="hero" class="hero">
        <div>
          <meta
            name="p:domain_verify"
            content="4668560dd94b9d4a8a95c5dd564d2450"
          />
          <h2 class="hero_title">Criston Mascarenhas</h2>
          <h3>Software Engineer</h3>
          <p>and a dog lover.</p>

          <div class="links-group">
            <button @click="twitter" class="bt btn-green">Lets Chat</button>
            <button @click="resume" class="bt btn-orange">Resume</button>
          </div>
        </div>

        <div class="hero_img">
          <Lottie :options="lottieOptions" />
        </div>
      </section>

      <Links />

      <section id="about">
        <h2>About me</h2>
        <span class="emoji-title emoji--thinking"></span>
        <p class="about__content">
          I’m a
          <span class="about__highlight">Software Engineer.</span>
          I studied Computer Science Engineering in Mangalore-India, worked in
          innovative startups and Free Software Organizations. I’m interested in
          the whole visual part of the web, its usability, performance and
          accessibility. My surname is Mascarenhas ([maska'ɾeɲɐs] or
          [maʃka'ɾeɲɐʃ]), a habitational name taken on from a civil parish in
          Portugal called Mascarenhas. This name is branched to Spain and is
          also found in India (particularly in Goa and Mangalore), where it was
          taken by Portuguese colonists. I've lived on planet earth for
          {{ calculateAge }} years and have worked on the web for
          {{ calculateExperience }} of them.
        </p>
      </section>

      <Experience />
    </div>
  </div>
</template>

<script>
import Lottie from "~/components/Lottie.vue";
import Experience from "~/components/Sections/ExperienceSection";
import Links from "~/components/Sections/LinkSection";

export default {
  components: {
    Lottie,
    Links,
    Experience,
  },

  methods: {
    twitter() {
      window.open("https://twitter.com/devcriston", "_blank");
    },
    resume() {
      window.open(
        "https://drive.google.com/file/d/1IYiTjZYlIXaMTz0V-bStuoTSYk9VGmfx/view?usp=sharing",
        "_blank"
      );
    },
  },

  transition: {
    name: "slide-fade",
  },

  head() {
    return {
      title: "Criston Mascarenhas",
      meta: [
        {
          name: "author",
          content: "Criston Mascarenhas",
        },
        {
          name: "description",
          property: "og:description",
          content: "I’m a Front-End Developer based in India.",
          hid: "description",
        },
        {
          property: "og:title",
          content: "Criston Mascarenhas",
        },
        {
          property: "og:image",
          content: this.ogImage,
        },
        {
          name: "twitter:description",
          content: "I’m a Front-End Developer based in India.",
        },
        {
          name: "twitter:image",
          content: this.ogImage,
        },
      ],
    };
  },
  computed: {
    ogImage: function () {
      return `${require(`@/assets/images/logo-cris.png`)}`;
    },
    calculateAge: function () {
      let currentDate = new Date();
      let birthDate = new Date("1998/12/22");
      let difference = currentDate - birthDate;
      let age = Math.floor(difference / 31557600000);
      return age;
    },
    calculateExperience: function () {
      let currentDate = new Date();
      let startDate = new Date("2018/04/01");
      let difference = currentDate - startDate;
      let experience = Math.floor(difference / 31557600000);
      return experience;
    },
  },
  asyncData() {
    return {
      lottieOptions: {
        animationData: require(`~/assets/animated/idea.json`),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: $screen-sm) {
    flex-direction: column;
  }
}

.hero_title {
  font-size: 5rem;
}

.hero_img {
  width: 100%;
  padding: 2em;
}

.bt {
  width: 100%;
  height: 3em;
}

.btn-blue:hover {
  color: $blue;
  background-color: $blue-bg-light;
  backdrop-filter: saturate(180%) blur(20px);
  border: 2px dashed $blue;
}

.btn-orange {
  color: $orange;
  background-color: $orange-bg;
}

.btn-orange:hover {
  color: $orange;
  background-color: $orange-bg-light;
  backdrop-filter: saturate(180%) blur(20px);
  border: 2px dashed $orange;
}
</style>
