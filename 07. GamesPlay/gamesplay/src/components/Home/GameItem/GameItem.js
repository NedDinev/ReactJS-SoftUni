import { Link } from "react-router-dom";

export default function GameItem({ title, imageUrl, _id }) {
  return (
    <div className="game">
      <div className="image-wrap">
        <img src={imageUrl} />
      </div>
      <h3>{title}</h3>
      <div className="rating">
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
      <div className="data-buttons">
        <Link className="btn details-btn" to={`/details/${_id}`}>
          Details
        </Link>
      </div>
    </div>
  );
}
