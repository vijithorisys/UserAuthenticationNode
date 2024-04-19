import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <Link to='/'>Login</Link>
        <Link to='/register'>Register</Link>
        </>
    )
}

export default Navbar