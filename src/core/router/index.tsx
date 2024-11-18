import React from 'react';
import { StackParamList } from './StackParamList';
import { createStackNavigator } from '@react-navigation/stack';
import { TransactionModuleRouter } from '@ModuleTransaction/router/index';

export interface RouteModule<T> {
    screenName: T;
    screen: any;
    screenTitle?: string;
  }

const Stack = createStackNavigator<StackParamList>();

const ModuleScreen: RouteModule<any>[] = [
    ...TransactionModuleRouter,
  ];


export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
            }}
            initialRouteName="ListTransaction"
            >
           {
            ModuleScreen.map((screen, index) => (
            <Stack.Screen key={index} name={screen.screenName} component={screen.screen}
                options={{
                    animation : 'slide_from_right',
                    headerTitle : screen.screenTitle,
                }}
            />
            ))
           }
        </Stack.Navigator>
    );
};
