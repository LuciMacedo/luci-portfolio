import { HeaderWrapper } from "./style"
import LuciPic from '../../img/luci5.webp'
import { DownloadSimple } from "phosphor-react";
import luciResume from '../../img/LuciMacedoCV.pdf'

export function Header() {

  return (  
    <HeaderWrapper>
      <article>
        <strong>Hello! I am Luci</strong>
        <h1>Junior Software Engineer</h1>
        <p>I'm driven by a deep passion for simplifying the online world and making life easier for users. In 2020, I decided to pursue a career as an Software Engineer, and since then, I've poured my heart into every line of code I write and every milestone I achieve. As a dedicated and results-oriented Junior Software Engineer, I bring a unique blend of theoretical expertise and hands-on experience gained from working on various projects. I am eager to contribute my skills and knowledge to your team and help create innovative solutions that will leave a lasting impact.</p>
        <button>
          <a href={luciResume} target="_blank" download>
            Download CV 
            <DownloadSimple size={20}/>
          </a>
        </button>
      </article>
      <img src={LuciPic} alt="Luci picture" />
    </HeaderWrapper>
  );
}

