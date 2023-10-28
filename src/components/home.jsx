import { useState, useEffect } from "react";
import countapi from "countapi-js";

export default function Home() {
  const [hitCounter, setHitCounter] = useState();

  useEffect(() => {
    countapi.visits("global").then((result) => {
      setHitCounter(result.value);
    });
  }, []);
  

  console.log(hitCounter)

  return (
    <div className="home-component">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there!</h1>
            <p className="py-6">
              My name is Yoonsung "Jeffrey" Kim.
              <br />
              Check out my portfolio website!
            </p>
            <label>Visitor Count</label>
            <br />
            <span className="countdown font-mono text-6xl py-3">
              <span style={{ "--value": 40 }}></span>
            </span>
            <br />

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
