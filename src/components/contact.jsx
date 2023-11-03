import Phone from "./phone";

export default function Contact() {
  return (
    <div name="contact">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <div contact-form-container>
            <form className="contact-from">
            <label className="input-group">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </label>
              <label className="input-group">
                <span>Email</span>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </label>
              <label className="input-group">
                <span>Message</span>
                <input
                  type="text"
                  placeholder="Type your message here..."
                  className="input input-bordered"
                />
              </label>
              
              <button className="btn btn-primary">Send</button>
            </form>
          </div>
          <Phone/>
        </div>
      </div>
    </div>
  );
}
