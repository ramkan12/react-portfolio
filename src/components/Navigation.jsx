import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

const Navigation = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="mb-8 flex items-center justify-center gap-4 text-2xl">

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

                <a
                    href = "https://x.com/r1hamk"
                    target = "_blank"     
                    rel = "noopener noreferrer"     
                    className = "transition-colors hover:text-cyan-400" >
                 
                    <FaSquareXTwitter />
                </a>

                <a
                    href = "https://www.instagram.com/r1hamk/"
                    target = "_blank"     
                    rel = "noopener noreferrer"     
                    className = "transition-colors hover:text-cyan-400"
                >
                    <FaInstagram />
                </a>

            </div>
        </nav>
    );
};

export default Navigation;

