export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  githubLink: string;
}

export const profile = {
  name: "Agung Gihon",
  username: "gihonhon",
  email: "agunggihon@gmail.com",
  github: "https://github.com/gihonhon",
  linkedin: "https://www.linkedin.com/in/agung-gihon-simanjuntak-783b96258/",
};

export const projects: Project[] = [
    {
      id: 1,
      title: "TravelWind",
      description:
        "Platform perjalanan yang membantu pengguna menemukan hidden gems dan mengelola rencana perjalanan dengan antarmuka modern dan responsif.",
      tags: [
        "React.js",
        "JavaScript",
        "Tailwind",
        "Ant design",
        "JWT",
        "PostgreSQL",
        "Spring Boot",
      ],
      demoLink: "https://fe-flight-ticket.vercel.app/",
      githubLink: "https://github.com/Travelwind-BA4",
    },
    {
      id: 2,
      title: "Learnify Education",
      description:
        "Aplikasi edukasi berbasis web dengan fitur autentikasi, manajemen materi pembelajaran, serta dashboard user-friendly untuk siswa maupun pengajar.",
      tags: [
        "Next.js",
        "Tailwind",
        "TypeScript",
        "JWT",
        "Prisma",
        "PostgreSQL",
        "Shadcn UI",
        "Zustand",
      ],
      demoLink: "https://learnify-education.vercel.app/",
      githubLink: "https://github.com/gihonhon/LearnifyEducation-Frontend",
    },
    {
      id: 3,
      title: "Attendance RFID System",
      description:
        "Sistem absensi menggunakan RFID yang terintegrasi dengan database dan control panel untuk mencatat kehadiran secara otomatis, cepat, dan akurat.",
      tags: [
        "Python",
        "UHF-RC4-2 RFID",
        "MySQL",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Arduino",
        "IoT",
      ],
      githubLink: "https://github.com/gihonhon/attandance-rfid/tree/main",
    },
    {
      id: 4,
      title: "Movie List",
      description:
        "Aplikasi Pencarian Film dengan integrasi API, memungkinkan pengguna mencari film, menyimpan film, melihat detail film secara interaktif",
      tags: [
        "React.js",
        "JavaScript",
        "REST API",
        "Bootstrap",
        "JWT",
        "Font Awesome",
        "Sweet Alert",
      ],
      demoLink: "https://movie-list-react-app-thmdb.netlify.app/",
      githubLink: "https://github.com/gihonhon/movie-list",
    },
    {
      id: 5,
      title: "Web Branding Sari Gading",
      description:
        "Website personal branding untuk UMKM menjual Chinese Food, menampilkan profil usaha, layanan, dan kontak dengan desain modern dan responsif.",
      tags: [
        "React.js",
        "JavaScript",
        "MUI Material",
        "MUI Icon",
        "Express.js",
        "MySQL",
        "Sweet Alert",
      ],
      githubLink: "https://github.com/gihonhon/sarigading",
    },
    {
      id: 6,
      title: "Web Branding Sumber Makmur",
      description:
        "Website company profile sederhana untuk usaha lokal di bidang pertanian, menampilkan informasi bisnis dengan navigasi yang mudah dipahami.",
      tags: [
        "React.js",
        "JavaScript",
        "Tailwind",
        "React Router",
        "React Icon",
        "React Tilt",
        "Swiper js",
      ],
      githubLink: "https://github.com/gihonhon/newsumbermakmur2",
    },
    {
      id: 7,
      title: "Mess Laboratory",
      description:
        "Repository yang dikhususkan untuk mengarsipkan tugas, kode dan file. Repository ini juga saya gunakan untuk menyimpan hasil pembelajaran dan eksperimen saya selama menekuni path Web Development",
      tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js"],
      githubLink: "https://github.com/gihonhon/mess-laboratory",
    },
  ];

export const skills = [
  { name: "Frontend", icon: "sword", level: 80, description: "React, Next.js, TypeScript, dan Tailwind CSS untuk membangun antarmuka yang responsif." },
  { name: "Backend", icon: "chest", level: 75, description: "Node.js, Express, PostgreSQL, dan MongoDB untuk membangun API dan mengelola data." },
  { name: "UI/UX Design", icon: "gem", level: 75, description: "Figma untuk merancang pengalaman digital yang menarik dan mudah digunakan." },
  { name: "Deployment", icon: "pickaxe", level: 70, description: "Git, GitHub, Vercel, dan Netlify untuk membawa setiap project ke dunia nyata." },
] as const;
