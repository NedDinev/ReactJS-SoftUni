import { Link } from "react-router-dom";

export default function CatalogItem({ title, category, imageUrl, _id }) {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={imageUrl} alt={title} />
        <h6>{category}</h6>
        <h2>{title}</h2>
        <Link className="details-button" to={`/details/${_id}`}>
          Details
        </Link>
      </div>
    </div>
  );
}
