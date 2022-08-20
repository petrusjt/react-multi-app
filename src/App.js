import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
    return (
        <div className="h-screen w-screen bg-slate-800 flex justify-center">
            <div className="w-2/4">
                <nav className="flex flex-wrap justify-center">
                    <Link to="/szozat-solver">
                        <div className="card">
                            Szozat solver
                        </div>
                    </Link>
                </nav>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
