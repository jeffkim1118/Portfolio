import { useState, useEffect } from "react";
import countapi from "countapi-js";

export default function Home() {
  const [hitCounter, setHitCounter] = useState();

  useEffect(() => {
    countapi.visits("global").then((result) => {
      setHitCounter(result.value);
    });
  }, []);

  console.log(hitCounter);

  return (
    <div className="home-component" name="home">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there!</h1>
            <p className="py-6">
              My name is Yoonsung "Jeffrey" Kim.
              <br />
              Check out my portfolio website!
            </p>

            <div className="stats shadow m-3">
              <div className="stat">
                <div className="stat-title">Total Page Views</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div><br/>

            <button className="btn btn-primary" href="about">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
