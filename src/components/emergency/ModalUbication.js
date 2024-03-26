import React from 'react'
import MapContainer from '../layouts/MapContainer'
import crash from '../../assets/images/crash.jpg'


function ModalUbication(){
	return(
		<div className = "row">
			<div className = "col-md-6 col-12">
				<div className = "card" style = {{height : '75vh'}}>
					<MapContainer></MapContainer>
				</div>
			</div>
			<div className = "col-md-6 col-12">
				<div className = "card" style = {{height : '75vh', maxHeight : '75vh', overflowY : 'auto', overflowX : 'hidden'}}>
				<p className = " bg-style">Descripción  :</p>
				<p className = "pl-3">Se estrelló un carro cerca la cra. 75</p>
					<div className = "row">
						<div className = "col-md-6" >
							<img src={crash} alt="foto"  style = {{height : '250px', width : '250px', borderRadius : '20px', padding : '1rem'}}/>
						</div>
						<div className = "col-md-6" >
							<img src={crash} alt="foto"  style = {{height : '250px', width : '250px', borderRadius : '20px', padding : '1rem'}}/>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default ModalUbication