import { useState, lazy, Suspense, useContext, useEffect } from "react";
import { Routes, Route, Link, useLocation, Outlet } from "react-router-dom";
import "./App.scss";
import { getUserData, getIsUserLogged } from "./api/Utils";

import Header from "./components/Header/Header";
import AuthContext from "./contexts/authenticationContext";
const ProtectedRoute = lazy(() => import("./components/utils/ProtectedRoute"));
const Catalog = lazy(() => import("./components/views/Catalog/CatalogPage"));
const Details = lazy(() => import("./components/views/Details/Details"));
const ProductForm = lazy(() =>
    import("./components/views/ProductForm/ProductForm")
);
const Authentication = lazy(() =>
    import("./components/views/Authentication/Authentication")
);
const Logout = lazy(() => import("./components/utils/Logout"));

function App() {
    const userContext = useContext(AuthContext);
    const isUserLoggedIn = userContext.isLoggedIn;

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
        <>
            <HeaderLayout hideHeaderPaths={"/authentication"} />
            <div id="mainContent">
                <Suspense>
                    <Routes>
                        <Route path={"/"} exact element={<Catalog />} />

                        <Route
                            path="/authentication/*"
                            element={
                                <ProtectedRoute
                                    isUserLogged={isUserLoggedIn}
                                    redirectPath={"/myaccount"}
                                >
                                    <Authentication />
                                </ProtectedRoute>
                            }
                        />

                        <Route
                            path="/myaccount/*"
                            element={
                                <ProtectedRoute
                                    isUserLogged={!isUserLoggedIn}
                                    redirectPath={"/authentication/login"}
                                >
                                    <Catalog isMyAccount={true} />
                                </ProtectedRoute>
                            }
                        />

                        <Route
                            path={"/additem"}
                            element={
                                <ProtectedRoute
                                    isUserLogged={!isUserLoggedIn}
                                    redirectPath={"/authentication/login"}
                                >
                                    <ProductForm />
                                </ProtectedRoute>
                            }
                        />

                        <Route
                            path={"edit/:itemId"}
                            element={
                                <ProtectedRoute
                                    isUserLogged={!isUserLoggedIn}
                                    redirectPath={"/authentication/login"}
                                >
                                    <ProductForm />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path={"myaccount/details/:itemId"}
                            element={
                                <ProtectedRoute
                                    isUserLogged={!isUserLoggedIn}
                                    redirectPath={"/authentication/login"}
                                >
                                    <Details isMyAccount={true} />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path={"/details/:itemId"}
                            element={<Details />}
                        />

                        <Route
                            path={"/logout"}
                            element={
                                <ProtectedRoute
                                    isUserLogged={!isUserLoggedIn}
                                    redirectPath={"/"}
                                >
                                    <Logout />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Suspense>
            </div>
        </>
    );
}

export default App;
