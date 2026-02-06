"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Mail,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Phone,
  MapPin,
  Award,
  Download,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700 text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-zinc-100 via-slate-200 to-zinc-100 dark:from-zinc-800 dark:via-slate-700 dark:to-zinc-800 backdrop-blur-xl border-b-2 border-zinc-400/50 dark:border-zinc-500/50 shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
          >
            Vikram M
          </button>
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 hidden md:block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 hidden md:block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 hidden md:block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-sm font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 hidden md:block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-sm font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 hidden md:block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Education
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200 hover:scale-110"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700"
      >
        <div className="max-w-4xl w-full">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-zinc-900 dark:text-white">
              Vikram M
            </h1>
            <h2 className="text-2xl md:text-3xl text-zinc-800 dark:text-zinc-100 text-balance">
              AI Engineer
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-200 max-w-2xl leading-relaxed">
              AI Engineer with hands-on experience in building production-grade LLM-powered applications, specializing in NLP, intelligent agents, and real-time AI integrations. Passionate about designing scalable AI systems, prompt engineering, and deploying AI solutions that solve real-world problems.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-800 dark:text-zinc-100 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+916381156169" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +91 6381156169
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:vikramusha1315@gmail.com"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  vikramusha1315@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Krishnagiri, India</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="gap-2 shadow-lg bg-blue-600 hover:bg-blue-700 text-white"
              >
                View Projects
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="shadow-lg border-2 border-zinc-800 dark:border-zinc-300 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-800 hover:text-white dark:hover:bg-zinc-200 dark:hover:text-zinc-900 bg-white dark:bg-zinc-800"
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="shadow-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white bg-white dark:bg-zinc-800"
              >
                <a
                  href="https://www.linkedin.com/in/vikram-vm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6 text-zinc-800 dark:text-zinc-200" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 dark:text-white">About Me</h2>
          <Card className="p-8 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-850 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-1">
                <p className="text-xs text-zinc-700 dark:text-zinc-400 uppercase tracking-wide font-semibold">
                  Location
                </p>
                <p className="font-semibold text-zinc-900 dark:text-white">Krishnagiri, India</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-zinc-700 dark:text-zinc-400 uppercase tracking-wide font-semibold">Phone</p>
                <a
                  href="tel:+916381156169"
                  className="font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +91 6381156169
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-zinc-700 dark:text-zinc-400 uppercase tracking-wide font-semibold">Email</p>
                <a
                  href="mailto:vikramusha1315@gmail.com"
                  className="font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block text-sm"
                >
                  vikramusha1315@gmail.com
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-zinc-700 dark:text-zinc-400 uppercase tracking-wide font-semibold">
                  Languages
                </p>
                <p className="font-semibold text-zinc-900 dark:text-white">Tamil, English</p>
              </div>
            </div>
          </Card>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 flex items-center gap-3">
              <span className="h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded"></span>
              Professional Summary
            </h3>
            <Card className="p-8 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-850 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <p className="text-zinc-800 dark:text-zinc-100 leading-relaxed">
                AI Engineer with hands-on experience in building production-grade LLM-powered applications, specializing in NLP, intelligent agents, and real-time AI integrations. Passionate about designing scalable AI systems, prompt engineering, and deploying AI solutions that solve real-world problems.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 px-6 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400 flex items-center gap-3">
            <span className="h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded"></span>
            Skills & Technologies
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-8 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-850 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Programming & Databases</h3>
              <div className="flex flex-wrap gap-3">
                {["Python", "SQL"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-blue-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border border-blue-300 dark:border-zinc-600"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="p-8 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-850 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-3">
                {["Machine Learning", "Deep Learning", "NLP", "Generative AI", "RAG"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-blue-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border border-blue-300 dark:border-zinc-600"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="p-8 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-850 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "LangChain",
                  "LangGraph",
                  "LlamaIndex",
                  "CrewAI",
                  "PyTorch",
                  "TensorFlow",
                  "Scikit-learn",
                  "Pandas",
                  "NumPy",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-blue-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border border-blue-300 dark:border-zinc-600"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="p-8 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-850 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Specializations</h3>
              <div className="flex flex-wrap gap-3">
                {["Agentic RAG Systems", "LLM Fine-Tuning", "Prompt Engineering", "Medical AI"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-blue-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border border-blue-300 dark:border-zinc-600"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-24 px-6 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 dark:text-white">Work Experience</h2>
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-850 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-700">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Data Analytics Intern</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">PUMO TECHNOVATION</p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Hosur</p>
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 md:mt-0">Aug 2025 – Present</span>
              </div>
              <ul className="space-y-2 text-zinc-800 dark:text-zinc-100">
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>
                    Developed interactive dashboards using Power BI based on HR data, facilitating real-time insights
                    into workforce metrics and performance trends
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>
                    Conducted comprehensive data analysis and visualization with Python, SQL, and Tableau on large-scale
                    commercial datasets including Flipkart, Amazon, and Netflix
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>
                    Built end-to-end analytics pipelines integrating data extraction, cleaning, transformation, and
                    visualization, enhancing decision-making accuracy and efficiency
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>
                    Applied SQL to query sizable databases, optimizing data retrieval and supporting dashboard updates
                    on real-time datasets
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-850 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-700">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">Data Science Intern</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Techvolt Software Pvt Ltd</p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Coimbatore</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Jun 2023 - Jul 2023</p>
                </div>
              </div>
              <ul className="space-y-2 text-zinc-800 dark:text-zinc-100">
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>
                    Processed, visualized, and analysed large datasets (10,000+ records) using Pandas and Matplotlib,
                    yielding actionable insights and driving data-centric decision-making
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>
                    Built and fine-tuned classification models in scikit-learn, consistently achieving 85%+ accuracy on
                    real-world predictive analytics tasks
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>
                    Automated ETL data pipelines, streamlining cleaning and transformation for a 15% reduction in
                    processing times and enhanced data quality
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>
                    Collaborated cross-functionally to deliver end-to-end analytics solutions, aligning technical output
                    with business goals and project milestones
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 px-6 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Featured Projects</h2>
          <p className="text-zinc-800 dark:text-zinc-100 mb-12">
            Showcasing production-grade AI applications and innovative solutions
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-700">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Medibot</h3>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full border border-blue-500/30">
                    Featured
                  </span>
                </div>
                <p className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
                  Agentic RAG-Based Healthcare Chatbot
                </p>
                <p className="text-zinc-700 dark:text-zinc-200 leading-relaxed">
                  Developed an intelligent healthcare chatbot leveraging Retrieval-Augmented Generation (RAG) with Large
                  Language Models to provide accurate health-related information, symptom analysis, and medical advice
                  to users.
                </p>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-zinc-800 dark:text-zinc-100">
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>
                        Multi-agent system with NLP for interpreting queries and analyzing medical reports (CT scans,
                        MRI, prescriptions)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>
                        Live doctor discovery with specialization search, contact details, and appointment booking
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>Multi-language voice input/output including Tamil for enhanced accessibility</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>OCR and AI-driven report analysis providing understandable clinical insights</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>Scalable backend with asynchronous processing for concurrent users and low latency</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Python", "LangChain", "FastAPI", "Vector DBs", "OCR", "Voice APIs", "Cloud"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-700 rounded-md text-xs font-medium text-zinc-900 dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-4">
                  <a
                    href="https://github.com/Vikram-spectales/medibot-ai-assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-700">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Multilingual Educational Translator
                </h3>
                <p className="text-lg font-medium text-zinc-800 dark:text-zinc-100">Real-time Translation System</p>
                <p className="text-zinc-700 dark:text-zinc-200 leading-relaxed">
                  Developed a real-time educational translation tool leveraging LangChain, advanced NLP, and
                  text-to-speech APIs to instantly translate and vocalize content in multiple languages, improving
                  educational accessibility for diverse users.
                </p>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-zinc-800 dark:text-zinc-100">
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>Real-time translation and vocalization in 5+ languages</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>Automated collection and integration of linguistic data via browser-based AI agents</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>95% translation accuracy with streamlined development process</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>Seamless audio-visual outputs leading to 30% increase in engagement</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Python", "LangChain", "NLP", "Text-to-Speech", "AI Automation", "Streamlit"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-700 rounded-md text-xs font-medium text-zinc-900 dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-24 px-6 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 dark:text-white">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-5 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">Machine Learning Course</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">NPTEL</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Sep 2024</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">IBM Watson Studio (Machine Learning)</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">IBM</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Mar 2024</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">AI/ML Virtual Internship</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Eduskill</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Mar 2024</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">Data Analytics Process Automation</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Alteryx sparked – AICTE</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Aug 2024</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">Networking Essentials Course</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">CISCO</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">2024</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-24 px-6 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 dark:text-white">Education</h2>
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 backdrop-blur-sm shadow-2xl border-2 border-purple-200 dark:border-purple-700 hover:shadow-3xl transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                      B.Tech in Artificial Intelligence and Data Science
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                      Nehru Institute of Engineering and Technology
                    </p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1">Coimbatore</p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-2">CGPA: 7.6</p>
                  </div>
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 md:mt-0">2021 – 2025</span>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-850 backdrop-blur-sm shadow-2xl border-2 border-purple-200 dark:border-purple-700 hover:shadow-3xl transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Higher Secondary</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">SRI VRV Matric Hr Sec School</p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1">Perampattu</p>
                  <p className="text-sm font-semibold mt-2 text-zinc-900 dark:text-white">Score: 89%</p>
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 md:mt-0">2020 – 2021</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-white">Get In Touch</h2>
          <p className="text-zinc-800 dark:text-zinc-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel
            free to reach out!
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 flex items-center gap-4 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-850 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div className="text-left">
                <p className="text-sm text-zinc-700 dark:text-zinc-400 font-semibold">Email</p>
                <a
                  href="mailto:vikramusha1315@gmail.com"
                  className="font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </Card>
            <Card className="p-6 flex items-center gap-4 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-850 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <Phone className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div className="text-left">
                <p className="text-sm text-zinc-700 dark:text-zinc-400 font-semibold">Phone</p>
                <a
                  href="tel:+916381156169"
                  className="font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +91 6381156169
                </a>
              </div>
            </Card>
            <Card className="p-6 flex items-center gap-4 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-850 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <Linkedin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div className="text-left">
                <p className="text-sm text-zinc-700 dark:text-zinc-400 font-semibold">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/vikram-vm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Connect
                </a>
              </div>
            </Card>
            <Card className="p-6 flex items-center gap-4 hover:shadow-2xl transition-all bg-gradient-to-br from-purple-100 to-pink-100 dark:from-zinc-800 dark:to-zinc-850 backdrop-blur-sm border-2 border-purple-200 dark:border-zinc-600">
              <Download className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div className="text-left">
                <p className="text-sm text-zinc-700 dark:text-zinc-400 font-semibold">Resume</p>
                <a
                  href="/resume/Vikram-M-Resume.pdf"
                  download="Vikram-M-Resume.pdf"
                  className="font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Download
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
