import {
    useState,
    lazy,
    Suspense,
    createContext,
    useContext,
    useEffect,
} from "react";
import { Routes, Route, Link, useLocation, Outlet } from "react-router-dom";
import "./App.scss";
import { getUserData, isUserLogged } from "./api/Utils";

import ProtectedRoute from "./components/utils/ProtectedRoute";
import AuthenticationProtectRoute from "./components/utils/AuthenthicationProtectRoute";
import Header from "./components/Header/Header";
const Catalog = lazy(() => import("./components/views/Catalog/CatalogPage"));
const Details = lazy(() => import("./components/views/Details/Details"));
const CreateForm = lazy(() => import("./components/views/Create/Create"));
const Authentication = lazy(() =>
    import("./components/views/Authentication/Authentication")
);
const Logout = lazy(() => import("./components/utils/Logout"));

export const UserDataContext = createContext(getUserData());

function App() {
    // const [UserData, setUserData] = useState((getUserData()));
    // useEffect(() => {
    //     setUserData(JSON.parse(getUserData()));
    // }, []);

    const HeaderLayout = ({ hideHeaderPaths = "" }) => {
        const { pathname } = useLocation();

        return (
            <>
                {!pathname.includes(hideHeaderPaths) && <Header />}
                <Outlet />
            </>
        );
    };
    return (
        <UserDataContext.Provider value={getUserData()}>
            <HeaderLayout hideHeaderPaths={"/authentication"} />
            <div id="mainContent">
                <Suspense>
                    <Routes>
                        <Route path={"/"} exact element={<Catalog />} />
                        <Route
                            path={"/addItem"}
                            exact
                            element={<CreateForm />}
                        />
                        <Route
                            path="/authentication/*"
                            element={
                                <AuthenticationProtectRoute
                                    user={isUserLogged()}
                                    path={"/myaccount"}
                                >
                                    <Authentication />
                                </AuthenticationProtectRoute>
                            }
                        />
                        <Route
                            path={"/details/:itemID"}
                            element={<Details />}
                        />
                        <Route
                            element={
                                <ProtectedRoute
                                    user={isUserLogged()}
                                    path={"/"}
                                />
                            }
                        >
                            <Route path={"/logout"} element={<Logout />} />
                        </Route>
                    </Routes>
                </Suspense>
            </div>
        </UserDataContext.Provider>
    );
}

export default App;
