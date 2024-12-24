import React, {lazy, Suspense} from "react";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

const MainPage = lazy(() => import("pages"));

const AppRouter = () => {
    return (
        createBrowserRouter(
            createRoutesFromElements(
                <Route
                    element={
                        <Suspense
                            fallback={"..."}
                        >
                            <MainPage />
                        </Suspense>
                    }
                    path={"/"}
                />
            )
        )
    )
}

export default AppRouter;
