"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Shield,
  Code,
  Database,
  Cloud,
  Search,
  Terminal,
  GraduationCap,
  Award,
  Download,
  ArrowRight,
} from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMessageExpanded, setIsMessageExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white relative cyber-grid">
      <div className="relative z-10">
        <nav
          className={`fixed top-0 w-full z-[1000] transition-all duration-500 ease-in-out ${
            isScrolled ? "top-4" : "top-0"
          }`}
        >
          <div
            className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out ${
              isScrolled ? "max-w-6xl" : "max-w-6xl"
            }`}
          >
            <div
              className={`flex justify-between items-center h-16 transition-all duration-500 ease-in-out ${
                isScrolled
                  ? "bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-full shadow-lg px-6"
                  : "bg-transparent"
              }`}
            >
              <div
                className={`font-mono font-bold text-foreground cyber-heading transition-all duration-500 ${
                  isScrolled ? "text-lg opacity-100" : "text-xl opacity-100"
                }`}
              >
                Jeevan Parajuli
              </div>
              <div className={`flex ${isScrolled ? "justify-center flex-1 mx-6" : "flex-1 justify-center"}`}>
                <div className={`flex transition-all duration-500 ${isScrolled ? "space-x-4" : "space-x-8"}`}>
                  <a
                    href="#home"
                    className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-105 font-medium"
                  >
                    {"Home"}
                  </a>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-105 font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-105 font-medium"
                  >
                    Project
                  </a>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-105 font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <Button
                size={isScrolled ? "sm" : "sm"}
                variant="outline"
                className={`border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-500 bg-transparent ${
                  isScrolled ? "text-xs px-3 py-1" : ""
                }`}
                asChild
              >
                <a href="/Resume-Jeevan-Parajuli.pdf" download="resume.pdf">
                  <Download className={`${isScrolled ? "w-3 h-3 mr-1" : "w-4 h-4 mr-2"}`} />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </nav>

        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 cyber-grid">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <div className="mb-6">
                <img
                  src="/PhotoHeadshot.jpg"
                  alt="Jeevan Parajuli"
                  className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-secondary glow-green"
                />
                <div className="inline-block bg-muted px-3 py-1 rounded-full border border-border">
                  <span className="text-xs text-muted-foreground">Welcome to My Portfolio Website</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 cyber-heading-xl">Jeevan Parajuli</h1>
              <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
                <TypingAnimation />
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-center">
                Specialized in Cybersecurity Analysis, Security Engineering, and Secure Software Development with
                expertise in Web Application Testing and data-driven security solutions to safeguard digital assets.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-secondary to-accent text-white hover:from-[#00ff88] hover:to-[#00c2ff] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/50 glow-green"
                onClick={scrollToProjects}
              >
                <Shield className="mr-2 h-5 w-5" />
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 cyber-heading">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-justify">
                  I am a dedicated Cybersecurity Analyst and Security Engineer in training with a passion for secure
                  software development and data-driven security solutions. My background includes threat detection,
                  vulnerability assessment, incident response, and secure coding practices.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-justify">
                  My approach focuses on combining technical skills with analytical thinking to identify security gaps,
                  implement effective defense measures, and support compliance with industry standards. I value
                  proactive security, continuous learning, and practical problem-solving as key to staying ahead of
                  evolving cyber threats and contributing to stronger digital infrastructures.
                </p>
              </div>
              <Card className="border-border glow-blue shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-mono text-xl">Core Competencies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-secondary" />
                    <span>Cybersecurity & Threat Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-secondary" />
                    <span>Secure Software Development (SDLC)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-secondary" />
                    <span>Data Analysis & Visualization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cloud className="w-5 h-5 text-secondary" />
                    <span>Cloud Security (AWS, Azure)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-secondary" />
                    <span>SIEM Tools (Splunk, Wazuh, ELK)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-secondary" />
                    <span>Programming (Python, Java, C#, SQL, PowerShell)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-secondary" />
                    <span>Exploitation Tools (Metasploit, Nmap, and others)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-secondary" />
                    <span>Web Application Testing</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 cyber-heading">Professional Journey</h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              A timeline highlighting my roles, responsibilities, and the key competencies I developed throughout my
              journey.
            </p>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary"></div>
              <div className="space-y-12">
                {[
                  {
                    date: "Jun 2025 - Present",
                    title: "Project Lead",
                    organization: "University of Louisiana Monroe",
                    experience: [
                      "Leading a team of 4 to build an interactive web platform, funded by the Louisiana Education Board, to train students in AI ethics.",
                      "Developing a 3D interactive training game integrated into a web platform to boost student engagement.",
                    ],
                  },
                  {
                    date: "Sep 2024 - Present",
                    title: "IT Support Technician",
                    organization: "University of Louisiana Monroe",
                    experience: [
                      "Responded to 12+ endpoint security incidents flagged by CrowdStrike, performing initial triage, isolating compromised system.",
                      "Improved security and user satisfaction by 40% for over 8,000+ users by assisting IAM operations in Azure AD (RBAC,MFA).",
                    ],
                  },
                  {
                    date: "Jul 2025 - Present",
                    title: "Vice President",
                    organization: "Google Developer Student Club ULM",
                    experience: [
                      "Driving club growth and member participation by directing bi-weekly 'CodeClash' competition",
                      "Serving as a key liaison between students and professionals to plan a university-wide ULM TechExpo for Fall 2025",
                    ],
                  },
                ].map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="w-4 h-4 bg-secondary rounded-full border-4 border-background relative z-10 glow-green"></div>
                    <Card className="flex-1 border-border hover:glow-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="font-mono">{item.title}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {item.date}
                          </Badge>
                        </div>
                        <CardDescription className="font-semibold text-accent">{item.organization}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {item.experience.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 cyber-heading">Academic Journey</h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              An overview of my academic background and the certifications I have earned along the way.
            </p>
            <div className="relative">
              <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-accent"></div>
              <div className="space-y-12">
                {[
                  {
                    title: "BS in Computer Science",
                    organization: "University of Louisiana Monroe",
                    year: "Jan 2024- Dec 2027",
                    description:
                      "Bachelor's degree in Computer Science with focus on cybersecurity and software engineering.",
                  },
                  {
                    title: "CompTIA CySA+",
                    organization: "CompTIA",
                    year: "Jun 2025",
                    description: "Cybersecurity Analyst certification focusing on threat detection and analysis.",
                  },
                  {
                    title: "CompTIA Security+",
                    organization: "CompTIA",
                    year: "May 202",
                    description:
                      "Foundation-level cybersecurity certification covering security concept, practices and compliance.",
                  },
                ].map((cert, index) => (
                  <div key={index} className="relative flex items-start gap-6 justify-end">
                    <Card className="flex-1 max-w-md border-border hover:glow-green transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="font-mono flex items-center gap-2">
                            {index === 0 ? <GraduationCap className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                            {cert.title}
                          </CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            {cert.year}
                          </Badge>
                        </div>
                        <CardDescription className="font-semibold text-secondary">{cert.organization}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{cert.description}</p>
                      </CardContent>
                    </Card>
                    <div className="w-4 h-4 bg-accent rounded-full border-4 border-background relative z-10 glow-blue"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 cyber-heading">Projects</h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Projects that strengthened my technical expertise and problem-solving skills.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "The Path of Function",
                  description:
                    "Developed an interactive visual novel game in Ren'Py to teach Python functions — Winner at ULM Tech Expo 2024.",
                  tech: ["Python", "RenPy"],
                  githubUrl: "https://github.com/jeevanparajuli856/The-Path-Of-Function",
                  liveUrl: "https://jeevanparajuli856.itch.io/thepathofthefunction",
                  github: true,
                  live: true,
                  image: "/ThePathProject.png",
                },
                {
                  title: "Integrixa",
                  description:
                    "Developed a low-overhead, real-time FIM tool for Windows using Python and SHA-256, with Telegram alerts for file changes.",
                  tech: ["Python", "APIs"],
                  githubUrl: "https://github.com/jeevanparajuli856/Integrixa",
                  liveUrl: "",
                  github: true,
                  live: false,
                  image: "/IntegrixaProject.png",
                },
                {
                  title: "Fedo C2 Data Enrichment",
                  description:
                    "Built a Python pipeline to enrich Feodo Tracker C2 IP data with geo/ASN/port details and visualize in Power BI dashboards. ",
                  tech: ["Python", "Panda", "Power BI"],
                  githubUrl: "https://github.com/jeevanparajuli856/Feodo-C2-DataEnrichment",
                  liveUrl: "",
                  github: true,
                  live: false,
                  image: "/C2Analysis.png",
                },
                {
                  title: "Lateral Movement Detection System",
                  description:
                    "Architecting an enterprise-grade threat detection system from an inductive ML model (IEEE S&P 2024) in collaboration with Dr. Elias Harb(LSU), designed to identify lateral movement",
                  tech: ["PowerShell", "Python", "SIEM Integration", "REST APIs"],
                  githubUrl: "",
                  liveUrl: "",
                  github: false,
                  live: false,
                  image: "/Jbeil.png",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="group hover:glow-green transition-all duration-300 border-border shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 rounded-t-lg overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-mono">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          size="sm"
                          className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 cyber-heading">Insights & Articles</h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Sharing my perspectives and insights through blogs and articles.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Building Integrixa: My First Defensive Cybersecurity Tool",
                  description:
                    "Exploring my journey into FIM concepts and the motivation behind developing my own tool.",
                  date: "Dec 2024",
                  readTime: "5 min read",
                  mediumUrl:
                    "https://medium.com/@jeevanparajuli856/building-filesentinel-my-first-defensive-cybersecurity-tool-and-an-unexpected-friendship-with-6f9fa6c60e54",
                  image: "/IntegrixaProject.png",
                },
                {
                  title: "Flawed authentication rate limiting",
                  description: "Explaining how I discovered my first rate limit bug through a VDP.",
                  date: "Nov 2024",
                  readTime: "5 min read",
                  mediumUrl: "",
                  image: "/rateLimit.png",
                },
              ].map((article, index) => (
                <Card
                  key={index}
                  className="group hover:glow-blue transition-all duration-300 border-border shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                  onClick={() => window.open(article.mediumUrl, "_blank")}
                >
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 rounded-t-lg overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg?height=200&width=400&query=article thumbnail"}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="font-mono text-lg group-hover:text-secondary transition-colors">
                        {article.title}
                      </CardTitle>
                    </div>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 cyber-heading">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl cyber-heading font-semibold mb-4">Let's Connect</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm always interested in discussing cybersecurity challenges, secure development practices, or
                  potential collaboration opportunities. Feel free to reach out!
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground glow-green bg-transparent"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground glow-blue bg-transparent"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
              <Card className="border-border glow-blue shadow-lg">
                <CardHeader>
                  <CardTitle className="cyber-heading">Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form id="contact-form" action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                    <input type="hidden" name="access_key" value="63d84c9b-f310-41a1-8116-ed9df3be393c" />
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                    <div>
                      <Input
                        name="email"
                        placeholder="Your Email"
                        type="email"
                        className="bg-input border-border"
                        required
                      />
                      <span className="field-error text-red-500"></span>
                    </div>
                    <div>
                      <Input name="subject" placeholder="Subject" className="bg-input border-border" required />
                      <span className="field-error text-red-500"></span>
                    </div>
                    <div>
                      <Input name="phone" placeholder="Phone Number" type="tel" className="bg-input border-border" />
                      <span className="field-error text-red-500"></span>
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={isMessageExpanded ? 8 : 4}
                        className="bg-input border-border resize-y min-h-[100px] transition-all duration-300"
                        onFocus={() => setIsMessageExpanded(true)}
                        onBlur={(e) => {
                          if (!e.target.value) setIsMessageExpanded(false)
                        }}
                        required
                      />
                      <span className="field-error text-red-500"></span>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-green"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground cyber-heading">
              © 2025 Jeevan Parajuli. Securing the digital world, one line of code at a time.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form")
    if (!form) return

    // Add CSS for error styling and rate limiting
    const style = document.createElement("style")
    style.textContent = `
      .field-error { font-size: 0.85rem; line-height: 1.2; margin-top: 0.35rem; display: block; }
      .is-invalid { outline: 2px solid #ef4444; }
      .rate-limit-message { color: #f59e0b; font-size: 0.9rem; margin-top: 0.5rem; }
    `
    document.head.appendChild(style)

    const RATE_LIMIT_KEY = "contact_form_last_submit"
    const RATE_LIMIT_DURATION = 5 * 60 * 1000 // 5 minutes in milliseconds

    function checkRateLimit() {
      const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY)
      if (!lastSubmit) return { allowed: true, timeLeft: 0 }

      const lastSubmitTime = Number.parseInt(lastSubmit)
      const now = Date.now()
      const timeElapsed = now - lastSubmitTime

      if (timeElapsed < RATE_LIMIT_DURATION) {
        const timeLeft = RATE_LIMIT_DURATION - timeElapsed
        return { allowed: false, timeLeft }
      }

      return { allowed: true, timeLeft: 0 }
    }

    function formatTimeLeft(milliseconds) {
      const minutes = Math.floor(milliseconds / 60000)
      const seconds = Math.floor((milliseconds % 60000) / 1000)
      return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }

    function updateSubmitButton() {
      const submitBtn = form.querySelector('button[type="submit"]')
      const rateLimit = checkRateLimit()

      if (!rateLimit.allowed) {
        submitBtn.disabled = true
        submitBtn.innerHTML = `<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Wait ${formatTimeLeft(rateLimit.timeLeft)}`

        // Update countdown every second
        const countdown = setInterval(() => {
          const currentRateLimit = checkRateLimit()
          if (currentRateLimit.allowed) {
            clearInterval(countdown)
            submitBtn.disabled = false
            submitBtn.innerHTML = `<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>Send Message`
          } else {
            submitBtn.innerHTML = `<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Wait ${formatTimeLeft(currentRateLimit.timeLeft)}`
          }
        }, 1000)
      }
    }

    // Check rate limit on page load
    updateSubmitButton()

    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const submitBtn = form.querySelector('button[type="submit"]')
      const email = form.querySelector('input[name="email"]')
      const subject = form.querySelector('input[name="subject"]')
      const message = form.querySelector('textarea[name="message"]')
      const phone = form.querySelector('input[name="phone"]')

      // Clear previous errors
      form.querySelectorAll(".field-error").forEach((error) => (error.textContent = ""))
      form.querySelectorAll(".is-invalid").forEach((field) => field.classList.remove("is-invalid"))

      const rateLimit = checkRateLimit()
      if (!rateLimit.allowed) {
        const rateLimitError = document.createElement("div")
        rateLimitError.className = "rate-limit-message"
        rateLimitError.textContent = `Please wait ${formatTimeLeft(rateLimit.timeLeft)} before sending another message.`
        submitBtn.parentNode.insertBefore(rateLimitError, submitBtn)
        setTimeout(() => rateLimitError.remove(), 3000)
        return
      }

      let hasErrors = false
      let firstInvalidField = null

      // Validate email
      if (!email.value.trim()) {
        showError(email, "Email is required")
        hasErrors = true
        if (!firstInvalidField) firstInvalidField = email
      } else if (!isValidEmail(email.value)) {
        showError(email, "Please enter a valid email address")
        hasErrors = true
        if (!firstInvalidField) firstInvalidField = email
      }

      // Validate subject
      if (!subject.value.trim()) {
        showError(subject, "Subject is required")
        hasErrors = true
        if (!firstInvalidField) firstInvalidField = subject
      }

      // Validate message
      if (!message.value.trim()) {
        showError(message, "Message is required")
        hasErrors = true
        if (!firstInvalidField) firstInvalidField = message
      }

      // Validate phone (optional but must be 10 digits if provided)
      if (phone.value.trim()) {
        const phoneDigits = phone.value.replace(/\D/g, "")
        if (phoneDigits.length !== 10) {
          showError(phone, "Phone number must be exactly 10 digits")
          hasErrors = true
          if (!firstInvalidField) firstInvalidField = phone
        }
      }

      if (hasErrors) {
        if (firstInvalidField) {
          firstInvalidField.focus()
        }
        return
      }

      localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString())

      // Disable submit button during submission
      submitBtn.disabled = true
      submitBtn.textContent = "Sending..."

      // Submit the form
      form.submit()
    })

    function showError(field, message) {
      field.classList.add("is-invalid")
      const errorSpan = field.parentNode.querySelector(".field-error")
      if (errorSpan) {
        errorSpan.textContent = message
      }
    }

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
  })
}