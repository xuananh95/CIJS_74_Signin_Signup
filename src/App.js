import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DetailUser from "./pages/DetailUser";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const initialValue = {
        username: "",
        password: "",
    };

    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/user" element={<DetailUser />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
            <ToastContainer />
        </div>
    );
}

export default App;
