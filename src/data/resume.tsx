import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kartik Deshmukh",
  initials: "MB",
  url: "https://mellob.in",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/hyderabad",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "I am Kartik Deshmukh aka MelloB. I am a keen developer with a great passion for technology. I have been coding since I was 12, I have explored various fields like Linux, IoT and embedded systems, Ethical Hacking, Web and app development, cloud computing, cryptocurrency, and AI, and still continuing to explore more and more.",
  avatarUrl: "/me.JPG",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Docker",
    "Kubernetes",
    "Java",
    "C",
    "AWS",
    "GCP",
    "Azure",
    "Firebase",
    "MongoDB",
    "Redis",
    "GraphQL",
    "REST",
    "DevOps",
    "Agile",
    "Microservices",
    "Serverless",
    "Postgresql",
    "DynamoDB",
    "Prisma/Drizzle",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kartik.mellob@coffeecodes.in",
    tel: "+917569236628",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mellob1989",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mellobai",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/mellob1989",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kartik.mellob@coffeecodes.in",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CoffeeCodes",
      href: "https://www.linkedin.com/company/coffeecodes-agency",
      badges: [],
      location: "Remote",
      title: "Senior Full Stack Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQESBbL-jjVFoQ/company-logo_200_200/company-logo_200_200/0/1730355372897/coffeecodes_agency_logo?e=1740009600&v=beta&t=Gy-WexaIcO-EcZMxl3yt1PIZnA-lr0B4zNzH1QZDANM",
      start: "March 2023",
      end: "Present",
      description: `Founded a software agency during my second year of B.Tech, providing
        comprehensive tech support to early-stage startups and businesses. Successfully led the agency to deliver
        high-quality solutions to various clients, focusing on web and app development.`,
    },
    {
      company: "Noobsverse Private Limited",
      badges: [],
      href: "https://www.linkedin.com/company/noobsverse",
      location: "Remote",
      title: "CEO and Founder",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQHzR4rc6ihSOQ/company-logo_200_200/company-logo_200_200/0/1715020855550/noobsverse_logo?e=1740009600&v=beta&t=6hlOF8wW2Zgt0Jj6kKHZhBET80QAt8rSIodCFEj3nSc",
      start: "January 2023",
      end: "Present",
      description: `Spearheaded the creation of a cutting-edge AI-powered Learning
        Management System (LMS) from the ground up. The platform features AI mentors, enabling personalized
        one-on-one sessions for students, and online labs that allow students to deploy and use software directly from
        the platform without any installation. Led the product from the ideation stage through MVP development to a
        full-scale production-level solution, now ready to serve thousands of students. Managed the entire development
        lifecycle, including architecture design, backend and frontend development, AI integration, and deployment. Directed a multidisciplinary team of developers, designers, and AI specialists to ensure the
        successful execution of the project. Focused on aligning the team with product goals, meeting project
        milestones, and maintaining high standards of quality and innovation. As CEO, developed and executed the strategic vision for Noobsverse,
        ensuring the product meets market needs and achieves business objectives. Combined technical expertise with
        leadership skills to drive the company’s growth and product success.`,
    },
  ],
  education: [
    {
      school: "Anurag University",
      href: "https://anurag.edu.in/",
      degree:
        "Bachelor's Degree of Technology (B.Tech) in Artificial Intelligence and Machine Learning",
      logoUrl:
        "https://pbs.twimg.com/profile_images/1273946610364547077/EaoLiHml_400x400.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Narayana Junior College",
      href: "https://www.narayanagroup.com/",
      degree: "SSC and Intermediate Education",
      logoUrl: "https://www.narayanagroup.com/images/logo.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "St. Joseph's Public School",
      href: "https://sjshabsiguda.org/",
      degree: "ICSE",
      logoUrl: "https://sjshabsiguda.org/images/sjpslogo.jpg",
      start: "2010",
      end: "2020",
    },
  ],
  talks: [
    {
      title: "Draper Startup House",
      href: "https://www.linkedin.com/posts/mellobai_had-a-great-experience-at-draper-startup-activity-7175937953074962433-tYV6?utm_source=share&utm_medium=member_desktop",
      dates: "2024",
      active: true,
      description: `Talk at startup mixer event in
        Draper Startup House, Hyderabad.`,
      links: [
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/posts/mellobai_had-a-great-experience-at-draper-startup-activity-7175937953074962433-tYV6?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQEkcUPy-Cli0A/feedshare-shrink_800/feedshare-shrink_800/0/1710876913002?e=1734566400&v=beta&t=1EyBEemgAlutgO7cOyYjMWuBYR1Am-5bUMsOk7t6mJk",
      video: "",
    },
    {
      title: "Talk at a hardware event",
      href: "https://www.linkedin.com/posts/krishna-vardhan-5a63591a1_iot-drones-robotics-activity-7188847442883219456-ai1u/?utm_source=share&utm_medium=member_desktop",
      dates: "2024",
      active: true,
      description: `Gave a talk on my journey in hardware and gave some insights about how begineers can
        approach the space. Also talked about Avidia’s cloud labs and how it’s helpful to solve
        unavailability of good hardware to many students.`,
      links: [
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/posts/krishna-vardhan-5a63591a1_iot-drones-robotics-activity-7188847442883219456-ai1u/?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/hardware-talk.JPG",
      video: "",
    },
    {
      title: "Talk at Microsoft",
      href: "https://www.linkedin.com/posts/mellobai_beyond-the-tech-event-a-triumph-of-collaboration-activity-7157243190423515136-1oH4/?utm_source=share&utm_medium=member_desktop",
      dates: "2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      links: [
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/posts/mellobai_beyond-the-tech-event-a-triumph-of-collaboration-activity-7157243190423515136-1oH4/?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/microsoft-talk.jpg",
      video: "",
    },
    {
      title: "OpenAI Workshop",
      href: "https://www.linkedin.com/posts/mellobai_openai-autogpt-activity-7057068071605170176-AIoO/?utm_source=share&utm_medium=member_desktop",
      dates: "2023",
      active: true,
      description: `Conducted a workshop on OpenAI, helping them understand how LLMs work, insights on
        prompt engineering, how to use AI to increase productivity and lastly conducted a
        activity where we helped students make a website completely from scratch using just
        OpenAI and basic tools without writting any code. `,
      links: [
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/posts/mellobai_openai-autogpt-activity-7057068071605170176-AIoO/?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "",
      video: "/openai-workshop.mp4",
    },
    {
      title: "Ethical Hacking Workshop",
      href: "https://www.linkedin.com/posts/mellobai_noobs-noobslearning-activity-7048170922477842432-Wb48/?utm_source=share&utm_medium=member_desktop",
      dates: "2023",
      active: true,
      description: `Took a offline workshop on ethical hacking where I helped students understand the
      basics of cybersecurity and demonstrated phishing attacks, wifi twin evil attack, man in
      the middle attack and HID attack. `,
      links: [
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/posts/mellobai_noobs-noobslearning-activity-7048170922477842432-Wb48/?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQEqFzY3XO-_eQ/feedshare-shrink_800/feedshare-shrink_800/0/1680414890527?e=1734566400&v=beta&t=Jus3wVwt9sZ07Mm-CQpgqewPYWMMUUhB9f0RTuzVJFk",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Avidia",
      dates: "2023",
      location: "Hyderabad, India",
      description: `Avidia is an innovative learning platform that blends quizzes, assessments, live sessions, and hands-on projects to create an engaging and interactive educational experience. This platform is designed to cater to various learning styles and provide students with practical skills and knowledge.`,
      image:
        "https://noobsverse-cdn-public.s3.ap-south-1.amazonaws.com/assets/logos/nvai/Avidia.png",
      mlh: "https://noobsverse-cdn-public.s3.ap-south-1.amazonaws.com/assets/logos/nvai/Avidia.png",
      links: [
        {
          title: "Github",
          href: "https://github.com/MelloB1989/avidia.web",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "ZeroKart",
      dates: "2023",
      location: "Hyderabad, India",
      description:
        "A e-commerce platform that allows users to buy and sell products. It has a wide range of categories and products to choose from.",
      image: "https://www.0kart.com/loger.png",
      mlh: "https://www.0kart.com/loger.png",
      links: [
        {
          title: "Website",
          href: "https://www.0kart.com/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "AU Notes App",
      dates: "2023",
      location: "Hyderabad, India",
      description:
        "A notes app for students of Anurag University. It allowed students to search for notes, download them and upload notes.",
      icon: "public",
      image: "",
      links: [
        {
          title: "LinkedIn Post",
          href: "https://www.linkedin.com/posts/shiva-charan-mandhapuram-%E2%9A%A1%EF%B8%8F-a23762201_ease-your-preparation-with-our-notes-app-activity-7188595195263778817-WQWh?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Karma DevOps Guru",
      dates: "2024",
      location: "Hyderabad, India",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image: "/k.jpg",
      links: [
        {
          title: "LinkedIn Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/mellobai_devops-kubernetes-aks-activity-7218898748620382209-9_9U?utm_source=share&utm_medium=member_desktop",
        },
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://karma-ops.coffeecodes.in/",
        },
      ],
    },
    {
      title: "Karmatch",
      dates: "2024",
      location: "Hyderabad, India",
      description:
        "A AI powered matchmaking platform that uses machine learning to match users based on their interests and preferences.",
      image: "/Karmatch.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Backend",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/MelloB1989/karmatch.backend",
        },
        {
          title: "React Native",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/MelloB1989/karmatch.app",
        },
      ],
    },
    {
      title: "PhonePe transactions Parser",
      dates: "2023",
      location: "Hyderabad, India",
      description:
        "A simple python script that parses PhonePe transaction pdf.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7C7cl9ufztQRxoH-y_biXvwoAf5bynbtnA&s",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/MelloB1989/phonepe.parser",
        },
      ],
    },
    {
      title: "Incogni NGL",
      dates: "2023",
      location: "Hyderabad, India",
      description:
        "A free instagram NGL app alternative with no ads and extra features which allows to see the information of the people who are sending you messages.",
      image:
        "https://cdn.global.noobsverse.com/Incogni-removebg-preview+(1).png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/MelloB1989/incogni.ngl",
        },
      ],
    },
    {
      title: "Karma Auth",
      dates: "2023",
      location: "Hyderabad, India",
      description:
        "A simple authentication library for Node.js that uses JWT tokens for authentication. It is a alternative to Firebase auth.",
      image: "",
      mlh: "",
      links: [
        {
          title: "NPM",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.npmjs.com/package/karma-auth.npm",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/MelloB1989/karma-auth.npm",
        },
      ],
    },
    {
      title: "KarmaPay",
      dates: "2023",
      location: "Hyderabad, India",
      description:
        "KarmaPay is an open-source project that aims to simplify online payments by providing a unified API endpoint for multiple payment gateways. It abstracts the complexities of integration, allowing developers to seamlessly work with various payment providers while maintaining a single, consistent interface.",
      image: "/karmapay.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/MelloB1989/karmapay.pg",
        },
        {
          title: "Documentation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://docs.coffeecodes.in/KarmaPay",
        },
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://karmapay.live/",
        },
      ],
    },
    {
      title: "Termux Setup Script",
      dates: "2022",
      location: "Hyderabad, India",
      description: "C compiler on Termux Android",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAP1BMVEUAAAD///+Pj4/IyMjk5ORaWlqVlZUsLCz5+flBQUGysrKIiIhwcHDFxcUnJyfv7+88PDy6urrOzs5PT09nZ2c+hVzsAAAAhklEQVRIie2U2Q6AIAwEaVW88AD9/28VXtRgMGY9EpPOI8mkLC1VShCENyk0sy4RsyKiHBFrL1KDmG0wDWJ2wewRc/hdTKibcMwxlLSIice0wRw/FNGrwo+DtgMdADQgPOS3AgIfOQpoXLbhOO3FAZn2nLQ2Xo9XxcNCnvzBip7TFQVBeIAFFYEDi0dKM38AAAAASUVORK5CYII=",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/MelloB1989/termux_clang_install",
        },
      ],
    },
  ],
} as const;
