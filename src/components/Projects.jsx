import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -75}}
            transition={{duration: 0.5}}
            viewport={{ once: true }}
            className="my-20 text-center text-red-300 text-4xl">Projects</motion.h2>
            <div className=" ">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/4">
                        <img
                        src={project.image} 
                        width={250}
                        height={250}
                        alt={project.title}
                        className="mb-6 rounded"
                        />
                        </motion.div>

                        <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 1}}
                        viewport={{ once: true }}
                        className="w-full max-w-xl lg:w-3/4 group/project">
                            <div className="flex items-center gap-3 mb-2">
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold inline-block relative cursor-pointer group/title"
                                    >
                                        <h6 className="relative">
                                            {project.title}
                                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 ease-out group-hover/title:w-full"></span>
                                        </h6>
                                    </a>
                                ) : (
                                    <h6 className="font-semibold">{project.title}</h6>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="opacity-100 md:opacity-0 md:group-hover/project:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                                        aria-label="View GitHub Repository"
                                    >
                                        <svg
                                            className="w-5 h-5 text-purple-400 hover:text-purple-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span 
                                key={index} 
                                className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-500">
                                {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;