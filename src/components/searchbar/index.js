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
                
                <div class="nav-wrapper">
                    <form>
                        <div class="input-field">
                        <input placeholder="Labuan Bajo" id="search" type="search" required/>
                        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                        <i class="material-icons">close</i>
                        </div>
                    </form>
                </div>
                
                <button className="btn waves-effect waves-light col s12 center m12 orange" type="submit" name="action">Cari
                    </button>

                </div>
            </div>
            </form>
      </div>
            
    )
}

export default Searchbar