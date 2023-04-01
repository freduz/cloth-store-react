import { Route, Routes } from "react-router-dom";
import RootLayout from "../layouts/root";
import Home from "../components/home/home.component";
import Authentication from "../components/authentication/authentication.component";

const MainRoute = () => {
    return(
        <>
        <Routes>
            <Route element={<RootLayout/>}>
              <Route index element={<Home/>} />
              <Route path="/auth" element={<Authentication/>}/>

            </Route>
        </Routes>
        </>
    )
}

export default MainRoute;