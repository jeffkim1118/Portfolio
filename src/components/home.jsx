import { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-scroll";
import { FaMedium } from "react-icons/fa6";
import Clock from "./clock";
import { useDispatch } from "react-redux";
import MyPic from "../images/mypic.jpg";
import {
  fetchVisitors,
  incrementVisitor,
} from "../features/counter/counterSlice";
import AnalogClock from "./analogClock";

export default function Home() {
  const dispatch = useDispatch();
  const [visitorCount, setVisitorCount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(incrementVisitor());
        const totalVisitors = await dispatch(fetchVisitors());
        console.log(totalVisitors);
        setVisitorCount(totalVisitors.payload.counter);
      } catch (error) {
        console.log("error fetching visitors:", error);
      }
    };
    fetchData();
  }, [dispatch]);
  console.log(visitorCount);
  return (
    <div className="home-component" name="home">
      <div className="hero min-h-screen bg-base-600">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold m-5">Hello there!</h1>
            <img
              src={MyPic}
              alt="me"
              className="w-20 rounded-full m-auto"
            ></img>

            <p className="py-6 text-lg">My name is Yoonsung Kim.</p>

            <div className="link-container">
              <nav className="flex">
                <a
                  href="https://github.com/jeffkim1118"
                  target="_blank"
                  rel="noreferrer"
                  className="m-auto "
                >
                  <BsGithub className="text-4xl m-auto" />
                </a>

                <a
                  href="https://www.linkedin.com/in/yoonsung-kim-639b30178/"
                  target="_blank"
                  rel="noreferrer"
                  className="m-auto "
                >
                  <BsLinkedin className="text-4xl m-auto" />
                </a>

                <a
                  href="https://medium.com/@1019yskim"
                  target="_blank"
                  rel="noreferrer"
                  className="m-auto "
                >
                  <FaMedium className="text-4xl m-auto" />
                </a>
              </nav>
            </div>

            <div className="stats shadow m-3">
              <div className="stat">
                <Clock />
                <div className="stat-title">Total Page Views</div>
                <div className="stat-value" data-testid="hitcounter">
                  {visitorCount ? (
                    visitorCount
                  ) : (
                    <div className="flex-row">
                      <span className="loading loading-spinner loading-lg"></span>
                    </div>
                  )}
                </div>
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
