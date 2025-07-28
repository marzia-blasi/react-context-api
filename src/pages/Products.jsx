import ProductList from "../components/ProductList";
import { useGlobalContext } from "../context/GlobalContext";

export default function Products() {
  const { actData } = useGlobalContext();

  return (
    <>
      <div className="container">
        <div className="row">
          <ProductList actData={actData} />
        </div>
      </div>
    </>
  );
}
