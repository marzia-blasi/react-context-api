import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ProductSingle from "./pages/ProductSingle";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="*" Component={NotFoundPage} />
            <Route index Component={HomePage} />
            <Route path="/Products" Component={Products} />
            <Route path="/Contact" Component={Contact} />
            <Route path="/ProductSingle/:id" Component={ProductSingle} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
