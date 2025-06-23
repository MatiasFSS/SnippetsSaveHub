import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <nav className="bg-neutral-900 text-white w-full px-4 py-3 shadow-md">
        <div className="max-w-full mx-auto flex justify-between items-center px-10">
            
            <Link to="./"><span className="text-xl font-bold text-violet-400">GitSnippetsHub</span></Link>
        
            <a
            href="https://github.com/tu-usuario/tu-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition"
            >
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
    </nav>
    </>
  )
}


