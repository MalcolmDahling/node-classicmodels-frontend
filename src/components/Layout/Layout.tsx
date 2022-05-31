import { Link, Outlet } from 'react-router-dom';
import './Layout.scss';

export function Layout(){

    return(
        <div className="wrapper">
            <header>
                <h1>Welcome to Classic Models</h1>
                    
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>

            </footer>
        </div>
    );
}