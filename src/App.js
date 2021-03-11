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
                <Footer>Footer ©3022© by hand</Footer>
                <Router history={history}>
                    <Content style={{padding: '0 50px', marginTop: 64}}>
                        <div style={{background: '#eee', padding: 24, minHeight: 380}}>
                            <Main/>
                        </div>
                    </Content>
                </Router>
                <Footer>Hello world ©3022© Created by hand</Footer>
            </Layout>
        </Provider>
    );
}

export default App;
