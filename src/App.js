import "./App.scss";
import { Routes, Route, Link, useLocation, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Catalog from "./components/views/Catalog/Catalog";
import CreateForm from "./components/views/Create/Create";
import Details from "./components/views/Details/Details";
import Authentication from "./components/views/Authentication/Authentication";
import FormLogin from "./components/views/Authentication/FormLogin";
import FormRegister from "./components/views/Authentication/FormRegister";

function App() {
    const Layout = ({ hideHeaderPaths = "" }) => {
        const { pathname } = useLocation();

        return (
            <>
                {!pathname.includes(hideHeaderPaths) && <Header />}
                <Outlet />
            </>
        );
    };

    return (
        <>
            {/* <Header></Header> */}

            <div id="mainContent">
                <Routes>
                    <Route
                        element={<Layout hideHeaderPaths={"/authentication"} />}
                    >
                        <Route path={"/"} exact element={<Catalog />} />
                        <Route
                            path={"/create"}
                            exact
                            element={<CreateForm />}
                        />
                        <Route
                            path="/authentication/*"
                            element={<Authentication />}
                        >
                            <Route path="login" element={<FormLogin />} />
                            <Route path="register" element={<FormRegister />} />
                        </Route>
                        <Route path={"/details"} element={<Details />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
