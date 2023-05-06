import { HeaderWrapper } from "./style"
import LuciPic from '../../img/luci5.webp'
import { DownloadSimple } from "phosphor-react";
import lucicv from '../../img/lucicv.pdf'

export function Header() {

  return (  
    <HeaderWrapper>
      <article>
        <strong>Hello! I am Luci</strong>
        <h1>Junior Software Engineer</h1>
        <p>I am passionate about making online life easier with a touch of beauty. Back in 2020, I decided to embark on a career change and started my journey to become a software engineer. I take pride in every line of code and every step of progress I make. As a focused, results-driven, and highly capable Junior Software Engineer, I offer sound theoretical knowledge and practical experience across projects.</p>
        <button>
          <a href={lucicv} target="_blank" download>
            Download CV 
            <DownloadSimple size={20}/>
          </a>
        </button>
      </article>
      <img src={LuciPic} alt="Luci picture" />
    </HeaderWrapper>
  );
}

