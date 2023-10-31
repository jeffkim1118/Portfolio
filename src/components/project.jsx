import Orthodoc from '../images/orthodoc.png';

export default function Project() {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={Orthodoc}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <a className="btn btn-primary" href='https://orthodocinstrumentmanual.web.app/' target="_blank" rel="noreferrer">Website</a>
          </div>
        </div>
      </div>
    </div>
  );
}
