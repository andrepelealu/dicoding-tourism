import React from 'react'

function Cost(){
    return(
        <div className="cost">
            <div className="contentcost">
                <div className='row'>
                    <div className="col s12">
                        <div className="row">
                            <div className="col s12 m6">
                            <ul class="collapsible">
                                <li>
                                    <div class="collapsible-header"><i class="material-icons">attach_money</i>Sesuaikan Budget</div>
                                    <div class="collapsible-body">
                                    <div class="input-field">
                                    <span className="titleCost">Jumlah Orang</span>
                                    <select>
                                        <option value="" disabled selected>Berangkat Berapa Orang?</option>
                                        <option value="1">2</option>
                                        <option value="2">3-7</option>
                                        <option value="3">7-15</option>
                                        <option value="3">16-24</option>
                                        <option value="3">25++</option>
                                    </select>
                                </div>
                                <div class="input-field">
                                    <span className="titleCost">Jenis Penginapan</span>
                                    <select>
                                        <option value="" disabled selected>Mau penginapan yang gimana?</option>
                                        <option value="1">Hotel</option>
                                        <option value="2">Homestay</option>
                                        <option value="3">Hostel</option>
                                    </select>
                                </div>
                                <div class="input-field">
                                    <span className="titleCost">Lama Trip</span>
                                    <select>
                                        <option value="" disabled selected>Mau nge-trip berapa lama?</option>
                                        <option value="1">1 Hari</option>
                                        <option value="2">3 Hari 2 Malam</option>
                                        <option value="3">4 Hari 3 Malam</option>
                                    </select>
                                </div>
                                <div class="input-field">
                                    <span className="titleCost">Transport</span>
                                    <select>
                                        <option value="" disabled selected>Mau sewa tranport berapa lama?</option>
                                        <option value="1">1 Hari</option>
                                        <option value="2">3 Hari</option>
                                        <option value="3">4 Hari</option>
                                    </select>
                                </div>
                                <div class="input-field ">
                                    <span className="titleCost">Tour Guide</span>
                                    <select>
                                        <option value="" disabled selected>Mau pakai jasa Tour Guide berapa lama?</option>
                                        <option value="1">1 Hari</option>
                                        <option value="2">3 Hari</option>
                                        <option value="3">4 Hari</option>
                                    </select>
                                </div>
                                <p>Total Biaya: </p><span className="keyword">IDR 500.000</span>
                                    </div>
                                </li>

                            
                            </ul>
                                    
                            </div>
                            <div className="col s12 m6 ">
                            <ul class="collapsible">
                                <li>
                                    <div class="collapsible-header"><i class="material-icons">airplanemode_active</i>Paket Nge-trip</div>
                                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                            </ul>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cost