import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Fase1 from "./pages/Fase1";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> }></Route>
                <Route path='/fase1' element={ <Fase1 /> }></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;