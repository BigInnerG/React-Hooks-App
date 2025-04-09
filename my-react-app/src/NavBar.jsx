import { Link } from "react-router-dom";

function NavBar(){

    return (

        <>
        <nav>
            <Link to= '/'>Home</Link> |
            <Link to= '/counter'>Counter</Link> |
            <Link to= '/light-tracker'>Light Tracker</Link> |
            <Link to= '/expensive-calculations'>Expensive Calculations</Link> |
            <Link to= '/favorite-color'>Favorite Color</Link> |
        </nav>
        </>

    );

}
export default NavBar;