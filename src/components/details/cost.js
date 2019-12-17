import React,{useState,useEffect} from 'react'

function Cost(){
    const [person,setPerson]= useState('')
    const [hotel,setHotel]= useState('')
    const [day,setDay]= useState('')
    const [transport,setTransport]= useState('')
    const [guide,setGuide]= useState('')
    var tranportCost;
    var hotelCost;
    var GuideCost=100000
   console.log(person)
   console.log(hotel)
   console.log(day)
   console.log(transport)

   const total=()=>{
        if(hotel==1){
            hotelCost=500000
        }else if(hotel==2){
            hotelCost=350000
        }else if(hotel==3){
            hotelCost=150000
        }

        if(person==1){
            tranportCost=150000
        }else if(person ==2){
            tranportCost=75000
        }else if(person == 3){
            tranportCost=50000
        }else if(person == 4){
            tranportCost=30000
        }else {
            tranportCost=25000
        }

        
        return (
            (tranportCost+hotelCost+GuideCost*day)
        )
   }
    return(
        
        <div className="cost">
            <div id="modal1" class="modal">
                <div class="modal-content">
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
                <div class="modal-footer">
                    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
            <div className="contentcost">
                <div className='row'>
                    <div className="col s12">
                        <div className="row">
                            <div className="col s12 m12">
                            <ul class="collapsible">
                                <li>
                                <div class="collapsible-header"><i class="material-icons">warning</i><span className="keyword">Syarat dan Ketentuan</span></div>
                                    <div class="collapsible-body">
                                    <p>kontent</p>
                                    </div>
                                    </li>
                                    <li>
                                    <div class="collapsible-header"><i class="material-icons">settings</i><span className="keyword">Atur Perjalanan</span></div>
                                    <div class="collapsible-body">
                                    <span className="keyword">Tanggal Keberangkatan</span>
                                    <input type="text" class="datepicker"placeholder="cuss tanggal berapa ?"/>
                                    <div class="input-field">
                                    <span className="titleCost">Jumlah Orang</span>
                                    <select id="Person" onChange={e=>setPerson(e.target.value)}>
                                        <option value="" disabled selected >Berangkat Berapa Orang?</option>
                                        <option value="1">2</option>
                                        <option value="2">3-7</option>
                                        <option value="3">7-15</option>
                                        <option value="4">16-24</option>
                                        <option value="5">25++</option>
                                    </select>
                                </div>
                                <div class="input-field">
                                    <span className="titleCost">Jenis Penginapan</span>
                                    <select onChange={e=>setHotel(e.target.value)}>
                                        <option value="" disabled selected>Mau penginapan yang gimana?</option>
                                        <option value="1">Hotel</option>
                                        <option value="2">Homestay</option>
                                        <option value="3">Hostel</option>
                                    </select>
                                </div>
                                <div class="input-field">
                                    <span className="titleCost">Lama Trip</span>
                                    <select onChange={e=>setDay(e.target.value)}>
                                        <option value="" disabled selected>Mau nge-trip berapa lama?</option>
                                        <option value="1">1 Hari</option>
                                        <option value="3">3 Hari 2 Malam</option>
                                        <option value="4">4 Hari 3 Malam</option>
                                    </select>
                                </div>
              
     
                                <p>Total Biaya: </p><span className="keyword">{total()}</span>/ orang
                                    </div>
                                </li>
                                <li>
                                <div class="collapsible-header"><i class="material-icons">airplanemode_active</i><span className="keyword">Form Booking</span></div>
                                <div class="collapsible-body">
                                <div className="">
                                     
                                    <div class="row">
                                        <form class="" action="#">
                                        <div class="row">
                                            <div class="input-field ">
                                            <input id="nama" type="text" class="validate"/>
                                            <label for="nama">Nama Lengkap</label>
                                            </div>
                                        </div>
                                    
                                        <div class="row">
                                            <div class="input-field ">
                                            <input id="password" type="text" class="validate"/>
                                            <label for="password">Nomor Handphone</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field ">
                                            <input id="email" type="email" class="validate"/>
                                            <label for="email">Email</label>
                                            </div>
                                        </div>
                                        <button class="waves-effect waves-light btn orange modal-trigger"  href="#modal1" type="submit">Cusss !</button>
                                        </form>
                                    </div>

                                </div>
                                </div>
                                
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