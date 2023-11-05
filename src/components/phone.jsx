export default function Phone() {
  return (
    <div>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 text-center">
            <form className="contact-form">
              <label>
                
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </label>
              <label>
               
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </label>
              <label>
              
                <input
                  type="text"
                  placeholder="Type your message here..."
                  className="input input-bordered"
                />
              </label><br/>

              <button className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
