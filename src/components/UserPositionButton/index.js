import React from "react";
import { Button } from 'react-yandex-maps';
import geoImg from '../../static/media/geoposition.svg'

const UserPositionButton = (props) => {

    return (
        <Button 
            onClick={() => {props.callback()}} 
            options={{
                selectOnClick: false,
                float: 'left'
            }}
            data={{
                image: geoImg
            }}
        />
    )
}

export default UserPositionButton