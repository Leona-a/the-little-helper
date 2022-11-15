import { Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import Lists from './pages/Lists';
import ListItem from "./pages/ListItem";
import Admin from "./pages/Admin";

function PageRouter() {
    return (
        <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/list/:id" element={<ListItem />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/" element={<Welcome />} />
        </Routes>
    );
}

export default PageRouter;


