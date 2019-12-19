    import React from 'react'
    import './style.css'
    import {Link} from 'react-router-dom'
    function Menu(){
        return(
            <div className="row menucov">
                <div className="col s12">
                    <b>Jelajah: </b>
                    <a href='/' className="menu">Beranda | </a>
                    <Link to='/ketentuan' className="menu">Ketentuan | </Link>
                    <a href='/kontak' className="menu">Kontak | </a>
                </div>
            </div>
        )
    }

    export default Menu