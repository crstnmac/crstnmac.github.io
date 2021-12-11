<template>
  <section id="experience">
    <div v-for="(elem, index) in elements" :key="index" :elem="elem">
      <h2>{{ elem.name }}</h2>
      <span :class="`emoji-title emoji--${elem.emoji}`"></span>

      <ul class="experience__content">
        <li
          v-for="ex in elem.info"
          :key="ex.place"
          :ex="ex"
          :class="
            ex.youtube
              ? `experience__item experience__item--video`
              : ex.active
              ? `experience__item experience__item--active`
              : `experience__item`
          "
        >
          <div class="experience__time-place">
            <div class="experience__place">
              {{ ex.place }}
            </div>
            <div class="experience__time">
              <span>{{ ex.date }}</span>
              <span v-if="ex.active">
                -
                <span class="active">{{ ex.active }}</span>
              </span>
            </div>
          </div>

          <a
            target="_blank"
            rel="noopener"
            :href="ex.youtube"
            :aria-label="ex.yAria"
            class="experience__image"
          >
            <svg
              viewBox="0 0 67 57"
              focusable="false"
              class="experience__image-video-logo"
              v-if="ex.youtube"
            >
              <path
                fill="#FF0000"
                d="M63,14.87c-0.72-2.7-2.85-4.83-5.56-5.56C52.54,8,32.88,8,32.88,8S13.23,8,8.32,9.31
        c-2.7,0.72-4.83,2.85-5.56,5.56C1.45,19.77,1.45,30,1.45,30s0,10.23,1.31,15.13c0.72,2.7,2.85,4.83,5.56,5.56
        C13.23,52,32.88,52,32.88,52s19.66,0,24.56-1.31c2.7-0.72,4.83-2.85,5.56-5.56C64.31,40.23,64.31,30,64.31,30
        S64.31,19.77,63,14.87z"
              ></path>
              <polygon
                fill="#FFFFFF"
                points="26.6,39.43 42.93,30 26.6,20.57"
              ></polygon>
            </svg>

            <ImageResponsive
              v-if="ex.img"
              rounded
              :imageurl="`experiences/${ex.img}.png`"
              :width="'100px'"
              :height="'100px'"
              :classes="`img`"
              :alt="ex.description"
            />
            <ImageResponsive
              v-if="ex.gif"
              :imageurl="`experiences/${ex.gif}.gif`"
              :width="'80px'"
              :height="'80px'"
              :classes="`img`"
              rounded
              :alt="ex.description"
            ></ImageResponsive>
          </a>
          <div class="experience__panel">
            <div class="experience__position">
              <h3 class="experience__title">
                {{ ex.topic }} — <span v-if="ex.about"> {{ ex.about }}</span>
                <a
                  target="_blank"
                  rel="noopener"
                  :href="ex.eventlink"
                  :class="ex.eventlink ? `experience__company ani` : ``"
                  ><span> {{ ex.event }}</span></a
                >
              </h3>
            </div>
            <div class="experience__description">
              <p>
                {{ ex.description }}
                <span class="experience__learnt">{{ ex.learnt }}</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      elements: [
        {
          name: "Public Speaking",
          emoji: "fancy-face",
          info: [
            {
              place: "Bangalore,IN",
              date: "25 Jan 2020",
              topic: "Workshop - Fullstack Webapp using Vue & MongoDB",
              event: "Free Software Movement Karnataka",
              eventlink: "https://fsmk.org",
              description:
                "In this 1 week workshop I spoke about how you can make a web application using Vue,MongoDB and NodeJS",
              img: "fsmk2020",
              imgAlt: "Image",
            },
          ],
        },
        {
          name: "Work Experience",
          emoji: "boy-coding",
          info: [
            {
              place: "Bangalore,IN",
              date: "March'21",
              topic: "Software Engineer",
              event: "GlobalLogic",
              eventlink: "https://globallogic.com",
              description: "Working as a Software Engineer.",
              active: "Present",
              gif: "globallogic",
            },
            {
              place: "Mumbai,IN",
              date: "Jun'19 - Jul'19",
              topic: "Internship",
              event: "SlashRTC",
              eventlink: "https://www.slashrtc.com/",
              description:
                "Here I develped the dashboard for Dialogflow of a chatbot using ReactJS",
              img: "slashrtc",
              imgAlt: "Image",
            },
          ],
        },
        {
          name: "Education",
          emoji: "nerd",
          info: [
            {
              place: "Everywhere",
              topic: "Self-learner",
              about:
                "From each job, class, co-worker, book, article, meet-up or life experience.",
              description:
                "This is how I learnt the 80% of what I know now and how I improve it. At the moment I'm learning ",
              learnt: "TypeScript,Angular & Spring Boot",
              gif: "selflearn",
              active: "Always",
            },
            {
              place: "Mangalore,IN",
              date: "Aug'16 - Sep'20",
              topic: "Computer Science, Bachelor Degree",
              event: "Vivekananda College of Engineering and Technology",
              eventlink: "https://vtu.ac.in",
              description:
                "I studied my university degree under Visvesvaraya Technological University(VTU). Here is what I learnt: ",
              learnt: "Engineering Subjects, Grow as a person",
              img: "vcet",
              imgAlt: "VCET Puttur",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.experience {
  position: relative;
  padding: 0;
}

.experience__content {
  vertical-align: middle;
  list-style: none;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 14rem;
    left: 21%;
    width: 2px;
    display: block;
    margin-left: -1.5px;
    display: none;
    background-color: #e4e4e4;
  }

  > li {
    position: relative;
    margin-bottom: 1rem;
    min-height: 5rem;

    &:after {
      content: " ";
      display: table;
      clear: both;
    }

    &:before {
      content: " ";
      display: table;
    }
  }
}

.experience__time-place {
  width: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-top: 1.5rem;
  margin-bottom: 1rem;
}

.experience__time {
  .active {
    color: $primary;
  }

  display: inline-block;
}

.experience__panel {
  position: relative;
  padding: 0;
  margin-top: -5.5rem;
  text-align: left;
}

.experience__image {
  position: relative;
  display: block;
  width: 16.66667%;
  height: 16.66667%;
  line-height: 0;

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: -5px;
    left: -5px;
    height: calc(100% + 6px);
    border-radius: 100%;
    background: rgb(255, 255, 255);
    border: 2px solid #e4e4e4;
    width: calc(100% + 6px);
  }

  img {
    z-index: 1;
    position: relative;
    width: 100%;
    height: auto;
    margin-left: 0;
    text-align: center;
    border-radius: 100%;
  }
}

.experience__image-video-logo {
  right: 0;
  z-index: 10;
  position: absolute;
  top: -8px;
  height: 26px;
}

.experience__item--active {
  .experience__image {
    &:after {
      border-color: #6c5cff;
    }
  }
}

.experience__item--video {
  .experience__image {
    &:after {
      border-color: red;
    }

    &:hover {
      &:after {
        border-style: dashed;
        -webkit-animation: stroke-draw 6s linear infinite;
        animation: stroke-draw 6s linear infinite;
      }
    }
  }
}

.experience__place {
  color: $secondary;
  display: inline-block;
}

.experience__position {
  color: #030303;
  padding: 0.3rem 0 0 22%;
  min-height: 5rem;
}

.experience__studies {
  color: #030303;
  padding: 0.3rem 0 0 22%;
  min-height: 5rem;
}

.experience__title {
  font-size: medium;
  color: $secondary;
}

.experience__description {
  margin-top: 2rem;
}

.experience__learnt {
  color: $secondary;
}

@media (min-width: 768px) {
  .experience__item {
    display: -webkit-box;
    display: flex;
  }

  .experience__content {
    &:before {
      display: inline;
      display: initial;
    }

    > li {
      margin-bottom: 5rem;
    }
  }

  .experience__time-place {
    margin-bottom: 0;
    display: block;
    width: 16.66667%;
  }

  .experience__panel {
    padding: 0 0 0 2.7rem;
    margin-top: 0;
    width: 75%;
  }

  .experience__image {
    height: 8.33333%;
    width: 8.33333%;
  }

  .experience__description {
    margin-top: 0;
  }

  .experience__place {
    display: block;
  }

  .experience__time {
    display: block;
  }

  .experience__position {
    padding: 0;
    min-height: 0;
  }

  .experience__studies {
    padding: 0;
    min-height: 0;
  }
}

@media (min-width: 992px) {
  .experience__content {
    &:before {
      bottom: 7rem;
    }
  }
}
</style>
