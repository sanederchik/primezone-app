const getPlaceImageHref = (text, fillColor) => {

    const _ = `data:image/svg+xml;base64,` + 
            window.btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="210" height="205">
            <g>
                <polygon fill="${fillColor}" points="148.2962913144534,112.94095225512604 135.35533905932738,135.35533905932738 112.94095225512605,148.2962913144534 87.05904774487396,148.2962913144534 64.64466094067262,135.35533905932738 51.70370868554659,112.94095225512604 51.70370868554659,87.05904774487396 64.64466094067262,64.64466094067262 87.05904774487392,51.703708685546594 112.940952255126,51.70370868554658 135.35533905932738,64.64466094067262 148.2962913144534,87.05904774487392" />
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="2em" fill="white" >${text}</text>
            </g>
        </svg>`)
    return _

}

export default getPlaceImageHref