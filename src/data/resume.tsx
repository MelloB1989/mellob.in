import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, BriefcaseBusiness } from "lucide-react";

export const DATA = {
  name: "Kartik Deshmukh",
  initials: "MB",
  url: "https://mellob.in",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/hyderabad",
  description:
    "Experienced developer | 15x National level hackathons winner | Founder @Noobsverse. I love building things and helping people. Very active on Twitter.",
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
    { href: "https://blogs.mellob.in", icon: NotebookIcon, label: "Blog" },
    {
      href: "https://coffeecodes.in",
      icon: BriefcaseBusiness,
      label: "CoffeeCodes",
    },
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
      title: "Web development and metaverse workshop",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7101603094412591104?utm_source=share&utm_medium=member_desktop",
      dates: "2023",
      active: true,
      description: `🚀 We've just concluded a dynamic 2-day workshop on web development, where we dived deep into the basics of HTML, CSS, and JavaScript. 🖥️.
 `,
      links: [
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7101603094412591104?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQE6IIQQ7GWhIg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1693154113267?e=1735171200&v=beta&t=3XgnOnzgXq1MQanIHI-iq_oCDiJl1TQg-46pEVKKdIw",
      video: "",
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
    {
      title: "Microsoft x ByteXL Hackathon at CBIT",
      href: "https://www.deccanchronicle.com/technology/in-other-news/winners-of-microsoft-bytexl-led-hackxcelerate-2024-at-cbit-891391",
      dates: "2024",
      active: true,
      description: `This prestigious national-level hackathon was hosted by Chaitanya Bharati Institute of Technology in partnership with Microsoft and byteXL. Competing with some of the brightest minds from across the country on 26th-27th April 2024, we secured the top spot and a cash prize of ₹1,50,000. 🎉
`,
      links: [
        {
          type: "Deccan Chronicle Article",
          href: "https://www.deccanchronicle.com/technology/in-other-news/winners-of-microsoft-bytexl-led-hackxcelerate-2024-at-cbit-891391",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/posts/mellobai_cbithackxcelerate2024-hackathon-innovation-activity-7193325720096378880-zSn1?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image:
        "https://www.deccanchronicle.com/h-upload/2024/04/27/1086388-untitleddesign6.webp",
      video: "",
    },
    {
      title: "Drone Hackathon",
      href: "https://www.linkedin.com/posts/mellobai_software-or-hardware-i-got-it-absolutely-activity-7213609757058686978-_of6?utm_source=share&utm_medium=member_desktop",
      dates: "2024",
      active: true,
      description: `I won a national-level 36-hour hackathon at Anurag University in drone technology! 🏆🚁 We spent ₹19k to build the drone completely from scratch. Coming back to hardware after 4 years made me a bit rusty, and it was quite the journey. After hundreds of crashes and even one near-burnt scenario, we finally got it flying! 🔥✈️
`,
      links: [
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/posts/mellobai_noobs-noobslearning-activity-7048170922477842432-Wb48/?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/drone.jpg",
      video: "",
    },
    {
      title: "IIT Hyderabad Hackathon",
      href: "https://www.linkedin.com/posts/mellobai_iithyderabad-forgeinspira-hackathon-activity-7193327618153238529-t3r4?utm_source=share&utm_medium=member_desktop",
      dates: "2024",
      active: true,
      description: `This thrilling event brought together creative minds and innovators from various regions, and I'm proud to say that our team stood out among them. Competing in such an inspiring environment, filled with enthusiastic peers and challenging problems, was truly a phenomenal experience.
`,
      links: [
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/posts/mellobai_iithyderabad-forgeinspira-hackathon-activity-7193327618153238529-t3r4?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQFiRiWO00B4Jg/feedshare-shrink_800/feedshare-shrink_800/0/1715022948395?e=1735171200&v=beta&t=CwXARDejpfjoXW-p6ZznO-q3VmmfoaHyRNS3W17vsvQ",
      video: "",
    },
    {
      title: "CBIT Hackathon",
      href: "https://www.linkedin.com/posts/mellobai_cbithackathon-sudhee2024-socify-activity-7167528496922054656-Nqeu?utm_source=share&utm_medium=member_desktop",
      dates: "2024",
      active: true,
      description: `Our team took on the challenge in the web/app development domain with a vision to enhance safety and awareness within local communities. The result? Socify - a pioneering social network aimed at crime awareness. 🚨
`,
      links: [
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/posts/mellobai_cbithackathon-sudhee2024-socify-activity-7167528496922054656-Nqeu?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQG4ZWhGM9o6AQ/feedshare-shrink_800/feedshare-shrink_800/0/1708871957630?e=1735171200&v=beta&t=w0dJ2k-tzv-V77pvYsJcBW7Jfh2VH-mRPfaBMz3yOzg",
      video: "",
    },
    {
      title: "GITAM Hackathon",
      href: "https://www.linkedin.com/posts/mellobai_hackathon-innovation-teamwork-activity-7162295227301421057-8D-q?utm_source=share&utm_medium=member_desktop",
      dates: "2024",
      active: true,
      description: `Thrilled to announce that my team and I clinched the First Place at the National Level Hackathon hosted by GITAM University, Hyderabad, on the 1st and 2nd of February! 🚀This victory is not just a testament to our hard work but also to the spirit of innovation and teamwork. Over these two intense days, we put our skills to the test, collaborated under pressure, and pushed the boundaries of what we thought possible.
`,
      links: [
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/posts/mellobai_hackathon-innovation-teamwork-activity-7162295227301421057-8D-q?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQHVpUwJ_CdeRA/feedshare-shrink_800/feedshare-shrink_800/0/1707624247143?e=1735171200&v=beta&t=sEMzazvfiH0ghWhi09AL--aZgSdSyTCnzCsQwafjVBE",
      video: "",
    },
    {
      title: "National Level Hackathon in Mumbai",
      href: "https://www.linkedin.com/posts/mellobai_hackathon-coding-teamwork-activity-7117899684395810816--BzK?utm_source=share&utm_medium=member_desktop",
      dates: "2024",
      active: true,
      description: `Thrilled to share that our team clinched the 🥉Second Runner Up🥉 position at the National Hackathon conducted in Vasai, Maharashtra on 6th and 7th October, 2023! 🎉
`,
      links: [
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/posts/mellobai_hackathon-coding-teamwork-activity-7117899684395810816--BzK?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQH00FBcEM9mLA/feedshare-shrink_800/feedshare-shrink_800/0/1697039518730?e=1735171200&v=beta&t=VvGtjdZSCwFlQSchchMa-AMj7hDaqYP4XX4dJbo7Pkc",
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
      title: "Karma Street View",
      dates: "2023",
      location: "Hyderabad, India",
      description: "A Google Street View clone.",
      image:
        "https://noobsverse-cdn-public.s3.ap-south-1.amazonaws.com/assets/karma-street-view-removebg-preview.png",
      mlh: "https://noobsverse-cdn-public.s3.ap-south-1.amazonaws.com/assets/karma-street-view-removebg-preview.png",
      links: [
        {
          title: "Github",
          href: "https://github.com/MelloB1989/karma-street-view",
          icon: <Icons.github className="h-4 w-4" />,
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
