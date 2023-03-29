import { Route, Routes } from "react-router-dom";
import RootLayout from "../layouts/root";
import Home from "../components/home/home.component";
import SignIn from "../components/sign-in/sign-in.component";

const MainRoute = () => {
    return(
        <>
        <Routes>
            <Route element={<RootLayout/>}>
              <Route index element={<Home/>} />
              <Route path="/sign-in" element={<SignIn/>}/>

            </Route>
        </Routes>
        </>
    )
}

export default MainRoute;