import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// --- Project Data Categorized ---
const projectSections = [
  {
    title: 'AI Projects',
    accent: '#a78bfa',
    projects: [
      {
        name: 'Data Analyst LLM Agent',
        description:
          'An AI-powered automation agent to perform data analysis through natural language queries. Integrated Large Language Models with Python and FastAPI to interpret requests, process datasets, and generate actionable insights including summaries, trends, and visualizations. Designed seamless interaction and testing via Postman, and deployed the system on Render for scalable access. Showcased end-to-end automation of analyst workflows, reducing manual effort and accelerating data-driven decision-making.',
        tech: [
          'FastAPI', 'Python', 'LangChain', 'Google Gemini API', 'Pandas',
          'NumPy', 'Matplotlib', 'Seaborn', 'Requests', 'Pillow',
          'PyPDF2', 'python-docx', 'OpenPyXL', 'Parquet / PyArrow', 'dotenv'
        ],
        github: 'https://github.com/Pratyush8448/Data_Analysist',
        demo: '#',
      },
      {
        name: 'Virtual Teaching Assistant',
        description: 'Developed a virtual Teaching Assistant API for IIT Madras’ Tools in Data Science course, integrating scraped course content and Discourse discussions. Implemented NLP-based question answering with support for text and image queries, returning structured JSON responses with relevant reference links.',
        tech: ['LangChain', 'FAISS', 'OpenAI API', 'FastAPI', 'EasyOCR', 'Pillow', 'PyTorch', 'Scikit-learn'],
        github: 'https://github.com/Pratyush8448/Virtual_TA.git',
        demo: 'https://data-analyst-agent-cl2b.onrender.com',
      },
    ],
  },
  {
    title: 'ML Projects',
    accent: '#34d399',
    projects: [
      {
        name: 'QSAR Fish Toxicity Analysis',
        description: 'Developed a QSAR-based regression model to predict fish toxicity (LC50) using molecular descriptors. Applied preprocessing, outlier handling, statistical testing, and multiple models with hyperparameter tuning to evaluate and improve predictive performance.',
        tech: ['Python', 'Pandas', 'Seaborn', 'Scikit-learn', 'EDA', 'GridSearchCV'],
        github: 'https://github.com/Pratyush8448/Pratyush8448-QSAR_FISH_TOXICITY-ANALYSIS.git',
        demo: '#',
      },
      {
        name: 'Flight Price Prediction',
        description: 'Built a regression model to predict flight ticket prices using features like airline, route, duration, and days left. Applied preprocessing, feature engineering, and model tuning for accurate predictions on Kaggle data.',
        tech: ['Python', 'Scikit-learn', 'RandomForest', 'EDA', 'OneHotEncoding', 'GridSearchCV', 'Model Evaluation'],
        github: 'https://www.kaggle.com/code/pratyushpulaknishank/23f2002286-kaggle-1',
        demo: 'https://www.kaggle.com/code/pratyushpulaknishank/23f2002286-kaggle-1',
      },
      {
        name: 'Eatery Rating Prediction',
        description: 'Built a rating prediction model for eateries using features like store name, category, location (latitude/longitude), review text, and rating count. Applied preprocessing, NLP, and machine learning to predict customer ratings.',
        tech: ['Python', 'Pandas', 'Scikit-learn', 'EDA', 'Logistic Regression', 'Random Forest', 'KNN', 'SVM', 'Model Evaluation'],
        github: 'https://www.kaggle.com/code/pratyushpulaknishank/23f2002286-kaggle-3',
        demo: 'https://www.kaggle.com/code/pratyushpulaknishank/23f2002286-kaggle-3',
      },
      {
        name: 'Customer Exit Prediction',
        description: 'Developed a customer churn prediction model using features like country, gender, credit score, age, account balance, and activity status. Performed preprocessing, feature engineering, and applied machine learning to predict customer exit behavior.',
        tech: ['Python', 'Scikit-learn', 'XGBoost', 'EDA', 'OneHotEncoding', 'GridSearchCV', 'Model Evaluation'],
        github: 'https://www.kaggle.com/code/pratyushpulaknishank/23f2002286-kaggle-02',
        demo: 'https://www.kaggle.com/code/pratyushpulaknishank/23f2002286-kaggle-02',
      },
    ],
  },
  {
    title: 'Web Dev',
    accent: '#60a5fa',
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
    title: 'DevOps Projects',
    accent: '#f97316',
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
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const sectionVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-white dark:bg-[#080810] text-black dark:text-white py-24 px-6 min-h-screen overflow-hidden transition-colors duration-300"
      style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-500/10 dark:bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/8 blur-[100px]" />

      {/* Section Heading */}
      <motion.div
        className="relative z-10 text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs uppercase tracking-[0.35em] text-violet-400 dark:text-violet-400 mb-3 font-medium">
          Selected Work
        </p>
        <h2
          className="text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text"
          style={{
            backgroundImage: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #c4b5fd 100%)',
          }}
        >
          My Projects
        </h2>
        <div className="mt-5 mx-auto w-16 h-[3px] rounded-full bg-gradient-to-r from-violet-500 to-purple-300" />
      </motion.div>

      {/* Project Sections */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-24">
        {projectSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {/* Section Title */}
            <motion.div
              className="flex items-center gap-4 mb-10"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3
                className="text-xl md:text-2xl font-bold tracking-tight"
                style={{ color: section.accent }}
              >
                {section.title}
              </h3>
              <div
                className="flex-1 h-px opacity-20"
                style={{ background: section.accent }}
              />
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full border opacity-60"
                style={{ color: section.accent, borderColor: section.accent }}
              >
                {section.projects.length} {section.projects.length === 1 ? 'project' : 'projects'}
              </span>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  accent={section.accent}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index, accent }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
      }}
    >
      {/* Hover border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${accent}18, transparent 60%)`,
          border: `1px solid ${accent}50`,
        }}
      />

      {/* Top accent bar */}
      <div
        className="h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />

      <div className="flex flex-col flex-1 p-6">
        {/* Card number + title */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h4
            className="text-lg font-bold leading-snug"
            style={{ color: accent }}
          >
            {project.name}
          </h4>
          <span
            className="text-[10px] font-mono font-bold mt-1 shrink-0 opacity-30"
            style={{ color: accent }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md transition-colors duration-200"
              style={{
                background: `${accent}12`,
                color: accent,
                border: `1px solid ${accent}28`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px mb-4 opacity-10"
          style={{ background: accent }}
        />

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200"
            style={{
              color: accent,
              border: `1px solid ${accent}40`,
              background: `${accent}08`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = accent
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.boxShadow = `0 0 16px ${accent}60`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = `${accent}08`
              e.currentTarget.style.color = accent
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <FaGithub size={12} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200"
            style={{
              color: accent,
              border: `1px solid ${accent}40`,
              background: `${accent}08`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = accent
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.boxShadow = `0 0 16px ${accent}60`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = `${accent}08`
              e.currentTarget.style.color = accent
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <FaExternalLinkAlt size={11} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
