import { Route, Routes } from "react-router-dom";
import { FruitandVeg } from "../Pages/FruitandVeg";
import { SingleProductPage } from "../Pages/SingleProductPage";

const MainRoutes = () => {
    return (
      <Routes>
          <Route path="/products" element={<FruitandVeg/>}/>
          <Route path="/products/:id" element={<SingleProductPage/>} />
          <Route path="*" element={<h3>Page Not Found !</h3>} />
      </Routes>
    )
  }
  
  export default MainRoutes
  
  