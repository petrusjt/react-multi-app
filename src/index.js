import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SzozatSolverMain } from "./routes/szozat-solver/SzozatSolverMain";
import "./i18n"

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/szozat-solver" element={<SzozatSolverMain />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
