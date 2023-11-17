import Orthodoc from '../images/orthodoc.png';
import { useState } from 'react';
export default function Project({projectItem, indx}) {
  const [likes, setLikes] = useState(0);
  return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
          className='w-full h-64'
            src={projectItem.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{projectItem.projectName}</h2>
          <p>{projectItem.description}</p>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => {setLikes(likes+1)}}>{likes} Likes</button>
            <a className="btn btn-primary" href={projectItem.link} target="_blank" rel="noreferrer">Link</a>
          </div>
        </div>
      </div>

  );
}
