import { BlogSection, Box, AboutMe, ExperienceSection } from "components";
import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function Home() {
  const posts = allBlogs
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  const experiences = [
    {
      name: 'Work Experience',
      emoji: 'boy-coding',
      info: [
        {
          place: 'Work from home',
          date: "Oct'22 - Present",
          topic: 'Frontend Developer',
          event: 'Timeless',
          eventlink: 'https://timeless.co/',
          description: 'Working as a Frontend Developer',
          img: 'timeless',
          active: 'Present',
          imgAlt: 'Image',
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
  ];

  return (
    <Box as="section">
      <AboutMe />
      {/* <BlogSection posts={posts} /> */}
      <ExperienceSection experiences={experiences} />
    </Box>
  );
}
