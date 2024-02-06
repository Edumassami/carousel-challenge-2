import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Fase1 from "./pages/Fase1";
import Fase2 from "./pages/Fase2";
import Fase3 from "./pages/Fase3";
import Avaliacao from "./pages/Avaliacao";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> }></Route>
                <Route path='/fase1' element={ <Fase1 /> }></Route>
                <Route path='/fase2' element={ <Fase2 /> }></Route>
                <Route path='/fase3' element={ <Fase3 /> }></Route>
                <Route path='/avaliacao' element={ <Avaliacao /> }></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;