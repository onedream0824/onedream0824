import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kee",
  lastName: "Ray",
  name: `Kee Ray`,
  role: "Senior Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "ala.kee666@outlook.com",
  location: "America/Chicago",
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kee-ray-602b7a408/",
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/17317417559",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/Ads/ad-1.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full stack platforms, distributed systems, and AI-integrated architecture</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Case Study</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Autonurture
        </Text>
      </Row>
    ),
    href: "/work/autonurture-ai-outreach-platform",
  },
  subline: (
    <>
      8+ years shipping scalable RESTful APIs, event-driven backends, and LLM evaluation tooling in
      TypeScript, Node.js, Python, and React—across cloud-native AWS with CI/CD automation and structured
      output validation.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from McKenzie, TN, USA`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Kee is a McKenzie, TN–based senior software engineer with 8+ years across full stack development,
        distributed systems, and AI-integrated platform architecture using TypeScript, Node.js, Python,
        and React. He delivers scalable RESTful APIs, event-driven backends, and LLM evaluation tooling
        across cloud-native AWS environments with CI/CD automation and structured output validation. A
        proven technical leader, he drives Agile delivery, automated testing pipelines, and cross-team
        alignment in production-grade systems. Bachelor-educated and positioned to contribute end-to-end
        across frontend, backend, and AI layers for high-impact software engineering work.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "BuzzClan LLC",
        timeframe: "Jan 2023 – Feb 2026",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Architected TypeScript and React full stack platform with provider abstraction SDK, shielding 4
            internal teams across 3 microservices from LLM API volatility.
          </>,
          <>
            Engineered RAG-backed retrieval pipeline with PII redaction via structured output validation,
            cutting compliance incidents by 30% in async production workflows.
          </>,
          <>
            Mentored 3 engineers through code reviews and design sessions, aligning team on RESTful API
            contracts and accelerating onboarding by 50%.
          </>,
        ],
        images: [
          {
            src: "/Ads/ad-2.jpg",
            alt: "Engineering work preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Kenility",
        timeframe: "Jun 2020 – Dec 2022",
        role: "Software Engineer",
        achievements: [
          <>
            Designed event-driven Node.js backend using AWS SQS, decoupling 6 workflows and reducing processing
            latency from 55ms to 36ms.
          </>,
          <>
            Instrumented CloudWatch observability and distributed tracing, cutting mean-time-to-detect P1
            incidents from 22 minutes to 6 minutes.
          </>,
          <>
            Streamlined GitHub Actions CI/CD pipelines with automated testing gates, reducing deployment time
            from 40 minutes to 9 minutes across 3 services.
          </>,
        ],
        images: [
          {
            src: "/Ads/ad-3.jpg",
            alt: "Platform and pipelines preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Five Jars",
        timeframe: "Mar 2018 – Apr 2020",
        role: "Software Engineer",
        achievements: [
          <>
            Refactored RESTful API contracts in TypeScript and Node.js, consolidating 12 legacy endpoints and
            improving reliability across 2 integrated services.
          </>,
          <>
            Validated Jest unit-test suites to 75%+ coverage, strengthening CI pipeline confidence ahead of
            bi-weekly production releases.
          </>,
          <>
            Implemented rule-based dialog management and versioned configuration pipelines for template-driven
            response systems across 2 product lines.
          </>,
        ],
        images: [
          {
            src: "/Ads/ad-4.jpg",
            alt: "API and configuration work preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Bilions",
        timeframe: "May 2016 – Jan 2018",
        role: "Junior Software Engineer",
        achievements: [
          <>
            Built Java Spring Boot backend services and SQL schemas supporting 4 enterprise workflows across 2
            internal platform products.
          </>,
          <>
            Unified RESTful API integrations enabling end-to-end data flow between React frontend and backend
            services for cross-functional stakeholders.
          </>,
          <>
            Participated in Agile sprint planning and requirements-gathering sessions, reducing scope-change
            cycles across quarterly delivery milestones.
          </>,
        ],
        images: [
          {
            src: "/Ads/ad-5.jpg",
            alt: "Enterprise services preview",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Lipscomb University",
        description: (
          <>
            Bachelor of Computer Applications (Computer Engineering), 2011–2015.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Languages and frameworks",
        description: (
          <>Core languages for services and APIs; React for full stack and UI delivery.</>
        ),
        tags: [
          { name: "TypeScript" },
          { name: "JavaScript" },
          { name: "Node.js" },
          { name: "Python" },
          { name: "Java" },
        ],
        images: [
          {
            src: "/Ads/ad-5.jpg",
            alt: "Development stack preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AI and machine learning",
        description: (
          <>LLM integration, retrieval, validation, and evaluation in production workflows.</>
        ),
        tags: [
          { name: "LLM Integration" },
          { name: "Retrieval-augmented generation (RAG)" },
          { name: "Structured output validation" },
          { name: "PII detection and redaction" },
          { name: "LLM evaluation tooling" },
        ],
        images: [
          {
            src: "/Ads/ad-8.jpg",
            alt: "AI platform preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend, APIs, and databases",
        description: (
          <>RESTful design, SQL, messaging, and service-oriented architecture.</>
        ),
        tags: [
          { name: "RESTful API design" },
          { name: "SQL" },
          { name: "AWS SQS" },
          { name: "Event-driven architecture" },
          { name: "Microservices" },
        ],
        images: [
          {
            src: "/Ads/ad-9.jpg",
            alt: "Backend architecture preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cloud, DevOps, and testing",
        description: (
          <>Shipping reliably with containers, orchestration, pipelines, and automated gates.</>
        ),
        tags: [
          { name: "AWS" },
          { name: "Docker" },
          { name: "Kubernetes" },
          { name: "CI/CD pipelines" },
          { name: "GitHub Actions" },
        ],
        images: [
          {
            src: "/Ads/ad-1.jpg",
            alt: "Cloud and CI/CD preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Strengths",
        description: (
          <>
            Technical leadership and mentoring · Full stack platform design · Distributed systems observability ·
            Agile delivery and cross-team influence · AI safety and compliance engineering · Clear technical
            communication.
          </>
        ),
        tags: [],
        images: [
          {
            src: "/Ads/ad-6.jpg",
            alt: "Collaboration and leadership preview",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Software engineering notes",
  description: `Notes on full stack development, distributed systems, cloud operations, and AI-integrated platforms.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects - ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery - ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/Ads/ad-2.jpg",
      alt: "ad image",
      orientation: "horizontal",
    },
    {
      src: "/Ads/ad-3.jpg",
      alt: "ad image",
      orientation: "vertical",
    },
    {
      src: "/Ads/ad-4.jpg",
      alt: "ad image",
      orientation: "horizontal",
    },
    {
      src: "/Ads/ad-5.jpg",
      alt: "ad image",
      orientation: "vertical",
    },
    {
      src: "/Ads/ad-6.jpg",
      alt: "ad image",
      orientation: "vertical",
    },
    {
      src: "/Ads/ad-7.jpg",
      alt: "ad image",
      orientation: "horizontal",
    },
    {
      src: "/Ads/ad-8.jpg",
      alt: "ad image",
      orientation: "horizontal",
    },
    {
      src: "/Ads/ad-9.jpg",
      alt: "ad image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
