import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
   return (
    <>
    <nav>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/sklep"}>Sklep</Link>  
            </li>
            <li>
                <Link to={"/login"}>Login</Link>
            </li>
        </ul>
    </nav>
    <main>
        <Outlet />
    </main>
    <footer>
        zaz ned
    </footer>
    </>
   ) 
};