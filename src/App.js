import './App.css';
import { Outlet, useLocation } from "react-router-dom";
import { ComponentRouteLink } from "./util/ComponentRouteLink";
import { useTranslation } from "react-i18next";
import React, { useEffect } from 'react';

function App() {
    const location = useLocation()
    const { t, i18n } = useTranslation()

    useEffect(() => {
        document.title = t("mainPage.title")
    })

    return (
        <div className="h-screen w-screen bg-slate-800 flex justify-center overflow-hidden">
            <div className="h-full w-full lg:w-2/5">
                <nav className={`w-full flex flex-wrap justify-center ${location.pathname === '/' ? '' : 'hidden'}`}>
                    <ComponentRouteLink link="/szozat-solver"
                                        title={t("szozatSolver.title")}>
                        {t("szozatSolver.description")}
                    </ComponentRouteLink>
                </nav>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
