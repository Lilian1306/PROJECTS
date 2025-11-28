import { BrowserRouter, Route, Routes } from "react-router-dom";
import EcommerceLayout from "./layout/EcommerceLayout";
import MainPage from "./views/MainPage";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<EcommerceLayout/>}>
                    <Route path="/" element={<MainPage/>} index />
                </Route>
            </Routes>    
        </BrowserRouter>
    )
 
}