import React, { useState, useEffect, useRef } from "react";
import { YMaps, Map } from 'react-yandex-maps';
import Place from "../Place";
import UserPosition from '../UserPosition'
import UserPositionButton from "../UserPositionButton";

import useOffsetMetrics from "../../hocs/useOffsetMetrics";

const defaultGeoLoc = [55.756658, 37.614037]
const defaultZoom = 10


const YandexMap = () => { 

    const YMap = useRef(null)
    const [geoLoc, setGeoLoc] = useState(defaultGeoLoc)
    const [data, setData] = useState(null)

    const offsetMetrics = useOffsetMetrics()

    const fetchData = async (link) => {
        try {
          const _data = await fetch(link);
          if (_data) {
            const _ = await _data.json()
            setData(_);
          }
        } catch(error) {
          console.log(error);
        }
      }

    useEffect( () => {

        let watchId;

        if ("geolocation" in navigator){
            watchId = navigator.geolocation.watchPosition( (position) => {
                setGeoLoc([position.coords.latitude, position.coords.longitude])
              });
        }

        return () => navigator.geolocation.clearWatch(watchId);
    }, [])

    //грузим data файл
    useEffect( () => {
       const _link = process.env.PUBLIC_URL + '/data/data.json'
       fetchData(_link)
    }, [])

    const geolocControlClickHandler = () => {
        YMap.current.setCenter(geoLoc, YMap.current.getZoom())
    }

    return (
        <YMaps>
            <div className = "map">
                <Map         
                    instanceRef={YMap}            
                    width="100%"
                    height="500px"
                    defaultState={{ 
                        center: defaultGeoLoc, 
                        zoom: defaultZoom,
                        }} >
                    <UserPosition coords={geoLoc} />
                    {data && data.map( (point) => {
                        return (
                        <Place {...point} balloonSettings={offsetMetrics} key={point.sale_add_info_url + '_' + JSON.stringify(point.coords)} />
                        )
                        }
                    )}

                    <UserPositionButton callback={geolocControlClickHandler} />
                
                </Map>
            </div>
        </YMaps>
    )
}

export default YandexMap