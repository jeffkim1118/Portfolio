export default function Home() {
  return (
    <div className="home-component">
      {/* <div className="grid-line">
        <div className="home-container">
          <div className="hero bg-gradient-to-r from-indigo-500 to-indigo-300 to-violet-500 shadow-2xl shadow-lg shadow-blue-500/50 rounded-lg p-10">
            <h1 className="text-yellow-200">Hero here</h1>
          </div>
        </div>
      </div> */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there!</h1>
            <p className="py-6">
              My name is Yoonsung "Jeffrey" Kim.<br/>
              Check out my portfolio website!
            </p>
            
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
