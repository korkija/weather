import React from 'react';
import 'antd/dist/antd.css';
import '../styles/index.css';
import {connect} from "react-redux";
import {getWeatherForFiveDays} from '../actions/weatherAction'
import ItemWeather from "./ItemWeather";
import {history} from "../App";

class FiveDays extends React.Component {

    componentDidMount() {
        this.props.getWeatherForFiveDays();
    }

    render() {
        const isLoadingFiveDays = this.props.isLoadingFiveDays;
        const typeDateDate = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return (
            isLoadingFiveDays
                ? <div>Loading</div>
                :
                this.props.weatherForSeveralDays[0]
                    ?
                    <div>
                        <button className={"button-choose"} onClick={history.goBack}>Back</button>
                        <div className='scroll'>
                            {this.props.weatherForSeveralDays.map((item, index, array) => (
                                <div key={item.dt}>
                                    {((index === 0) ||
                                        (new Date(array[index - 1].dt * 1000).toLocaleString('ru', typeDateDate) !==
                                            (new Date(item.dt * 1000).toLocaleString('ru', typeDateDate)))) &&
                                    <div>{new Date(item.dt * 1000).toLocaleString('ru', typeDateDate)}</div>}
                                    <ItemWeather key={item.dt} props={item}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    : <div>Doesn't have information!</div>
                    // : <div>Doesn't have information!</div>
        )
    };
}

const mapStateToProps = (state) => ({
    isLoadingFiveDays: state.weather.isLoadingFiveDays,
    weatherForSeveralDays: state.weather.weatherForSeveralDays
});

const mapDispatchToProps = {
    getWeatherForFiveDays,
};
export const
    FiveDaysContainer = connect(
        mapStateToProps,
        mapDispatchToProps
    )(FiveDays);


