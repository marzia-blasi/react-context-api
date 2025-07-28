import { Link } from "react-router-dom";

export default function ProductCard({ pro }) {
  return (
    <div className="card h-100">
      <Link to={`/ProductSingle/${pro.id}`}>
        <img src={pro.image} className="card-img-top" alt={pro.title} />
      </Link>
      <div className="card-body text-start">
        <h5 className="card-title text-center text-success">{pro.title}</h5>
      </div>
      <ul className="list-group list-group-flush text-start">
        <li className="list-group-item">{pro.price}</li>

        <li className="list-group-item">{pro.description}</li>
      </ul>
    </div>
  );
}
