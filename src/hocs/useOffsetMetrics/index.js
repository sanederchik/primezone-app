import React, { useState, useEffect } from "react";
import useResizeObserver from '@react-hook/resize-observer'

const defaultProps = {
    'offsetWidth': document.body.offsetWidth,
    'offsetHeight': document.body.offsetHeight,
}

const useOffsetMetrics = () => {

    const [offsetMetrics, setOffsetMetrics] = useState(defaultProps)

    useResizeObserver(document.body, (entry) => {
        setOffsetMetrics({
            'offsetWidth': document.body.offsetWidth,
            'offsetHeight': document.body.offsetHeight,
        })
    })

    return offsetMetrics

}

export default useOffsetMetrics