    import React from 'react'
    import './style.css'
    function Menu(){
        return(
            <div className="row menucov">
                <div className="col s12">
                    <b>Jelajah: </b>
                    <a href="/" className="menu">Beranda</a> |  
                    <a href="#" className="menu"> Ketentuan</a> | 
                    <a href="#" className="menu"> Kontak</a>
                </div>
            </div>
        )
    }

    export default Menu