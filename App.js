import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Router from "./src/Router";
import { navigationRef } from './src/config/RootNavigation';
import { Provider } from "react-redux";
import store from "./src/redux/store";


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Router/>
      </NavigationContainer>
    </Provider>
  )
}

export default App;