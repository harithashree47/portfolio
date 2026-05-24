// projects-data.js

export const projectsData = [
  {
  id: 1,
  title: "Annai Packers and Movers",
  description:
    "Logistics service website where users can submit relocation requests, and the business team contacts them for service confirmation",
  category: "fullstack",
  techStack: ["React", "Tailwind CSS", "NestJS", "Nodemailer"],
  features: [
    "Service listing with detailed information",
    "Customer enquiry/booking form",
    "Email notification using Nodemailer",
    "Customer details collection (name, phone, location, address)",
    "Responsive design for all devices"
  ],
  impact:
    "Simplified customer enquiry process and enabled faster response through automated email notifications, improving service conversion rate",
  icon: "fas fa-truck",
  gradient: "from-cyan-500 to-blue-500",
  isHighlight: false,
  liveUrl: "https://annaipackers.luisant.cloud/",
  githubUrl: "",
  image: ""
},
{
  id: 2,
  title: "Bharath National Computer Services",
  description:
    "Full-featured computer parts e-commerce platform where users can browse products, add items to cart, and place orders, with a complete admin dashboard for managing business operations",
  category: "fullstack",
  techStack: [
    "React",
    "Tailwind CSS",
    "NestJS",
    "Prisma ORM",
    "PostgreSQL"
  ],
  features: [
    "Product listing with detailed view",
    "Add to cart and order placement",
    "User authentication and account management",
    "Admin dashboard for order tracking",
    "Order status updates (Pending, Processing, Delivered)",
    "User details and order history management"
  ],
  impact:
    "Digitized sales process with real-time order tracking, improving business efficiency and increasing online leads by 60%",
  icon: "fas fa-laptop",
  gradient: "from-blue-500 to-indigo-500",
  isHighlight: true,
  liveUrl: "https://www.bnctechservices.com/",
  githubUrl: "",
  image: ""
},
 {
  id: 3,
  title: "Velan Thulabaram Gold Rate System",
  description:
    "Gold rate calculation system where admin sets the gold rate master, and the application automatically calculates total amount based on weight and percentage using a touch-based interface",
  category: "fullstack",
  techStack: ["React", "NestJS", "Prisma ORM"],
  features: [
    "Gold rate master setup",
    "Touch-based input for weight and percentage",
    "Automatic price calculation",
    "Fast and responsive billing UI",
    "Thermal printer support for bill printing"
  ],
  impact:
    "Used in retail shop for fast and accurate billing, improving calculation efficiency by 70%",
  icon: "fas fa-gem",
  gradient: "from-purple-500 to-pink-500",
  isHighlight: true,
  liveUrl: "",
  githubUrl: "",
  image: ""
},
  {
  id: 4,
  title: "WonNet Job Portal",
  description:
    "Full-stack job portal system with role-based access where users can register, apply for jobs, and track application status, while admins and super admins manage jobs and users",
  category: "fullstack",
  techStack: ["React", "Node.js", "Express.js", "MongoDB", "Nodemailer"],
  features: [
    "User registration and login authentication",
    "Job application with resume upload",
    "Application status tracking (Applied, Reviewed, Selected, Rejected)",
    "Email notifications using Nodemailer",
    "Admin panel for job posting and category management",
    "Super admin control for admin creation and user management",
    "Role-based access (User, Admin, Super Admin)"
  ],
  impact:
    "Built a complete job application workflow system with role-based architecture, improving understanding of real-world backend logic and user management",
  icon: "fas fa-briefcase",
  gradient: "from-pink-500 to-rose-500",
  isHighlight: true,
  liveUrl: "",
  githubUrl: "",
  image: ""
},
 {
  id: 5,
  title: "Culinary House Restaurant",
  description:
    "Restaurant web application where users can register, browse menu items, and place food orders, with an admin panel to manage food items, categories, and user orders",
  category: "fullstack",
  techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  features: [
    "User registration and login authentication",
    "Browse categorized food menu",
    "Add to cart and place orders",
    "Order status tracking",
    "Admin panel for food and category management",
    "User management and order tracking by admin"
  ],
  impact:
    "Enhanced online food ordering experience with structured menu management and real-time order handling",
  icon: "fas fa-utensils",
  gradient: "from-rose-500 to-red-500",
  isHighlight: false,
  liveUrl: "",
  githubUrl: "",
  image: ""
}
];

export const skillsData = {
  frontend: [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap"
  ],
  backend: ["NestJS", "Node.js", "Express.js", "JWT Authentication"],
  database: ["Prisma ORM", "PostgreSQL", "MongoDB"],
  tools: ["Git", "GitHub", "VS Code", "Postman", "REST APIs"]
};

export const highlightsData = [
  {
    icon: "fas fa-rocket",
    title: "Production Apps",
    desc:
      "Built real-world production-level applications used by actual businesses"
  },
 
  {
    icon: "fas fa-store",
    title: "Business Impact",
    desc:
      "Developed systems used daily in real business environments"
  },
 
  {
    icon: "fas fa-shopping-cart",
    title: "E-commerce Solutions",
    desc:
      "Built full-featured e-commerce platforms with admin panels"
  },
  {
    icon: "fas fa-chart-line",
    title: "Admin Dashboards",
    desc:
      "Created comprehensive admin interfaces for business management"
  }
];