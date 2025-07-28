import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const urlApi = "https://fakestoreapi.com/products";
  //prodotti Api
  const [api, setApi] = useState(urlApi);
  const [actData, setActData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setActData(data);
      });
  }, [api]);

  return (
    <>
      {actData?.map((pro) => {
        return (
          <div className="col-6 col-md-3 col-lg-2 mb-4" key={pro.id}>
            <div className="card h-100">
              <Link to={`/ProductSingle/${pro.id}`}>
                <img src={pro.image} className="card-img-top" alt={pro.title} />
              </Link>
              <div className="card-body text-start">
                <h5 className="card-title text-center text-success">
                  {pro.title}
                </h5>
              </div>
              <ul className="list-group list-group-flush text-start">
                <li className="list-group-item">{pro.price}</li>

                <li className="list-group-item">{pro.description}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}
