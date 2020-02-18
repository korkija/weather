import React from 'react';
import {
    WiWindBeaufort0,
    WiWindBeaufort1,
    WiWindBeaufort2,
    WiWindBeaufort3,
    WiWindBeaufort4,
    WiWindBeaufort5,
    WiWindBeaufort6,
    WiWindBeaufort7,
    WiWindBeaufort8,
    WiWindBeaufort9,
    WiWindBeaufort10,
    WiWindBeaufort11,
    WiWindBeaufort12,
    WiTornado,
} from "weather-icons-react";


export const WindIcon = (prop) => {
    const size = 40;
    switch (Math.round(prop.speed)) {
        case 0:
            return <WiWindBeaufort0 size={size}/>;
        case 1:
            return <WiWindBeaufort1 size={size}/>;
        case 2:
            return <WiWindBeaufort2 size={size}/>;
        case 3:
            return <WiWindBeaufort3 size={size}/>;
        case 4:
            return <WiWindBeaufort4 size={size}/>;
        case 5:
            return <WiWindBeaufort5 size={size}/>;
        case 6:
            return <WiWindBeaufort6 size={size}/>;
        case 7:
            return <WiWindBeaufort7 size={size}/>;
        case 8:
            return <WiWindBeaufort8 size={size}/>;
        case 9:
            return <WiWindBeaufort9 size={size}/>;
        case 10:
            return <WiWindBeaufort10 size={size}/>;
        case 11:
            return <WiWindBeaufort11 size={size}/>;
        case 12:
            return <WiWindBeaufort12 size={size}/>;

        default: {
            return <WiTornado/>;
        }
    }


};
