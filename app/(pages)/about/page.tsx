import {Box, ExperienceSection} from 'components'

const experiences = [
  {
    name: 'Work Experience',
    emoji: 'boy-coding',
    info: [
      {
        place: 'Mumbai, IN',
        date: 'Nov 2023 - Present',
        topic: 'Fullstack Developer',
        event: 'BarrierBreak',
        eventlink: 'https://www.barrierbreak.com/',
        description: 'Working as a Fullstack Engineer',
        img: 'barrierbreak',
        active: 'Present',
        imgAlt: 'Image',
      },
      {
        place: 'Work from home',
        date: 'Oct 2022 - Oct 2023',
        topic: 'Frontend Developer',
        event: 'Timeless',
        eventlink: 'https://timeless.co/',
        description: 'Working as a Frontend Engineer',
        img: 'timeless',
        imgAlt: 'timeless',
      },
      {
        place: 'Bangalore,IN',
        date: "March'21 - Sept'22",
        topic: 'Software Engineer',
        event: 'GlobalLogic',
        eventlink: 'https://globallogic.com',
        description:
          'Migrated a large scale healthcare supplychain management product from AngularJS to Angular.',
        gif: 'globallogic',
      },
      {
        place: 'Mumbai,IN',
        date: "Jun'19 - Jul'19",
        topic: 'Internship',
        event: 'SlashRTC',
        eventlink: 'https://www.slashrtc.com/',
        description:
          'Develped a dashboard for Dialogflow of a chatbot using ReactJS',
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
        topic: 'Self-learner',
        about:
          'From each job, class, co-worker, book, article, meet-up or life experience.',
        description:
          "This is how I learnt the 80% of what I know now and how I improve it. At the moment I'm learning ",
        learnt: 'TypeScript,Angular & Spring Boot',
        gif: 'selflearn',
        active: 'Always',
      },
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
    ],
  },
]
export default function AboutPage() {
  return (
    <Box as="section" className=" w-full">
      <ExperienceSection experiences={experiences} />
    </Box>
  )
}
