import MyPic from "../images/mypic.jpg";
import {
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
} from "react-icons/bi";
import { SiRubyonrails, SiTailwindcss } from "react-icons/si";
import { DiRuby } from "react-icons/di";

export default function About() {
  return (
    <div className="about-component" name="about">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          {/* <img
            src={MyPic}
            className="max-w-sm rounded-lg shadow-2xl transition opacity duration-700"
            alt="personal-pic"
          /> */}
          <div>
            <h1 className="text-5xl font-bold">Who am I?</h1>
            <p className="text-3xl py-6">
              Graduated from CUNY Baruch College with a Bachelor's Degree in
              Computer Information Systems. I'm a fullstack developer based in
              New York. Here are my tools for development.
            </p>
            {/* Icons */}
            <div className="flex flex-row">
              <BiLogoReact className="text-6xl" />
              <BiLogoJavascript className="text-6xl" />
              <BiLogoHtml5 className="text-6xl" />
              <BiLogoCss3 className="text-6xl" />
              <SiTailwindcss className="text-6xl" />
              <DiRuby className="text-6xl" />
              <SiRubyonrails className="text-6xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
