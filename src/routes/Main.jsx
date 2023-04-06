import { Route, Routes } from "react-router-dom";
import RootLayout from "../layouts/root";
import Home from "../components/home/home.component";
import Authentication from "../components/authentication/authentication.component";
import Shop from "../pages/shop/shop.component";
import CheckOut from "../components/checkout/checkout.component";

const MainRoute = () => {
    return(
        <>
        <Routes>
            <Route element={<RootLayout/>}>
              <Route index element={<Home/>} />
              <Route path="/auth" element={<Authentication/>}/>
              <Route path="/shop" element={<Shop/>}></Route>
              <Route path="/checkout" element={<CheckOut/>}></Route>

            </Route>
        </Routes>
        </>
    )
}

export default MainRoute;