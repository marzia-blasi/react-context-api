import ProductList from "../components/ProductList";
import { useGlobalContext } from "../context/GlobalContext";

export default function Products() {
  const { api } = useGlobalContext();

  return (
    <>
      <div className="container">
        <div className="row">
          <ProductList api={api} />
        </div>
      </div>
    </>
  );
}
