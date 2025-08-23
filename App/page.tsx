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
  BookOpen,
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
              >
                <Download className={`${isScrolled ? "w-3 h-3 mr-1" : "w-4 h-4 mr-2"}`} />
                Resume
              </Button>
            </div>
          </div>
        </nav>

        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 cyber-grid">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <div className="mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jeevan_30170017.jpg-acHnhnYjqcruhBfYyKLK8qlkKyYA39.jpeg"
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
                  vulnerability assessment, incident response, and secure coding practices, along with experience in
                  building security tools and working with SIEM, EDR, and cloud environments.
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
          <div className="max-w-4xl mx-auto">
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
                    date: "2024 - Present",
                    title: "Project Lead",
                    organization: "University of Louisiana Monroe",
                    description:
                      "Leading a team of 4 to build an interactive web platform, funded by the Louisiana Education Board, to train students in AI ethics and risk.",
                  },
                  {
                    date: "2022 - 2024",
                    title: "IT Support Technician",
                    organization: "University IT Department",
                    description:
                      "Provided technical support and maintained IT infrastructure while developing cybersecurity expertise.",
                  },
                  {
                    date: "2021 - 2022",
                    title: "Vice President of GDSC ULM",
                    organization: "Google Developer Student Club",
                    description:
                      "Led student developer community initiatives and organized technology workshops and events.",
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
                        <p className="text-muted-foreground">{item.description}</p>
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
                    year: "2019-2023",
                    description:
                      "Bachelor's degree in Computer Science with focus on cybersecurity and software engineering.",
                  },
                  {
                    title: "CompTIA CySA+",
                    organization: "CompTIA",
                    year: "2025",
                    description: "Cybersecurity Analyst certification focusing on threat detection and analysis.",
                  },
                  {
                    title: "CompTIA Security+",
                    organization: "CompTIA",
                    year: "2024",
                    description:
                      "Foundation-level cybersecurity certification covering security concepts and practices.",
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
                  title: "Threat Intelligence Dashboard",
                  description:
                    "Real-time security monitoring dashboard with threat visualization and automated alerting system.",
                  tech: ["Python", "React", "D3.js", "Splunk API"],
                  github: true,
                  live: true,
                  image: "/modern-web-app-interface.png",
                },
                {
                  title: "Secure Code Analyzer",
                  description:
                    "Static analysis tool for identifying security vulnerabilities in source code with OWASP compliance.",
                  tech: ["Java", "Spring Boot", "SonarQube", "Docker"],
                  github: true,
                  live: false,
                  image: "/professional-design-workspace.png",
                },
                {
                  title: "Network Security Monitor",
                  description:
                    "Automated network traffic analysis tool for detecting anomalous behavior and potential threats.",
                  tech: ["Python", "Wireshark", "ELK Stack", "Machine Learning"],
                  github: true,
                  live: false,
                  image: "/modern-web-app-interface.png",
                },
                {
                  title: "Incident Response Automation",
                  description:
                    "Automated incident response system with playbook execution and forensic data collection.",
                  tech: ["PowerShell", "Python", "SIEM Integration", "REST APIs"],
                  github: true,
                  live: false,
                  image: "/professional-design-workspace.png",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="group hover:glow-green transition-all duration-300 border-border shadow-lg hover:shadow-xl overflow-hidden"
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
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      {project.live && (
                        <Button
                          size="sm"
                          className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
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
                  title: "The Future of Cybersecurity in Cloud Computing",
                  description: "Exploring emerging threats and security strategies for cloud-native applications.",
                  date: "Dec 2024",
                  readTime: "5 min read",
                },
                {
                  title: "Building Secure APIs: A Developer's Guide",
                  description:
                    "Best practices for implementing security in RESTful APIs and microservices architecture.",
                  date: "Nov 2024",
                  readTime: "8 min read",
                },
              ].map((article, index) => (
                <Card
                  key={index}
                  className="group hover:glow-blue transition-all duration-300 border-border shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 rounded-t-lg flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-muted-foreground/50" />
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
                    <input type="hidden" name="access_key" value="ahc" />
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
              © 2024 Jeevan Parajuli. Securing the digital world, one line of code at a time.
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

    // Add CSS for error styling
    const style = document.createElement("style")
    style.textContent = `
      .field-error { font-size: 0.85rem; line-height: 1.2; margin-top: 0.35rem; display: block; }
      .is-invalid { outline: 2px solid #ef4444; }
    `
    document.head.appendChild(style)

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
