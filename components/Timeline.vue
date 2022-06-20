<template>
  <div px-6>
    <section id="experience">
      <div v-for="(elem, index) in elements" :key="index" :elem="elem">
        <h2 text-3xl font-bold mt-2em mb-1em>{{ elem.name }}</h2>
        <span :class="`emoji-title emoji--${elem.emoji}`"></span>

        <ul
          align-mid
          relative
          before="display:inline content-empty absolute top-0 bottom-2 left-4 width-1 block -ml-1 none bg-gray-900"
        >
          <li
            v-for="ex in elem.info"
            :key="ex.place"
            :ex="ex"
            relative
            mb-4
            mh-2
            after="content-empty table clear-both"
            before="table content-empty"
            px-5
            py-2
            bg-gray-200
            class="dark:bg-dark-800/[0.5]"
            rounded-2xl
          >
            <div w-full flex justify-between mb-1>
              <div>
                {{ ex.place }}
              </div>
              <div>
                <span dark:text-gray-400 text-dark-600>{{ ex.date }}</span>
                <span v-if="ex.active">
                  -
                  <span text-blue-700>{{ ex.active }}</span>
                </span>
              </div>
            </div>

            <div
              z-1
              absolute
              h-20
              w-20
              border-2
              border-gray-300
              rounded-full
              :class="
                ex.active
                  ? `border-violet-700	
                                                                        border-dotted animate-[spin_15s_linear_infinite]`
                  : ex.youtube
                  ? `border-red-700	
                                                                        border-dotted animate-[spin_15s_linear_infinite]`
                  : ``
              "
            ></div>
            <a
              target="_blank"
              rel="noopener"
              :href="ex.youtube"
              :aria-label="ex.yAria"
              relative
              block
              w-20
              rounded-full
              border-5
              border-gray-100
              after="content-empty block relative -top-2 -left-2"
            >
              <svg
                v-if="ex.youtube"
                viewBox="0 0 67 57"
                focusable="false"
                z-10
                w-10
                h-25
                absolute
                class="-top-10 -right-4"
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

              <img
                v-if="ex.img"
                rounded-full
                w-20
                :src="`~assets/images/experiences/${ex.img}.png`"
                :alt="ex.description"
              />
              <img
                v-if="ex.gif"
                :src="`~assets/images/experiences/${ex.gif}.gif`"
                :width="'80px'"
                :height="'80px'"
                :classes="`img`"
                rounded-full
                w-20
                :alt="ex.description"
              />
            </a>
            <div relative p-0 text-left>
              <div>
                <h3 font-bold>
                  {{ ex.topic }} — <span v-if="ex.about"> {{ ex.about }}</span>
                  <a
                    target="_blank"
                    rel="noopener"
                    :href="ex.eventlink"
                    :class="ex.eventlink ? `text-blue-600` : ``"
                    ><span> {{ ex.event }}</span></a
                  >
                </h3>
              </div>
              <div dark:text-gray-400 text-dark-600 text-sm mt-1em>
                <p>
                  {{ ex.description }}
                  <span dark:text-white text-dark-300 text-md font-medium>{{
                    ex.learnt
                  }}</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
const elements = [
  {
    name: 'Work Experience',
    emoji: 'boy-coding',
    info: [
      {
        place: 'Bangalore,IN',
        date: "March'21",
        topic: 'Software Engineer',
        event: 'GlobalLogic',
        eventlink: 'https://globallogic.com',
        description: 'Working as a Software Engineer.',
        active: 'Present',
        gif: 'globallogic',
      },
      {
        place: 'Mumbai,IN',
        date: "Jun'19 - Jul'19",
        topic: 'Internship',
        event: 'SlashRTC',
        eventlink: 'https://www.slashrtc.com/',
        description:
          'Here I develped the dashboard for Dialogflow of a chatbot using ReactJS',
        img: 'slashrtc',
        imgAlt: 'Image',
      },
    ],
  },
  {
    name: 'Public Speaking',
    emoji: 'fancy-face',
    info: [
      {
        place: 'Bangalore,IN',
        date: '25 Jan 2020',
        topic: 'Workshop - Fullstack Webapp using Vue & MongoDB',
        event: 'Free Software Movement Karnataka',
        eventlink: 'https://fsmk.org',
        description:
          'In this 1 week workshop I spoke about how you can make a web application using Vue,MongoDB and NodeJS',
        img: 'fsmk2020',
        imgAlt: 'Image',
      },
    ],
  },
  {
    name: 'Education',
    emoji: 'nerd',
    info: [
      {
        place: 'Mangalore,IN',
        date: "Aug'16 - Sep'20",
        topic: 'Computer Science, Bachelor Degree',
        event: 'Vivekananda College of Engineering and Technology',
        eventlink: 'https://vtu.ac.in',
        description:
          'I studied my university degree under Visvesvaraya Technological University(VTU). Here is what I learnt: ',
        learnt: 'Engineering Subjects, Grow as a person',
        img: 'vcet',
        imgAlt: 'VCET Puttur',
      },
      {
        place: 'Everywhere',
        topic: 'Self-learner',
        about:
          'From each job, class, co-worker, book, article, meet-up or life experience.',
        description:
          "This is how I learnt the 80% of what I know now and how I improve it. At the moment I'm learning ",
        learnt: 'TypeScript,Angular & Spring Boot',
        gif: 'selflearn',
        active: 'Always',
      },
    ],
  },
]
</script>
