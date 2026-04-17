import { motion } from 'framer-motion'
import { FaSchool, FaUniversity, FaGraduationCap } from 'react-icons/fa'

const educationData = [
  {
    year: '2020',
    title: 'Matriculation - Vimala Convent School, Bhawanipatna (ICSE)',
    description: 'Scored 90% (450/500) | Developed early interest in programming',
    icon: <FaSchool />,
    iconColor: '#ec4899',
    tag: 'School',
    tagColor: '#ec489922',
    tagText: '#ec4899',
  },
  {
    year: '2022',
    title: 'Class 12 - Young Blood Public School (CBSE)',
    description: 'Scored 90% (450/500) | PCM + CS stream',
    icon: <FaSchool />,
    iconColor: '#eab308',
    tag: 'School',
    tagColor: '#eab30822',
    tagText: '#eab308',
  },
  {
    year: '2023 – 2027',
    title: 'B.Tech in Computer Science - Silicon University',
    description: 'Pursuing core CS fundamentals, projects, and software development',
    icon: <FaUniversity />,
    iconColor: '#22d3ee',
    tag: 'University',
    tagColor: '#22d3ee22',
    tagText: '#22d3ee',
  },
  {
    year: '2023 – 2027',
    title: 'B.Sc. in Data Science - IIT Madras',
    description: 'Parallel degree in Data Science and Applications and AI',
    icon: <FaGraduationCap />,
    iconColor: '#a855f7',
    tag: 'IIT Madras',
    tagColor: '#a855f722',
    tagText: '#a855f7',
  },
]

const cardVariants = {
  hidden: { opacity: 0, x: -36, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: i * 0.18, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Journey() {
  return (
    <section className="journey-section py-24 px-6 text-black dark:text-white transition-colors duration-300 relative overflow-hidden">

      {/* Background blobs */}
      <div className="j-blob j-blob-1" />
      <div className="j-blob j-blob-2" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-5xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-500">
            Academic Background
          </span>
        </h2>
        <div className="j-heading-bar mx-auto mt-4" />
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-2xl mx-auto z-10">

        {/* Vertical line */}
        <div className="j-timeline-line" />

        {educationData.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="relative mb-10 pl-14"
          >
            {/* Icon bubble on the line */}
            <div
              className="j-icon-bubble"
              style={{ background: `${item.iconColor}22`, border: `2px solid ${item.iconColor}66`, color: item.iconColor }}
            >
              {item.icon}
            </div>

            {/* Card */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="j-card group"
              style={{ '--accent': item.iconColor }}
            >
              {/* Top row: tag + year */}
              <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                <span
                  className="j-tag"
                  style={{ background: item.tagColor, color: item.tagText, border: `1px solid ${item.tagText}44` }}
                >
                  {item.tag}
                </span>
                <span className="j-year">{item.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-200">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent bar */}
              <div className="j-accent-bar" style={{ background: item.iconColor }} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .journey-section {
          background: #ffffff;
        }
        :is(.dark) .journey-section {
          background: #0d001a;
        }

        /* Blobs */
        .j-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.1;
          pointer-events: none;
          z-index: 0;
        }
        .j-blob-1 {
          width: 480px; height: 480px;
          background: #a855f7;
          top: -120px; right: -140px;
        }
        .j-blob-2 {
          width: 360px; height: 360px;
          background: #ec4899;
          bottom: -80px; left: -100px;
        }

        /* Heading bar */
        .j-heading-bar {
          width: 56px;
          height: 3px;
          border-radius: 99px;
          background: linear-gradient(90deg, #a855f7, #ec4899);
        }

        /* Timeline vertical line */
        .j-timeline-line {
          position: absolute;
          top: 0; bottom: 0;
          left: 20px;
          width: 2px;
          background: linear-gradient(180deg, #a855f7 0%, #ec4899 60%, transparent 100%);
          border-radius: 99px;
        }

        /* Icon bubble */
        .j-icon-bubble {
          position: absolute;
          left: 0; top: 14px;
          width: 40px; height: 40px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.05rem;
          z-index: 2;
          backdrop-filter: blur(6px);
          transition: transform 0.25s;
        }
        .j-icon-bubble:hover {
          transform: scale(1.15);
        }

        /* Card */
        .j-card {
          position: relative;
          background: #f5f3ff;
          border: 1px solid #e9d5ff;
          border-radius: 16px;
          padding: 18px 20px 20px;
          overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        :is(.dark) .j-card {
          background: #160028;
          border-color: #3b0764;
        }
        .j-card:hover {
          border-color: var(--accent, #a855f7);
          box-shadow: 0 8px 32px -8px color-mix(in srgb, var(--accent, #a855f7) 40%, transparent);
        }

        /* Tag pill */
        .j-tag {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 99px;
        }

        /* Year */
        .j-year {
          font-size: 0.72rem;
          font-weight: 600;
          color: #9ca3af;
          letter-spacing: 0.04em;
        }
        :is(.dark) .j-year {
          color: #6b7280;
        }

        /* Bottom accent bar */
        .j-accent-bar {
          position: absolute;
          bottom: 0; left: 0;
          height: 2.5px;
          width: 0;
          border-radius: 0 99px 99px 0;
          transition: width 0.35s ease;
        }
        .j-card:hover .j-accent-bar {
          width: 55%;
        }
      `}</style>
    </section>
  )
}