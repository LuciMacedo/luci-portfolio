import { Projects } from "../projects/Projects";
import { GalleryTitle, LinkStyle} from "./style";
import { Code, HandPointing } from 'phosphor-react';
import { Link } from "react-router-dom";
import { GithubLogo, CodeSimple} from 'phosphor-react' 
import { AdditionalProjects } from "../pages/additionalProjects/AdditionalProjects";

export function Gallery() {
  return (
    <>
      <GalleryTitle>
        <Code size={40} id='gallery' />
        <h1 >FRONTEND PROJECTS</h1>
        <h2>I’ve developed applications, using HTML, CSS, JAVASCRIPT AND REACT.</h2>
        <Link to='additionalprojects'>
          <p>Would you like to see more! Have a look!</p>
          <HandPointing size={25} />
        </Link>
      </GalleryTitle>
      <Projects />
      <GalleryTitle>
      <Code size={40} id='gallery' />
        <h1 >BACKEND PROJECTS</h1>
        <h2>Here you can check my programs developed in Python.</h2>
        <LinkStyle>
        <a href="https://github.com/LuciMacedo">
          <GithubLogo size={24} />
          <p>GitHub</p>
        </a>
        <a href="https://www.hyperiondev.com/portfolio/146288/">
          <Code size={40} />
          <p>Software Enginneer Bootcamp - HyperionDev</p>
        </a>
        </LinkStyle>
      </GalleryTitle>
    </>
  );
}

