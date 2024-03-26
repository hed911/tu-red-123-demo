import React, {useState} from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
import alarmicon from '../../assets/images/alarmicon.png'

function MapContainer(props){

	 const mapStyles = {
        width: '100%%',
        height: '100%',
    };
	return(
		<Map
          google={props.google}
          zoom={13}
          style={mapStyles}
          initialCenter={{ lat:  11.0041072, lng: -74.8069813}}

        >
            <Marker
            name={'Ambulancia'}
            position={{lat: 10.985900, lng: -74.817377}}
            icon={{
              url: alarmicon,
                anchor: new props.google.maps.Point(10,10),
                scaledSize: new props.google.maps.Size(30,30)
            }}
            />
             <Marker
            name={'Ambulancia'}
            position={{lat: 11.010503, lng: -74.821668}}
            icon={{
              url: alarmicon,
                anchor: new props.google.maps.Point(10,10),
                scaledSize: new props.google.maps.Size(30,30)
            }}
            />
            <Marker
            name={'Ambulancia'}
            position={{lat: 11.010503, lng: -74.797464}}
            icon={{
              url: alarmicon,
                anchor: new props.google.maps.Point(10,10),
                scaledSize: new props.google.maps.Size(30,30)
            }}
            />
        </Map>
		)
}

export default GoogleApiWrapper()(MapContainer);
