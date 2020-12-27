
import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import {statesStore} from "./redux/store";

const RootPoint = () => (
    <Provider store={statesStore}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => RootPoint);