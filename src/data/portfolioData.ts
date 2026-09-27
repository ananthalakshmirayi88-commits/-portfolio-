export interface Project {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  techStackDisplay: string;
  description: string;
  bulletPoints: string[];
  featured?: boolean;
  accentColor: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  score: string;
  period?: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
  badge: string;
}

export const PERSONAL_INFO = {
  name: "R. Anantha Lakshmi",
  shortName: "Anantha Lakshmi",
  role: "AI/ML & Software Development Enthusiast",
  subLabel: "AI/ML • SOFTWARE DEVELOPMENT",
  email: "ananthalakshmirayi88@gmail.com",
  github: "https://github.com/ananthalakshmirayi88-commits",
  linkedin: "https://linkedin.com/in/anantha-lakshmi-rayi-0a02b4378",
  location: "Kakinada, Andhra Pradesh, India",
  college: "KIET College, Kakinada",
  degree: "B.Tech — Computer Science & Engineering (CSM)",
  cgpa: "7.85",
  photoUrl: "/profile-photo.png",
  resumeUrl: "/resume.pdf",
  summary:
    "B.Tech CSM student with hands-on experience building AI/ML and Python-based applications. Interested in Artificial Intelligence, Machine Learning, Software Development, and intelligent web applications. Experienced in developing practical projects involving emergency response, computer vision, predictive analytics, intelligent rovers, automated logistics, and conversational AI. Seeking internship opportunities to apply technical skills and contribute to real-world software solutions."
};

export const CORE_HIGHLIGHTS = [
  {
    title: "AI / Machine Learning",
    description: "Experience with Regression, Classification, Computer Vision, and Predictive Modeling algorithms.",
    icon: "Brain"
  },
  {
    title: "Python Development",
    description: "Developing robust backend APIs and data processing workflows using Python and Flask.",
    icon: "Code"
  },
  {
    title: "Intelligent Web Apps",
    description: "Integrating machine learning models and conversational AI APIs into interactive web frontends.",
    icon: "Sparkles"
  },
  {
    title: "Data & Analytics",
    description: "Data manipulation, visualization, and feature analysis using NumPy, Pandas, and Matplotlib.",
    icon: "BarChart3"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    iconName: "Code2",
    description: "Core languages for software engineering & scripting",
    skills: ["Python", "Java", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "AI & Machine Learning",
    iconName: "Cpu",
    description: "Algorithms & machine learning methodologies",
    skills: [
      "Machine Learning",
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "Naïve Bayes",
      "K-Means Clustering",
      "Classification",
      "Regression"
    ]
  },
  {
    category: "Data Science Libraries",
    iconName: "Library",
    description: "Scientific computing & predictive modeling tools",
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"]
  },
  {
    category: "Web Development",
    iconName: "Globe",
    description: "Full-stack application & API development",
    skills: ["Flask", "REST APIs", "Responsive Web Development", "HTML5", "CSS3", "JavaScript"]
  },
  {
    category: "Developer Tools",
    iconName: "Wrench",
    description: "Version control & development environments",
    skills: ["Git", "GitHub", "VS Code", "Google Colab"]
  },
  {
    category: "Core Computer Science",
    iconName: "Layers",
    description: "Foundational software engineering principles",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Problem Solving"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "agriculture-rover",
    title: "Agriculture Rover",
    category: "Smart Agriculture & Robotics",
    technologies: ["Python", "IoT", "Sensors", "Automation", "Embedded Logic"],
    techStackDisplay: "Python | IoT | Sensors | Embedded Logic | Automation",
    description:
      "An automated agriculture rover prototype designed for smart farming, soil moisture monitoring, and field environment inspection.",
    bulletPoints: [
      "Developed an automated agriculture rover prototype for crop field inspection and soil monitoring.",
      "Integrated sensor modules for real-time moisture detection and environmental data collection.",
      "Engineered Python-based control logic to support automated navigation and precision agriculture."
    ],
    featured: false,
    accentColor: "from-lime-500 to-emerald-600"
  },
  {
    id: "smart-warehouse",
    title: "Smart Warehouse AI",
    category: "AI & Logistics Automation",
    technologies: ["Python", "AI/ML", "Computer Vision", "Automation", "Flask"],
    techStackDisplay: "Python | AI/ML | Computer Vision | Automation | Flask",
    description:
      "An intelligent warehouse management and inventory optimization system powered by AI analytics and computer vision tracking.",
    bulletPoints: [
      "Designed an AI-powered smart warehouse management system for automated inventory tracking.",
      "Utilized computer vision and machine learning logic for item categorization and stock level monitoring.",
      "Engineered real-time analytics to streamline logistics dispatch and operational workflows."
    ],
    featured: false,
    accentColor: "from-amber-500 to-orange-600"
  },
  {
    id: "emergency-response",
    title: "AI-Powered Emergency Response System",
    category: "AI / Safety Systems",
    technologies: ["Python", "Flask", "AI/ML", "HTML", "CSS", "JavaScript"],
    techStackDisplay: "Python | Flask | AI/ML | HTML | CSS | JavaScript",
    description:
      "An intelligent centralized dashboard concept designed for analyzing and managing road accident emergencies in real-time.",
    bulletPoints: [
      "Developed an AI-powered dashboard concept for analyzing and managing road accident emergencies.",
      "Designed features for accident detection, severity analysis, location information, and emergency resource identification.",
      "Built a centralized dashboard for visualizing incident and response information."
    ],
    featured: true,
    accentColor: "from-cyan-500 to-blue-600"
  },
  {
    id: "traffic-monitoring",
    title: "AI Smart Traffic Monitoring System",
    category: "Computer Vision & IoT",
    technologies: ["Python", "AI/ML", "Computer Vision", "HTML", "CSS", "JavaScript"],
    techStackDisplay: "Python | AI/ML | Computer Vision | HTML | CSS | JavaScript",
    description:
      "A computer vision-assisted traffic analysis system engineered for vehicle detection, counting, and smart municipal traffic management.",
    bulletPoints: [
      "Developed an AI-based system for analyzing traffic videos.",
      "Implemented concepts for vehicle detection, vehicle counting, and traffic monitoring.",
      "Designed visualization features to support intelligent traffic-management applications."
    ],
    featured: false,
    accentColor: "from-blue-500 to-indigo-600"
  },
  {
    id: "sales-prediction",
    title: "Ice Cream Sales Prediction",
    category: "Predictive Analytics",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask"],
    techStackDisplay: "Python | Pandas | NumPy | Scikit-learn | Flask",
    description:
      "A predictive analytics machine learning web app applying Linear Regression to forecast sales patterns from historical datasets.",
    bulletPoints: [
      "Built a machine learning application to predict sales using historical data.",
      "Applied Linear Regression for predictive analysis.",
      "Integrated the trained model with a Flask-based web interface."
    ],
    featured: false,
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    id: "ai-assistant",
    title: "AI Assistant / Chatbot",
    category: "Conversational AI",
    technologies: ["Python", "Flask", "JavaScript", "Groq API"],
    techStackDisplay: "Python | Flask | JavaScript | Groq API",
    description:
      "A full-stack conversational AI assistant leveraging high-speed LLM inference APIs with an interactive web UI and Flask backend.",
    bulletPoints: [
      "Developed a web-based conversational AI application.",
      "Integrated an AI API for processing user queries and generating responses.",
      "Built an interactive frontend with a Flask backend."
    ],
    featured: false,
    accentColor: "from-purple-500 to-violet-600"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech — Computer Science & Engineering (CSM)",
    institution: "KIET College, Kakinada",
    status: "Currently Pursuing 3rd Year",
    score: "CGPA: 7.85",
    period: "2022 – 2026",
    highlights: [
      "Specialization in Artificial Intelligence & Machine Learning (CSM)",
      "Strong academic standing with 7.85 CGPA",
      "Hands-on project work in ML models, Python web applications, and data structures"
    ]
  },
  {
    degree: "Intermediate Education",
    institution: "KSN Junior College",
    status: "Completed",
    score: "735 / 1000 Marks",
    period: "2020 – 2022",
    highlights: [
      "Higher secondary mathematics, physics, and chemistry foundation",
      "Academic score: 735/1000"
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Enterprise Design Thinking Practitioner",
    issuer: "IBM SkillsBuild",
    badge: "IBM SkillsBuild",
    description:
      "Demonstrated practical knowledge of enterprise design thinking principles, user-centered solution formulation, and agile problem definition."
  },
  {
    title: "EY Certificate",
    issuer: "EY",
    badge: "EY",
    description:
      "Certification recognizing technical competence, professional skills, and industry domain understanding."
  },
  {
    title: "Python Certification",
    issuer: "Infosys Springboard",
    badge: "Infosys Springboard",
    description:
      "Comprehensive certification covering Python programming, data structures, functional paradigms, and computational problem solving."
  }
];

export const CAREER_INTERESTS = [
  {
    title: "Artificial Intelligence",
    description: "Developing intelligent algorithms and cognitive solutions that automate complex tasks.",
    icon: "Bot"
  },
  {
    title: "Machine Learning",
    description: "Building predictive statistical models, regression classifiers, and clustering systems.",
    icon: "Network"
  },
  {
    title: "Python Development",
    description: "Architecting backend systems, data pipelines, automation scripts, and RESTful APIs.",
    icon: "FileCode"
  },
  {
    title: "Software Development",
    description: "Creating full-stack applications with robust architectures and responsive interfaces.",
    icon: "Laptop"
  },
  {
    title: "Data & Analytics",
    description: "Extracting actionable insights through structured statistical analysis and visualization.",
    icon: "LineChart"
  }
];
