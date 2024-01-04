import Phone from "./phone";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div name="contact">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Phone />
        </div>
      </div>
    </div>
  );
}
