import Orthodoc from "../images/orthodoc.png";
import { useEffect, useState } from "react";
export default function Project({ projectItem, indx }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLike] = useState(false);
 

  useEffect(() => {
    // fetch('http://localhost:5000/likes')
    // .then((res) => res.json())
    // .then((data) => console.log(data))
  },[])

  const onLikeButtonClick = () => {
    setLikes(likes + (isLiked ? -1 : 1));
    setIsLike(!isLiked);
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-64" src={projectItem.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{projectItem.projectName}</h2>
        <p>{projectItem.description}</p>

        <div className="card-actions justify-end">
          <button
            className={'btn'}
            onClick={() => onLikeButtonClick()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={"h-6 w-6" + (isLiked? " liked":" unlike")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {likes}
          </button>
          <a
            className="btn btn-primary"
            href={projectItem.link}
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
}
