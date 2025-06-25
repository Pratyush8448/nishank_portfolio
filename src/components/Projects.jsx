// --- FILE: src/components/Projects.jsx ---
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    name: 'Virtual Teaching Assistant',
    description: 'LLM-powered assistant using RAG to answer course queries.',
    tech: ['LangChain', 'FAISS', 'OpenAI API', 'FastAPI', 'EasyOCR', 'Pillow', 'PyTorch', 'Scikit-learn', 'Sentence Transformers', 'NumPy', 'Pydantic', 'Python-Multipart', 'TQDM', 'Mangum', 'Dotenv', 'Requests'],
    github: 'https://github.com/Pratyush8448/Virtual_TA.git',
    demo: '#',
  },
  {
    name: 'QSAR Fish Toxicity Analysis',
    description: 'A regression-based project predicting LC50 toxicity levels from chemical descriptors using QSAR data and machine learning.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'EDA', 'Regression Modeling', 'GridSearchCV', 'Data Cleaning', 'Outlier Detection', 'KNN Imputation', 'Statistical Testing'],
    github: 'https://github.com/Pratyush8448/Pratyush8448-QSAR_FISH_TOXICITY-ANALYSIS.git',
    demo: '#',
  },
  {
    name: 'Tools in Data Science (TDS) Assignment Solver',
    description: 'An LLM-powered backend that solves IIT Madras TDS assignments (1–5) from uploaded PDFs and Questions using prompt-based logic and FastAPI to help students',
    tech: ['FastAPI', 'Python', 'OpenAI API', 'HTTPX', 'Uvicorn', 'PyPDF2', 'Pandas', 'NumPy', 'Tabula-py', 'Openpyxl', 'BeautifulSoup', 'TQDM', 'LLM Integration', 'PDF Parsing', 'Form Data Handling'],
    github: 'https://github.com/Pratyush8448/Project2_LLM.git',
    demo: '#',
  },
  
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-6 min-h-screen flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl font-bold text-violet-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1a012d] border border-violet-400 p-6 rounded-xl shadow-xl hover:shadow-violet-400/50 transition-all hover:scale-[1.03]"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-lavender-300 mb-2">
              {project.name}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-violet-400/20 text-violet-300 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub className="text-xl hover:text-white" />
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt className="text-xl hover:text-white" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
