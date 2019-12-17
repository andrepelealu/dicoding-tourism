import React from 'react';

function Searchbar(){
     function submitSearch(e) {
         e.preventDefault()
        console.log('sampai sini')
    }
    return(
        <div className="row">
            <form className="col s12" noValidate onSubmit={submitSearch}>
            <b>Cari Tempat Wisata</b>
            <div className="row">
                <div className="input-field col s12">
                
                <div className="nav-wrapper">
                    
                        <div className="input-field">
                        <input placeholder="Labuan Bajo" id="search" type="search" required/>
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                        </div>
                    
                </div>
                
                <a href="/search" className="btn waves-effect waves-light col s12 center m12 orange" type="submit" name="action">
                    Cari
                    </a>

                </div>
            </div>
            </form>
      </div>
            
    )
}

export default Searchbar