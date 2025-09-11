import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navigation = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="mb-8 flex items-center justify-center gap-6 text-4xl">

                <a
                    href = "https://www.linkedin.com/in/riham-khan-037969249/"    // hypertext reference, directs to that link
                    target = "_blank"     // opens a new tab, so current stays open
                    rel = "noopener noreferrer"     // safety lock for external links
                    className = "transition-colors hover:text-cyan-400"     // makes color changes smooth, and changes icon to cyan when hovered over
                >
                    <FaLinkedin />
                </a>
                
                <a
                    href = "https://github.com/ramkan12"
                    target = "_blank"     
                    rel = "noopener noreferrer"     
                    className = "transition-colors hover:text-cyan-400" >
                    <FaGithub />
                </a>

            </div>
        </nav>
    );
};

export default Navigation;

