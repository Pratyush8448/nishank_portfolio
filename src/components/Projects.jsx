import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// --- Project Data Categorized ---
const projectSections = [
  {
    title: '🧠 AI Projects',
    projects: [
      {
        name: 'Virtual Teaching Assistant',
        description: 'LLM-powered assistant using RAG to answer IIT Madras course queries.',
        tech: ['LangChain', 'FAISS', 'OpenAI API', 'FastAPI', 'EasyOCR', 'Pillow', 'PyTorch', 'Scikit-learn'],
        github: 'https://github.com/Pratyush8448/Virtual_TA.git',
        demo: '#',
      },
      {
        name: 'TDS Assignment Solver',
        description: 'LLM-based backend that solves IIT Madras TDS assignments from PDFs using prompt engineering.',
        tech: ['FastAPI', 'OpenAI API', 'HTTPX', 'Uvicorn', 'PDF Parsing', 'BeautifulSoup'],
        github: 'https://github.com/Pratyush8448/Project2_LLM.git',
        demo: '#',
      },
    ],
  },
  {
    title: '📊 Machine Learning Projects',
    projects: [
      {
        name: 'QSAR Fish Toxicity Analysis',
        description: 'Regression-based prediction of LC50 toxicity levels using chemical descriptors.',
        tech: ['Python', 'Pandas', 'Seaborn', 'Scikit-learn', 'EDA', 'GridSearchCV'],
        github: 'https://github.com/Pratyush8448/Pratyush8448-QSAR_FISH_TOXICITY-ANALYSIS.git',
        demo: '#',
      },
    ],
  },
  {
    title: '📚 Academic Assignments',
    projects: [
      {
        name: 'Flight Price Prediction – Kaggle Assignment',
        description: 'Built and compared 7 regression models to predict flight prices using real airline data.',
        tech: ['Python', 'Scikit-learn', 'RandomForest', 'EDA', 'OneHotEncoding', 'GridSearchCV', 'Model Evaluation'],
        github: 'https://www.kaggle.com/code/pratyushpulaknishank/23f2002286-kaggle-1',
        demo: 'https://www.kaggle.com/code/pratyushpulaknishank/23f2002286-kaggle-1',
      },
      {
        name: 'Customer Exit Prediction – Kaggle Assignment',
        description: 'Predicted customer churn for a financial institution using machine learning classification models based on historical customer data.',
        tech: ['Python', 'Scikit-learn', 'XGBoost', 'EDA', 'OneHotEncoding', 'GridSearchCV', 'Model Evaluation'],
        github: 'https://www.kaggle.com/code/pratyushpulaknishank/23f2002286-kaggle-02',
        demo: 'https://www.kaggle.com/code/pratyushpulaknishank/23f2002286-kaggle-02',
      },
    ],
  },
  {
    title: '🌐 Web Development Projects',
    projects: [
      {
        name: 'Portfolio Website',
        description: 'Portfolio website built with React, TailwindCSS, Framer Motion, and Lottie.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Lottie'],
        github: 'https://github.com/Pratyush8448/portfolio-site',
        demo: '#',
      },
    ],
  },
  {
  title: '⚙️ DevOps Projects',
  projects: [
    {
      name: 'CodePipeline using Terraform',
      description: 'Provisioned AWS CodePipeline, CodeBuild, and CodeDeploy with IAM roles, S3, and tested modules using Terratest.',
      tech: ['AWS CodePipeline', 'Terraform', 'CodeBuild', 'CodeDeploy', 'EC2', 'S3', 'IAM', 'Terratest'],
      github: 'https://github.com/Pratyush8448/Devops_Project.git',
      demo: '#',
    },
    {
      name: 'DevSecOps with GitHub Actions & Sealed Secrets',
      description: 'Automated CI/CD with GitHub Actions, tfsec, Trivy scans, and Sealed Secrets integration for secure Kubernetes deployments.',
      tech: ['GitHub Actions', 'tfsec', 'Trivy', 'Kubernetes', 'Sealed Secrets'],
      github: 'https://github.com/Pratyush8448/Devops_Task-02.git',
      demo: '#',
    },
  ]
}
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-6 min-h-screen"
    >
      <motion.h2
        className="text-4xl font-bold text-violet-400 text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      {projectSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-24">
          <motion.h3
            className="text-2xl font-semibold text-lavender-300 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * sectionIndex }}
          >
            {section.title}
          </motion.h3>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {section.projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-violet-500/30 p-6 rounded-2xl shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-violet-400/30 transition-all hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold text-violet-300 mb-2">
                  {project.name}
                </h4>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-violet-400/10 text-violet-300 px-2 py-1 rounded-md border border-violet-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-violet-300 hover:text-white border border-violet-400 hover:bg-violet-500 px-3 py-1.5 rounded-md transition"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-violet-300 hover:text-white border border-violet-400 hover:bg-violet-500 px-3 py-1.5 rounded-md transition"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
