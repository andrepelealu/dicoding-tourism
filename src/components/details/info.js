import React from 'react'
import './style.css'
function Info(){
    return(
        <div className="info">
            <div className="">
                <div className='row'>
                    <div className="col s12">
                   
                        <span className="keyword">Informasi Wisata</span> 
                        <p>Nama Lokasi: <span className="keyword">Labuan Bajo | </span>
                        Provinsi: <span className="keyword">Nusa Tenggara Barat | </span>
                        Luas Wilayah: <span className="keyword">131.000 km2 | </span>
                        Oleh-oleh khas: <span className="keyword">Kain Tenun</span></p>
                        <p>Deskripsi: 
                        Labuan Bajo merupakan salah satu desa dari 19 desa dan kelurahan yang berada di kecamatan Komodo, Kabupaten Manggarai Barat, provinsi Nusa Tenggara Timur, Indonesia. Labuan Bajo sebelumnya adalah kelurahan sekaligus ibu kota Kecamatan Komodo dan juga merupakan ibu kota Kabupaten Manggarai Barat, Nusa Tenggara Timur, Indonesia. Sekarang dikembangkan menjadi Kota Labuan Bajo.
                        </p>
                        <div className="image-details">
                            <div className='row'>
                                <div className="col s12 m6 l12">
                                    <img alt="image_detail" className="responsive-img" src="https://media-cdn.tripadvisor.com/media/photo-s/08/83/61/7c/labuan-bajo.jpg"/>
                                </div>
                                <div className="col s12 m6 l12">
                                    <img alt="image_detail" className="responsive-img" src="https://media-cdn.tripadvisor.com/media/photo-s/0e/ec/01/9b/view-from-halfway.jpg"/>
                                </div>
                                <div className="col s12 m6 l12">
                                    <img alt="image_detail" className="responsive-img" src="https://media-cdn.tripadvisor.com/media/photo-s/08/83/61/7c/labuan-bajo.jpg"/>
                                </div>
                        </div> 
                    </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default Info