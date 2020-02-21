import React from "react";
const IconSpade = props => {
    const { color } = props;
    let c = `#2A9EC5`;
    if (color) {
        c = color;
    }
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 512 512" >
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="99.4298986%" id="linearGradient-1">
                        <stop stopColor="#DDC73F" offset="0%"></stop>
                        <stop stopColor="#DAC22C" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="99.4298986%" id="linearGradient-2">
                        <stop stopColor="#2A9EC5" offset="0%"></stop>
                        <stop stopColor="#2190B6" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g fillRule="nonzero">
                        <g>
                            <g fill="#854D4D">
                                <path d="M146.141456,-5.90428975e-15 L365.858544,-5.90428975e-15 C416.675112,-5.90428975e-15 435.102427,5.29105984 453.680205,15.2265641 C472.257983,25.1620684 486.837932,39.7420171 496.773436,58.3197949 C506.70894,76.8975727 512,95.3248882 512,146.141456 L512,365.858544 C512,416.675112 506.70894,435.102427 496.773436,453.680205 C486.837932,472.257983 472.257983,486.837932 453.680205,496.773436 C435.102427,506.70894 416.675112,512 365.858544,512 L146.141456,512 C95.3248882,512 76.8975727,506.70894 58.3197949,496.773436 C39.7420171,486.837932 25.1620684,472.257983 15.2265641,453.680205 C5.29105984,435.102427 -3.93619317e-15,416.675112 -3.93619317e-15,365.858544 L-3.93619317e-15,146.141456 C-3.93619317e-15,95.3248882 5.29105984,76.8975727 15.2265641,58.3197949 C25.1620684,39.7420171 39.7420171,25.1620684 58.3197949,15.2265641 C76.8975727,5.29105984 95.3248882,-5.90428975e-15 146.141456,-5.90428975e-15 Z" ></path>
                            </g>
                            <g fill="url(#linearGradient-1)">
                                <path d="M146.141456,-5.90428975e-15 L365.858544,-5.90428975e-15 C416.675112,-5.90428975e-15 435.102427,5.29105984 453.680205,15.2265641 C472.257983,25.1620684 486.837932,39.7420171 496.773436,58.3197949 C506.70894,76.8975727 512,95.3248882 512,146.141456 L512,365.858544 C512,416.675112 506.70894,435.102427 496.773436,453.680205 C486.837932,472.257983 472.257983,486.837932 453.680205,496.773436 C435.102427,506.70894 416.675112,512 365.858544,512 L146.141456,512 C95.3248882,512 76.8975727,506.70894 58.3197949,496.773436 C39.7420171,486.837932 25.1620684,472.257983 15.2265641,453.680205 C5.29105984,435.102427 -3.93619317e-15,416.675112 -3.93619317e-15,365.858544 L-3.93619317e-15,146.141456 C-3.93619317e-15,95.3248882 5.29105984,76.8975727 15.2265641,58.3197949 C25.1620684,39.7420171 39.7420171,25.1620684 58.3197949,15.2265641 C76.8975727,5.29105984 95.3248882,-5.90428975e-15 146.141456,-5.90428975e-15 Z"></path>
                            </g>
                        </g>
                        <g>
                            <g fill="#854D4D">
                                <path d="M146.141456,-5.90428975e-15 L365.858544,-5.90428975e-15 C416.675112,-5.90428975e-15 435.102427,5.29105984 453.680205,15.2265641 C472.257983,25.1620684 486.837932,39.7420171 496.773436,58.3197949 C506.70894,76.8975727 512,95.3248882 512,146.141456 L512,365.858544 C512,416.675112 506.70894,435.102427 496.773436,453.680205 C486.837932,472.257983 472.257983,486.837932 453.680205,496.773436 C435.102427,506.70894 416.675112,512 365.858544,512 L146.141456,512 C95.3248882,512 76.8975727,506.70894 58.3197949,496.773436 C39.7420171,486.837932 25.1620684,472.257983 15.2265641,453.680205 C5.29105984,435.102427 -3.93619317e-15,416.675112 -3.93619317e-15,365.858544 L-3.93619317e-15,146.141456 C-3.93619317e-15,95.3248882 5.29105984,76.8975727 15.2265641,58.3197949 C25.1620684,39.7420171 39.7420171,25.1620684 58.3197949,15.2265641 C76.8975727,5.29105984 95.3248882,-5.90428975e-15 146.141456,-5.90428975e-15 Z" id="path-4"></path>
                            </g>
                            <g fill="url(#linearGradient-2)">
                                <path d="M146.141456,-5.90428975e-15 L365.858544,-5.90428975e-15 C416.675112,-5.90428975e-15 435.102427,5.29105984 453.680205,15.2265641 C472.257983,25.1620684 486.837932,39.7420171 496.773436,58.3197949 C506.70894,76.8975727 512,95.3248882 512,146.141456 L512,365.858544 C512,416.675112 506.70894,435.102427 496.773436,453.680205 C486.837932,472.257983 472.257983,486.837932 453.680205,496.773436 C435.102427,506.70894 416.675112,512 365.858544,512 L146.141456,512 C95.3248882,512 76.8975727,506.70894 58.3197949,496.773436 C39.7420171,486.837932 25.1620684,472.257983 15.2265641,453.680205 C5.29105984,435.102427 -3.93619317e-15,416.675112 -3.93619317e-15,365.858544 L-3.93619317e-15,146.141456 C-3.93619317e-15,95.3248882 5.29105984,76.8975727 15.2265641,58.3197949 C25.1620684,39.7420171 39.7420171,25.1620684 58.3197949,15.2265641 C76.8975727,5.29105984 95.3248882,-5.90428975e-15 146.141456,-5.90428975e-15 Z"></path>
                            </g>
                        </g>
                        <path d="M256.264337,467 C255.276921,466.344309 254.579922,465.997178 253.427938,465.254704 C179.894534,418.488476 94.1346058,327.260583 85.3446729,213.536689 C81.1433174,159.442145 115.877105,121.990593 160.785143,121.170978 C189.44923,120.659925 212.498603,130.794214 224.976822,150.175682 C235.354364,166.288335 237.997152,191.127469 239.681567,179.652869 C245.731906,135.866181 227.338875,93.7765757 217.367916,57 C228.471498,61.0209313 242.42116,63.0458608 256.419225,63.0940734 L256.641878,63.0940734 C270.610901,63.0458608 284.531522,61.0209313 295.625424,57 C285.683506,93.7765757 267.309836,135.866181 273.340814,179.652869 C275.015548,191.127469 277.668017,166.288335 288.026198,150.175682 C300.485056,130.794214 323.55379,120.659925 352.198516,121.170978 C397.106554,121.990593 431.840341,159.442145 427.658347,213.536689 C418.868414,327.260583 333.079444,418.488476 259.633166,465.254704 C258.82,465.842897 258.11332,466.218956 256.961336,467 L256.264337,467 Z" fill="#FFFFFF"></path>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    )
};
export default IconSpade;
