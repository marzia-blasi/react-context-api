import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductSingle() {
  const { id } = useParams();
  const productId = Number(id);
  const urlApiGet = `https://fakestoreapi.com/products/${id}`;
  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch(urlApiGet)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [productId]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="container-light">
              <div className="card">
                <img src={product.image} alt="" className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title">{product.title}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-start">
            <div>{product.description}</div>
            <div>
              <Link to={`/ProductSingle/${productId + 1}`}>
                <button>Prossimo prodotto</button>
              </Link>
            </div>
            <div>
              <button
                onClick={() => {
                  navigate(`/ProductSingle/${productId + 1}`);
                }}
              >
                Prossimo prodotto ma con navigate{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
