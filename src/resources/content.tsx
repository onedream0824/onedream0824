import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Vuong Phi",
  lastName: "Hung",
  name: `Vuong Phi Hung`,
  role: "Senior Mobile & AI Engineer",
  avatar: "/images/avatar.png",
  email: "onedream082498@gmail.com",
  location: "Asia/Ho_Chi_Minh",
  languages: ["English", "Vietnamese"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/onedream0824",
    essential: true,
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/UrDream0824",
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/13053391578",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/Ads/ad-1.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building high-impact mobile products powered by AI</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Case Study</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          MedFuel
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I design and ship scalable iOS, Android, and cross-platform applications with modern AI features,
      from intelligent assistants to production-grade ML workflows.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/onedream082498/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hung is a Vietnam-based Senior Full-Stack Engineer with 9+ years of experience building intelligent, scalable mobile and web applications. Specialized in AI/ML integration, RAG systems, and production LLM workflows-with a mobile-first focus using React Native, Flutter, Swift, and Kotlin.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "ScaleTech Solutions",
        timeframe: "2024 - 2025",
        role: "Senior AI Full-Stack Developer",
        achievements: [
          <>
            Architected AI-powered mobile backends using FastAPI and Node.js, integrating RAG pipelines (Pinecone + OpenAI) to enable context-aware chat features in React Native apps-reducing support tickets by 35%.
          </>,
          <>
            Designed and deployed autonomous AI agents with LangGraph for workflow automation, handling document processing and real-time data sync across mobile/web clients.
          </>,
          <>
            Optimized inference latency by 40% through query caching, model quantization, and edge deployment strategies on AWS Lambda@Edge.
          </>,
          <>
            Led adoption of AI guardrails: output validation, prompt logging, and monitoring dashboards to ensure reliability in production LLM features.
          </>,
          <>
            Mentored 3 engineers on AI integration patterns, mobile performance optimization, and secure API design.
          </>
        ],
        images: [
          {
            src: "/Ads/ad-2.jpg",
            alt: "MedFuel mobile app preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "CyStack",
        timeframe: "2022 - 2024",
        role: "Senior Mobile & AI Developer",
        achievements: [
          <>
            Led end-to-end development of a React Native app with embedded AI features: personalized threat alerts using fine-tuned NLP models and RAG-based knowledge retrieval.
          </>,
          <>
            Integrated voice AI agents (Vapi + Retell) for hands-free user interactions, improving accessibility and engagement by 28%.
          </>,
          <>
            Boosted mobile app performance by 25% via code-splitting, memoization, and optimized React Native bridge communication.
          </>,
          <>
            Implemented real-time data sync with backend APIs, ensuring seamless user experience across mobile and web platforms.
          </>,
          <>
            Collaborated with UX researchers to design AI-transparent interfaces-clearly communicating AI capabilities and limitations to end users.
          </>,
          <>
            Implemented scalable state management with Redux Toolkit + React Query, reducing data-sync bugs by 30% across offline/online modes.
          </>
        ],
        images: [
          {
            src: "/Ads/ad-3.jpg",
            alt: "YouOne mobile app preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "SCS Solutions",
        timeframe: "2015 - 2022",
        role: "Frontend Developer -> Full-Stack Engineer",
        achievements: [
          <>
            Developed modular, reusable component libraries for React/React Native, accelerating MVP delivery by 40% for startup clients.
          </>,
          <>
            Built RESTful/GraphQL APIs with Python (Django/FastAPI) and Node.js, integrating with PostgreSQL/MongoDB for real-time dashboards.
          </>,
          <>
            Automated CI/CD pipelines with GitHub Actions + Docker, cutting deployment time by 40% and improving release reliability.
          </>,
          <>
            Early adoption of AI features: integrated OpenAI API for content summarization and sentiment analysis in enterprise SaaS tools.
          </>
        ],
        images: [
          {
            src: "/Ads/ad-4.jpg",
            alt: "Event app mobile preview",
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
        name: "Aprotrain Aptech",
        description: 
          <>
            <>AWS Certified Developer - Associate</>,
            <>DeepLearning.AI: ChatGPT Prompt Engineering for Developers</>,
            <>Meta: React Native Specialization (Coursera)</>
          </>

      }
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Native Mobile Development",
        description: (
          <>Building robust native applications for iOS and Android with a focus on performance and maintainability.</>
        ),
        tags: [
          { name: "iOS" },
          { name: "Swift" },
          { name: "Android" },
          { name: "Kotlin" },
          { name: "Java" },
          { name: "SwiftUI" },
        ],
        images: [
          {
            src: "/Ads/ad-5.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/Ads/ad-6.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cross-Platform Development",
        description: (
          <>Shipping cross-platform products with shared codebases while preserving native-level user experiences.</>
        ),
        tags: [
          { name: "React Native" },
          { name: "Flutter" },
          { name: "Dart" },
          { name: "Xamarin" },
          { name: "Ionic" },
          { name: "Expo" },
          { name: "TypeScript" },
        ],
        images: [
          {
            src: "/Ads/ad-7.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AI & Machine Learning",
        description: (
          <>Integrating LLMs and ML workflows into mobile products, from inference APIs to production-ready AI features.</>
        ),
        tags: [
          { name: "OpenAI" },
          { name: "TensorFlow" },
          { name: "PyTorch" },
          { name: "LangChain" },
          { name: "RAG" },
          { name: "Python" },
          { name: "Scikit-learn" },
          { name: "OpenCV" },
        ],
        images: [
          {
            src: "/Ads/ad-8.jpg",
            alt: "AI-powered mobile app preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend & APIs",
        description: (
          <>Designing scalable backends and real-time API integrations to power mobile and AI-driven experiences.</>
        ),
        tags: [
          { name: "Node.js" },
          { name: "Firebase" },
          { name: "GraphQL" },
          { name: "REST APIs" },
          { name: "MongoDB" },
          { name: "PostgreSQL" },
          { name: "Redis" },
          { name: "Socket.io" },
        ],
        images: [
          {
            src: "/Ads/ad-9.jpg",
            alt: "Backend-integrated mobile app preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Testing, CI/CD & Cloud",
        description: (
          <>Maintaining release quality with automated testing, deployment pipelines, and cloud-native infrastructure.</>
        ),
        tags: [
          { name: "Jest" },
          { name: "Detox" },
          { name: "Appium" },
          { name: "GitHub Actions" },
          { name: "Fastlane" },
          { name: "Docker" },
          { name: "AWS" },
          { name: "Google Cloud" },
        ],
        images: [
          {
            src: "/Ads/ad-1.jpg",
            alt: "Mobile CI/CD and cloud workflow preview",
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
  title: "Mobile & AI Engineering Insights",
  description: `Practical lessons from building production mobile apps, AI features, and scalable backend systems.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
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
