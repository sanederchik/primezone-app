import React, { useEffect, useState } from "react";
import { Placemark } from 'react-yandex-maps';
import getPlaceImageHref from "../PlaceImage";

import '../../static/css/place.scss';

const fillColors = {
    10: '#D27070',
    20: '#D7B96E',
    100: '#8BC540'
}


const Place = (props) => {

    const [fillColor, setFillColor] = useState(0)


    useEffect( () => {
        
        for( const [bound, color] of Object.entries(fillColors)){
            if(parseInt(props.sale_perc || 0) < bound){
                setFillColor(color)
                break
            }
        }
    }, [props.sale_perc])

    return (
    <Placemark
            geometry={[props.coords[1], props.coords[0]]}
            modules={["geoObject.addon.hint", "geoObject.addon.balloon"]}
            properties={{
                balloonContentHeader: `<a class = "place place__link" target="_blank" href = "${props.sale_add_info_url}">${props.org_name}</a><br><div class="place place__desc">${props.sale_desc}</div>`,
                // Зададим содержимое основной части балуна.
                balloonContentBody: `<img class = "place__image" src="https://${props.host}${props.org_img_url}">`,
                // Зададим содержимое всплывающей подсказки.
                // hintContent: props.address_txt,
                openBalloonOnClick: true
            }}
            options={{
                iconLayout: 'default#image',
                iconImageHref: getPlaceImageHref( (props.sale_perc || '0') + '%', fillColor),
                iconImageSize: [50, 50],
                iconImageOffset: [-16, -16],

                balloonMaxWidth: props.balloonSettings['offsetWidth'] * 0.3,
                balloonMaxHeight: props.balloonSettings['offsetHeight'] * 0.5
            }}>
    </Placemark>
    )
}

export default Place