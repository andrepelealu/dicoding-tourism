import React from 'react'

function Info(){
    return(
        <div className="info">
            <div className="">
                <div className='row'>
                    <div className="col s4">
                        <span className="keyword">Informasi Wisata</span> 
                        <p>Nama Lokasi: <span className="keyword">Labuan Bajo</span></p>
                        <p>Provinsi: <span className="keyword">Nusa Tenggara Barat</span></p>
                        <p>Luas Wilayah: <span className="keyword">131.000 km2</span></p>
                        <p>Oleh-oleh khas: <span className="keyword">Kain Tenun</span></p>
                        <p>Deskripsi: </p>
                        
                    </div>
                    <div className="col s8">
                        <span className="keyword">Form Booking</span> 
                        <div class="row">
                            <form class="col s12" action="#">
                            <div class="row">
                                <div class="input-field col s12">
                                <input id="nama" type="text" class="validate"/>
                                <label for="nama">Nama Lengkap</label>
                                </div>
                            </div>
                        
                            <div class="row">
                                <div class="input-field col s12">
                                <input id="password" type="text" class="validate"/>
                                <label for="password">Nomor Handphone</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                <input id="email" type="email" class="validate"/>
                                <label for="email">Email</label>
                                </div>
                            </div>
                            <button class="waves-effect waves-light btn orange" type="submit">Cusss !</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info