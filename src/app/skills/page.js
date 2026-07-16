// import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaGit, FaWindows, FaApple, FaLinux, FaDesktop, FaAndroid} from 'react-icons/fa';
import { FaJava, FaPython, FaJs, FaGit, FaHtml5, FaCss3Alt, FaWindows, FaApple, FaLinux, FaAndroid, FaDatabase, FaDocker } from "react-icons/fa";
import { SiCplusplus, SiMysql, SiFirebase, SiMongodb, SiDjango, SiFlask, SiReact, SiNodedotjs, SiJquery, SiSqlite, SiPostman, SiGithub, SiIos, SiTypescript, SiNextdotjs, SiFastapi, SiPostgresql, SiRedis, SiExpress, SiGithubactions } from "react-icons/si";

// import { SiCplusplus, SiMysql, SiFirebase, SiIos } from 'react-icons/si';
import { GiSolderingIron } from 'react-icons/gi';
import SkillCard from '../../components/SkillCard';
import AnimatedSection from '../../components/animations/AnimatedSection';
import AnimatedCard from '../../components/animations/AnimatedCard';

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", icon: <FaPython className="text-blue-500" size={40} />, level: 90 },
        { name: "C/C++", icon: <SiCplusplus className="text-blue-600" size={40} />, level: 70 },
        { name: "Java", icon: <FaJava className="text-red-600" size={40} />, level: 80 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={40} />, level: 65 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={40} />, level: 60 },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={40} />, level: 80 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={40} />, level: 70 },
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "ReactJS", icon: <SiReact className="text-cyan-500" size={40} />, level: 70 },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" size={40} />, level: 65 },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" size={40} />, level: 60 },
        { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" size={40} />, level: 65 },
        { name: "FastAPI", icon: <SiFastapi className="text-teal-500" size={40} />, level: 70 },
        { name: "Django", icon: <SiDjango className="text-green-700" size={40} />, level: 85 },
        { name: "Flask", icon: <SiFlask className="text-gray-700 dark:text-gray-300" size={40} />, level: 75 },
      ]
    },
    {
      category: "Databases & Caching",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" size={40} />, level: 70 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" size={40} />, level: 65 },
        { name: "MySQL", icon: <SiMysql className="text-blue-800" size={40} />, level: 75 },
        { name: "Redis", icon: <SiRedis className="text-red-500" size={40} />, level: 55 },
        { name: "SQLite", icon: <SiSqlite className="text-gray-600" size={40} />, level: 60 },
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: <FaGit className="text-orange-600" size={40} />, level: 85 },
        { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" size={40} />, level: 85 },
        { name: "Docker", icon: <FaDocker className="text-blue-500" size={40} />, level: 65 },
        { name: "CI/CD (GitHub Actions)", icon: <SiGithubactions className="text-sky-600" size={40} />, level: 60 },
        { name: "Postman", icon: <SiPostman className="text-orange-500" size={40} />, level: 75 },
      ]
    },
    {
      category: "Operating Systems",
      items: [
        { name: "Windows", icon: <FaWindows className="text-blue-500" size={40} />, level: 70 },
        { name: "macOS", icon: <FaApple className="text-gray-700 dark:text-gray-200" size={40} />, level: 80 },
        { name: "Linux", icon: <FaLinux className="text-yellow-600" size={40} />, level: 80 },
      ]
    },
  ];
  

  return (
    <div>
      <AnimatedSection animation="fadeIn" amount={0.001} margin="0px 0px -5% 0px">
        <p className="eyebrow">// skills</p>
        <h1 className="page-title">My <span className="title-accent">toolkit</span></h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          The technologies I build with — each one exercised in a shipped project, not just a tutorial.
        </p>
      </AnimatedSection>

      {skills.map((category, index) => (
        <AnimatedSection 
          key={index} 
          animation="slideUp" 
          delay={index * 0.001} 
          className="mb-12" 
          amount={0.001}
          margin="0px 0px -5% 0px"
        >
          <h2 className="text-2xl font-bold mb-6 text-secondary dark:text-gray-200">{category.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {category.items.map((skill, skillIdx) => (
              <AnimatedCard 
                key={skillIdx} 
                index={skillIdx} 
                amount={0.001} 
                margin="0px 0px -5% 0px"
              >
                <SkillCard 
                  name={skill.name} 
                  icon={skill.icon} 
                  level={skill.level} 
                />
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>
      ))}

      <AnimatedSection 
        animation="fadeIn" 
        delay={0.5} 
        className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg" 
        amount={0.001}
        margin="0px 0px -5% 0px"
      >
        <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-gray-200">Currently adding weight</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Technology is always evolving, and so am I. On the bar right now:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Kubernetes</li>
          <li>AWS &amp; GCP</li>
          <li>LLM applications (RAG, agents)</li>
          <li>System design at scale</li>
        </ul>
      </AnimatedSection>
    </div>
  )
}
