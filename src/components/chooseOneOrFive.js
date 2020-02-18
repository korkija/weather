import React from 'react';
import {Link} from "react-router-dom";
import '../styles/index.css';

function ChooseOneOrFive() {
    return (
        <div className="App">
            <header className="App-header">
                <div className='flex-container row'>
                    <div>
                        <Link to="/oneday">
                            <button className='button-choose'>Weather for day</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/fivedays">
                            <button className='button-choose'>Weather for 5 days</button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default ChooseOneOrFive;
