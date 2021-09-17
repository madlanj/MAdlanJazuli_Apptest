import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Home, Detail, Update, Add} from '../screen';



const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Add Contact" component={Add} />
            <Stack.Screen name="Detail Contact" component={Detail} />
            <Stack.Screen name="Update Contact" component={Update} />
        </Stack.Navigator>
    )
}

export default Router;