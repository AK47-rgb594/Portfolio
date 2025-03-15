import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import Cube3D from './components/Cube3D';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="relative bg-gradient-to-r from-primary to-secondary text-white min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <Canvas className="w-full h-full">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Cube3D />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10 backdrop-blur-sm bg-black/30 rounded-lg p-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Amith Athreya K</h1>
          <p className="text-xl md:text-2xl mb-8">Full Stack Developer</p>
          <p className="text-lg max-w-10xl">
            Passionate about designing and developing impactful, scalable applications that solve real-world problems. With a strong foundation in computer science and expertise in building full-stack solutions, I leverage modern web technologies like React, Spring Boot, and Docker to deliver high-performance, user-centric systems.
            Experienced in architecting cloud-native applications and microservices, I excel at ensuring seamless integration, security, and scalability across platforms. My fintech background has honed my ability to handle large datasets, maintain data privacy, and implement efficient workflows.
            I thrive in collaborative environments, mentoring peers on new technologies and contributing to cross-functional teams to align technical goals with business objectives. Always curious and eager to learn, I embrace challenges as opportunities to grow and innovate.
            Whether it’s optimizing backend processes, developing intuitive front-end interfaces, or exploring emerging technologies like container security and AWS Lambda, I am committed to delivering solutions that exceed expectations and drive value.
          </p>
        </motion.div>
      </header>

      <AnimatedSection className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* MoneyView SDE */}
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
            <h3 className="text-2xl font-semibold">Software Development Engineer - MoneyView</h3>
            <p className="text-gray-600">
              <b>Fintech Startup, Remote</b>
            </p>
            <p className="text-gray-600">Feb 2023 - Present</p>
            <div className="p-6 bg-gray-50 rounded-2xl shadow-lg space-y-6 mt-6">
              <div>
                <h4 className="text-lg font-bold text-primary">
                  Designed and implemented a Bureau Pull Automation Portal
                </h4>
                <p className="text-gray-700">
                  Utilized <span className="font-medium">Spring Boot</span> and{" "}
                  <span className="font-medium">React.js</span> to streamline manual processing,
                  achieving a{" "}
                  <span className="text-secondary font-semibold">
                    70% reduction in processing time
                  </span>
                  .
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">
                  Migrated Legacy Systems to Modern Frameworks
                </h4>
                <p className="text-gray-700">
                  Transitioned systems to <span className="font-medium">Java 17</span> and{" "}
                  <span className="font-medium">Tomcat 10</span>, significantly enhancing code
                  maintainability and leveraging advanced Java features.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">
                  Scaled Microservices for High Traffic
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Optimized two microservices to handle traffic growth from{" "}
                    <span className="font-semibold">50k requests/min to 100k requests/min</span>.
                  </li>
                  <li>
                    Introduced <span className="font-medium">Amazon SQS</span> for efficient traffic
                    management and decoupling.
                  </li>
                  <li>
                    Leveraged <span className="font-medium">AWS Lambda</span> for queued record
                    processing and integrated it with a scalable downstream service.
                  </li>
                  <li>
                    Achieved a{" "}
                    <span className="text-secondary font-semibold">30% reduction in latency</span>,
                    with real-time monitoring, auto-scaling, and robust workflows ensuring high
                    throughput.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">Enhanced API Performance</h4>
                <p className="text-gray-700">
                  Optimized SQL queries and implemented caching mechanisms, resulting in a{" "}
                  <span className="text-secondary font-semibold">50% improvement in API response times</span>.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">
                  Implemented PAN Deduplication for Large Datasets
                </h4>
                <p className="text-gray-700">
                  Designed and executed a deduplication strategy for{" "}
                  <span className="font-medium">8.5 million records</span>, employing a robust masking
                  approach to ensure data integrity and security.
                </p>
              </div>
            </div>
          </div>

          {/* MoneyView Intern */}
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
            <h3 className="text-xl font-semibold">Backend Developer Intern - MoneyView</h3>
            <p className="text-gray-600">Aug 2021 - 2023</p>
            <div className="p-6 rounded-2xl shadow-lg space-y-6 mt-6">
              {/* Loan Eligibility Predictor */}
              <div>
                <h1 className="text-xl font-bold text-primary">Loan Eligibility Predictor</h1>
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-gray-700   pb-1">
                    Description
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Develop a platform that evaluates users’ loan eligibility using credit score and
                    financial history.
                  </p>
                </div>
                <div className="mt-6  p-4 border-400 rounded">
                  <h2 className="text-lg font-semibold text-primary">Tech Stack</h2>
                  <p className="mt-1 text-gray-700">
                    Python (<span className="font-medium">Flask/Django</span>), React, PostgreSQL,
                    Machine Learning (<span className="font-medium">scikit-learn</span>).
                  </p>
                </div>
                <div className="mt-6">
                  <h2 className="text-lg font-semibold  pb-1">
                    Features
                  </h2>
                  <ul className="mt-2 space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                      <b>Data Input:</b> Accepts financial history, income, and expenses.
                    </li>
                    <li>
                      <b>Credit Scoring:</b> Predicts eligibility using a machine learning model.
                    </li>
                    <li>
                      <b>Visualization:</b> Shows probability scores and reasons for approval/rejection.
                    </li>
                  </ul>
                </div>
                <div className=" p-4  rounded mt-6">
                  <h2 className="text-lg font-semibold text-600">Impact</h2>
                  <p className="mt-1 text-gray-700">
                    Demonstrates machine learning, fintech domain knowledge, and backend integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li>React</li>
                <li>Java Script</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2">
                <li>Spring Boot</li>
                <li>MySQL</li>
                <li>REST APIs</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <ul className="space-y-2">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2">Ad-Hoc Bureau Pull Portal</h3>
              <p className="text-gray-600 mb-4">
                A React and Spring Boot application for automating credit bureau data pulls with real-time results.
              </p>
              <a href="https://github.com/AK47-rgb594" className="text-primary hover:text-secondary inline-flex items-center">
                View Project <span className="ml-2">→</span>
              </a>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2">Google Meet Automation Bot</h3>
              <p className="text-gray-600 mb-4">
                Automated Google Meet attendance and transcript generation system, integrated with Google Calendar and Drive.
              </p>
              <a href="https://github.com/AK47-rgb594" className="text-primary hover:text-secondary inline-flex items-center">
                View Project <span className="ml-2">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/AK47-rgb594"
              className="text-gray-700 hover:text-primary text-2xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/amith-athreya-2b48b6236/"
              className="text-gray-700 hover:text-primary text-2xl"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2 }}
              href="mailto:amith.athreyak@gmail.com"
              className="text-gray-700 hover:text-primary text-2xl"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Amith. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
