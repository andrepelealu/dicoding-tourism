import React from 'react'

function Kontak(){
    return(
        
        <div className='kontak'>
                        <div id="modal1" className="modal">
                            <div className="modal-content">
                                <h4>Dicoding x Indosat Ooredoo</h4>
                                <b>Dicoding Challange</b><br/>
                                <code>
                                This page are made to contribute <b>Dicoding Challange x Indosat Ooredooo.</b><br/>
                                All the content appear is using dummy data and
                                this webpage is only prototype not for real business.<br/><br/>
                                Present to you with &#10084;<br/>
                                Cheerz,<br/>
                                <b>AndrePelealu</b>
                                </code>
                            </div>
                            <div className="modal-footer">
                                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                            </div>
                        </div>
            <h5 className="center-align">Hubungi Kami</h5>
            <div className="row">
                <form className="col s12">
                    <div className="input-field col s12">
                            <input id="nama" type="text" className="validate"/>
                            <label htmlFor="nama">Nama Kamu</label>
                    </div>
                    <div className="input-field col s12">
                            <input id="email" type="email" className="validate"/>
                            <label htmlFor="email">Alamat Email</label>
                    </div>
                    <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                        <label htmlFor="textarea1">Kenapa ??</label>
                    </div>
                    <button className="waves-effect waves-light btn orange modal-trigger"  href="#modal1" type="submit">Kirim</button>

                </form>
            </div>
        </div>
        

    )
}

export default Kontak