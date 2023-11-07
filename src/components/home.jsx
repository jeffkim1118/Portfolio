import { useState, useEffect } from "react";
import countapi from "countapi-js";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-scroll";
import { FaMedium } from "react-icons/fa6";
import Clock from "./clock";

export default function Home() {
  const [hitCounter, setHitCounter] = useState();

  useEffect(() => {
    countapi.visits("global").then((result) => {
      setHitCounter(result.value);
    });
  }, []);

  return (
    <div className="home-component" name="home">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there!</h1>
            <p className="py-6">My name is Yoonsung Kim.</p>
         
            <div className="link-container">
              <nav className="flex">
                <a
                  href="https://github.com/jeffkim1118"
                  target="_blank"
                  rel="noreferrer"
                  className="m-auto"
                >
                  <BsGithub className="text-4xl m-auto" />
                  Github
                </a>

                <a
                  href="https://www.linkedin.com/in/yoonsung-kim-639b30178/"
                  target="_blank"
                  rel="noreferrer"
                  className="m-auto"
                >
                  <BsLinkedin className="text-4xl m-auto" />
                  Linkedin
                </a>

                <a
                  href="https://medium.com/@1019yskim"
                  target="_blank"
                  rel="noreferrer"
                  className="m-auto"
                >
                  <FaMedium className="text-4xl m-auto" />
                  Medium
                </a>
              </nav>
            </div>
            
            <div className="stats shadow m-3">
              
              <div className="stat">
              <Clock/>
                <div className="stat-title">Total Page Views</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
            <br />

            <Link
              className="btn btn-primary"
              to="about"
              smooth={true}
              duration={600}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
