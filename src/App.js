import React from 'react';
import {Router} from "react-router-dom";
import {Layout} from 'antd';
import Main from '../src/routs';
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";
import {store} from "./store";

export const history = createBrowserHistory();

const {Content, Footer} = Layout;

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <Router history={history}>
                    <Content style={{padding: '0 50px', marginTop: 64}}>
                        <div style={{background: '#eee', padding: 24, minHeight: 380}}>
                            <Main/>
                        </div>
                    </Content>
                </Router>
                <Footer>1 Hello world ©2018© Created by hand</Footer>
                <Footer>2 Hello world ©2019© Created by hand</Footer>
                <Footer>3 Hello world ©2020© Created by hand</Footer>
                <Footer>4 Hello world ©2021© Created by hand</Footer>
            </Layout>
        </Provider>
    );
}

export default App;
