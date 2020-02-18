import React from 'react';
import {
    WiDirectionDown,
    WiDirectionDownLeft,
    WiDirectionLeft,
    WiDirectionUpLeft,
    WiDirectionUp,
    WiDirectionUpRight,
    WiDirectionRight,
    WiDirectionDownRight,
    WiNA,
} from "weather-icons-react";

export const WindDirection = (prop) => {
    const size = 40;
    switch (true) {
        case prop.deg > 337.5 || prop.deg < 22.5:
            return <WiDirectionDown size={size}/>;
        case prop.deg > 22.5 || prop.deg < 67.5:
            return <WiDirectionDownLeft size={size}/>;
        case prop.deg > 67.5 || prop.deg < 112.5:
            return <WiDirectionLeft size={size}/>;
        case prop.deg > 112.5 || prop.deg < 157.5:
            return <WiDirectionUpLeft size={size}/>;
        case prop.deg > 157.5 || prop.deg < 202.5:
            return <WiDirectionUp size={size}/>;
        case prop.deg > 202.5 || prop.deg < 247.5:
            return <WiDirectionUpRight size={size}/>;
        case prop.deg > 247.5 || prop.deg < 292.5:
            return <WiDirectionRight size={size}/>;
        case prop.deg > 292.5 || prop.deg < 337.5:
            return <WiDirectionDownRight size={size}/>;
        default: {
            return <WiNA/>;
        }
    }
};
