import React from "react";
import {Route, Switch} from "react-router-dom";
import {OneDayContainer} from '../components/oneday';
import {FiveDaysContainer} from '../components/fivedays';
import ChooseOneOrFive from "../components/chooseOneOrFive";

 const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={ChooseOneOrFive}/>
                <Route path="/oneday" component={OneDayContainer}/>
                {/*<Route path="/oneday" component={OneDayContainer}/>*/}
                {/*<Route path="/fivedays" component={FiveDaysContainer}/>*/}
                <Route path="/fivedays" component={FiveDaysContainer}/>
                {/*<Route path="/fivedays" component={FiveDaysContainer}/>*/}
            </Switch>
        </div>

    );
};

 export  default Main;
