import React from 'react'
import Info from './info'
import Cost from './cost'
import './style.css'
function Details(){
    return(
        <div className="details">
            <div className="row">

                <div className="firstsec">
                    <div className="col s12 m12">
                        <h4>Labuan Bajo : Cultural Trip Indonesia Timur</h4>
                        <iframe title="promo_vid" className="video" width="560" height="315" src="https://www.youtube.com/embed/RaTWq98hzF0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                    </div>
                </div>

                <div className="secondsec">
                    <Cost/>
                    <Info/>
                    
                </div>
            </div>
        </div>
    )
}

export default Details