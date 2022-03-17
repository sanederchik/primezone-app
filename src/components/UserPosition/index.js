import React from "react";
import { Placemark } from 'react-yandex-maps';
import me from '../../static/media/me.svg'

const UserPosition = (props) => {
    return (
        <Placemark
            geometry={[props.coords[0], props.coords[1]]}
            options={{
                iconLayout: 'default#image',
                iconImageHref: me,
                iconImageSize: [64, 64],
                iconImageOffset: [-16, -16]
            }}>
        </Placemark>
    )
}

export default UserPosition