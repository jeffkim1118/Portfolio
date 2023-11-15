import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaMedium } from "react-icons/fa6";

export default function Phone() {
  return (
    <div>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 text-center">
            <h1 className="font-bold text-xl">Contact</h1>
            <div className="gap-4 mt-3 text-6xl">
              <a href="https://github.com/jeffkim1118" target="_blank" rel="noreferrer" className="rounded-full hover:text-sky-400"><BsGithub className="mt-4"/></a>
              <a href="https://www.linkedin.com/in/yoonsung-kim-639b30178/" target="_blank" rel="noreferrer" className="rounded-full hover:text-sky-400"><BsLinkedin  className="mt-4"/></a>
              <a href="https://medium.com/@1019yskim" target="_blank" rel="noreferrer" className="rounded-full hover:text-sky-400"><FaMedium  className="mt-4"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
