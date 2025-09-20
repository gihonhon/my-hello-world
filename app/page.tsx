"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Palette,
  Database,
  Menu,
  X,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
}

interface Skill {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  level: number;
}

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { setTheme } = useTheme();

  const skills: Skill[] = [
    {
      id: 1,
      name: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      description:
        "React, Next.js, TypeScript, Tailwind CSS dengan pengalaman membangun aplikasi modern dan responsif.",
      level: 80,
    },
    {
      id: 2,
      name: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      description:
        "Node.js, Express, PostgreSQL, MongoDB untuk membangun API yang scalable dan secure.",
      level: 75,
    },
    {
      id: 3,
      name: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      description:
        "Figma untuk menciptakan desain yang user-friendly dan modern.",
      level: 75,
    },
    {
      id: 4,
      name: "DevOps / Deployment",
      icon: <Rocket className="w-8 h-8" />,
      description:
        "Git, GitHub, dan pengalaman melakukan deployment aplikasi menggunakan Vercel dan Netlify.",
      level: 70,
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "TravelWind",
      description:
        "Platform perjalanan yang membantu pengguna menemukan hidden gems dan mengelola rencana perjalanan dengan antarmuka modern dan responsif.",
      image: "✈️",
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
      image: "📝",
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
      image: "⚙️",
      tags: [
        "Python",
        "UHF-RC4-2 RFID",
        "MySQL",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Andruino",
        "IoT",
      ],
      demoLink: "#",
      githubLink: "https://github.com/gihonhon/attandance-rfid/tree/main",
    },
    {
      id: 4,
      title: "Movie List",
      description:
        "Aplikasi Pencarian Film dengan integrasi API, memungkinkan pengguna mencari film, menyimpan film, melihat detail film secara interaktif",
      image: "🍿",
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
      image: "🍜",
      tags: [
        "React.js",
        "JavaScript",
        "MUI Material",
        "MUI Icon",
        "Express.js",
        "MySQL",
        "Sweet Alert",
      ],
      demoLink: "#",
      githubLink: "https://github.com/gihonhon/sarigading",
    },
    {
      id: 6,
      title: "Web Branding Sumber Makmur",
      description:
        "Website company profile sederhana untuk usaha lokal di bidang pertanian, menampilkan informasi bisnis dengan navigasi yang mudah dipahami.",
      image: "👨🏽‍🌾",
      tags: [
        "React.js",
        "JavaScript",
        "Tailwind",
        "React Router",
        "React Icon",
        "React Tilt",
        "Swiper js",
      ],
      demoLink: "#",
      githubLink: "https://github.com/gihonhon/newsumbermakmur2",
    },
    {
      id: 7,
      title: "Mess Laboratory",
      description:
        "Repository yang dikhususkan untuk mengarsipkan tugas, kode dan file. Repository ini juga saya gunakan untuk menyimpan hasil pembelajaran dan eksperimen saya selama menekuni path Web Development",
      image: "🗃️",
      tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js"],
      demoLink: "#",
      githubLink: "https://github.com/gihonhon/mess-laboratory",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hello World
              </div>
              {/* Theme Toggle Button */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Toggle theme">
                    <Palette className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-600 bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 w-full text-left"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 -z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-8 shadow-2xl">
              AG
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              Agung Gihon
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Informatics Student | Web Development Learner
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
              Currently learning and practicing fullstack web development with
              modern tools and frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-800 dark:to-purple-800 rounded-2xl flex items-center justify-center text-white text-6xl mx-auto shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                👨‍💻
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Passionate Web Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Saya adalah seorang mahasiswa Informatika yang sedang mendalami
                bidang Fullstack Web Development. Saat ini saya fokus
                mempelajari teknologi modern seperti React, Next.js, Node.js,
                dan database untuk membangun aplikasi web yang fungsional dan
                menarik.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Saya memiliki antusiasme besar untuk terus belajar, beradaptasi
                dengan teknologi baru, serta mengembangkan proyek-proyek yang
                dapat menjadi media pembelajaran sekaligus showcase kemampuan
                saya.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    10+
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Proyek Belajar & Showcase
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-1">
                    2+
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Tahun Pengalaman
                  </p>
                </div>
              </div>

              {/* <Button className="mt-6">Download CV</Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Berikut adalah beberapa teknologi dan tools yang saya kuasai dalam
              pengembangan aplikasi modern.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Card
                key={skill.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white dark:bg-gray-900"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-800 dark:to-purple-800 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <CardTitle className="text-lg dark:text-gray-100">
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 dark:text-gray-300">
                    {skill.description}
                  </CardDescription>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Berikut adalah beberapa proyek terbaik yang telah saya kerjakan
              dengan berbagai teknologi modern.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white dark:bg-gray-900"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-800 dark:to-purple-800 flex items-center justify-center text-white text-4xl">
                  {project.image}
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors dark:text-gray-100">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardFooter className="flex gap-2 pt-4">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      <Link href={project.demoLink || "#"} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>

                    <Button asChild size="sm" variant="outline">
                      <Link href={project.githubLink || "#"} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </CardFooter>
                  {/* <div className="flex gap-2 pt-4"></div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tertarik untuk berkolaborasi? Mari kita diskusikan proyek Anda dan
              wujudkan ide menjadi kenyataan!
            </p>
          </div>

          <div className="">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold dark:text-gray-100">
                        Email
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        agunggihon@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold dark:text-gray-100">
                        LinkedIn
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        linkedin.com/in/agung-gihon-simanjuntak-783b96258
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                      <Github className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold dark:text-gray-100">
                        GitHub
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        github.com/gihonhon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Hello World
            </div>
            <p className="text-gray-400 dark:text-gray-300 mb-8">
              Building the future, one line of code at a time.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-blue-400"
              >
                <Link href="https://github.com/gihonhon" target="_blank">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-blue-400"
              >
                <Link
                  href="https://www.linkedin.com/in/agung-gihon-simanjuntak-783b96258/"
                  target="_blank"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
              <p className="text-gray-500 dark:text-gray-400">
                &copy; 2025 Agung Gihon. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
