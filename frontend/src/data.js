


// projects-data.js
export const projectsData = [
  {
    id: 1,
    title: "Annai Packers and Movers",
    description: "Professional logistics service website with booking interface",
    category: "fullstack",
    techStack: ["React.js", "Tailwind CSS", "NestJS"],
    features: ["Service listing", "Contact/booking interface", "Responsive design"],
    impact: "Helps customers easily access relocation services with 40% faster inquiries",
    icon: "fas fa-truck",
    gradient: "from-cyan-500 to-blue-500",
    isHighlight: false
  },
  {
    id: 2,
    title: "Bharath National Computer Services",
    description: "Complete computer parts e-commerce platform with admin dashboard for managing orders, users, and products",
    category: "fullstack",
    techStack: ["ReactJS", "Tailwind CSS", "NestJS", "Prisma ORM", "PostgreSQL"],
    features: [
      "Admin dashboard", 
      "Order management system", 
      "User management", 
      "Product inventory management",
      "Service booking"
    ],
    impact: "Streamlined business operations with 60% increase in online leads and efficient order processing",
    icon: "fas fa-laptop",
    gradient: "from-blue-500 to-indigo-500",
    isHighlight: true
  },
  {
    id: 3,
    title: "Velan Thulabaram Gold Rate System",
    description: "Real-time gold rate calculation with hardware integration for retail billing",
    category: "fullstack",
    techStack: ["React.js", "NestJS", "Prisma ORM", "Thermal Printer API"],
    features: ["Touch-based input", "Thermal printer integration", "Fast responsive UI", "Real-time rate calculation"],
    impact: "Used in retail shop for billing automation, 70% efficiency increase",
    icon: "fas fa-gem",
    gradient: "from-purple-500 to-pink-500",
    isHighlight: true
  },
  {
    id: 4,
    title: "WonNet Job Portal",
    description: "Full-stack job portal system with complete job application workflow",
    category: "fullstack",
    techStack: ["Express JS", "React.js", "MongoDB", "JWT Authentication"],
    features: ["Job posting", "Job application flow", "User role handling", "Resume upload"],
    impact: "Complete understanding of backend workflows and system architecture",
    icon: "fas fa-briefcase",
    gradient: "from-pink-500 to-rose-500",
    isHighlight: false
  },
  {
    id: 5,
    title: "Culinary House Restaurant",
    description: "Interactive restaurant website with categorized menu and online ordering system",
    category: "frontend",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
    features: ["Categorized food sections", "Interactive UI", "Clean layout", "Cart management"],
    impact: "Improved user engagement and online ordering experience by 45%",
    icon: "fas fa-utensils",
    gradient: "from-rose-500 to-red-500",
    isHighlight: false
  }
];

export const skillsData = {
  frontend: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  backend: ["NestJS", "Node.js", "Express.js", "JWT Authentication"],
  database: ["Prisma ORM", "PostgreSQL", "MongoDB"],
  tools: ["Git", "GitHub", "VS Code", "Postman", "REST APIs"]
};

export const highlightsData = [
  { icon: "fas fa-rocket", title: "Production Apps", desc: "Built real-world production-level applications used by actual businesses" },
  { icon: "fas fa-print", title: "Hardware Integration", desc: "Experience with thermal printer integration for retail billing systems" },
  { icon: "fas fa-store", title: "Business Impact", desc: "Developed systems used daily in real business environments" },
  { icon: "fas fa-users", title: "Client Projects", desc: "Successfully delivered 6+ live client projects with real requirements" },
  { icon: "fas fa-shopping-cart", title: "E-commerce Solutions", desc: "Built full-featured e-commerce platforms with admin panels" },
  { icon: "fas fa-chart-line", title: "Admin Dashboards", desc: "Created comprehensive admin interfaces for business management" }
];