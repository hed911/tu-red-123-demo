import React from 'react'
import MapContainer from '../layouts/MapContainer'

function IndexMap(){
return(
<div className = "row">
	<div className = "col-md-12">
		<div className = "card" style = {{height : '95vh'}}>
			<MapContainer></MapContainer>
		</div>
	</div>
</div>
	)
}

export default IndexMap