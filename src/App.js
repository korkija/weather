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
                <Footer>1 Hello world ©201r8© Created by hand</Footer>
                <Footer>2 Hello world ©2r019© Created by hand</Footer>
                <Footer>3 Hello worrld ©2020© 777 by hand</Footer>
                <Footer>4 Hello 55r5 ©2021© Created by hand</Footer>
                <Footer>5 Hello world ©20r20© Created by hand</Footer>
                <Footer>6 Hellro world ©2021© Createrd by hand</Footer>
                <Footer>1 He1llo world ©2018© Created by hand</Footer>
                <Footer>2 Hello world ©20019© Created by hand</Footer>
                <Footer>3 Hello world ©2020© 7777 by hand</Footer>
                <Footer>4 Hello 555 ©2021© Created by hand</Footer>
                <Footer>5 Hel1lo world ©2020© Created by hand</Footer>
                <Footer>6 Hello world ©20211© Created by hand</Footer>
            </Layout>
        </Provider>
    );
}

export default App;
