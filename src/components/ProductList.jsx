import ProductCard from "./ProductCard";

export default function ProductList({ actData }) {
  return (
    <>
      {actData?.map((pro) => {
        return (
          <div key={pro.id} className="col-6 col-md-3 col-lg-2 mb-4">
            <ProductCard pro={pro}  />
          </div>
        );
      })}
    </>
  );
}
