import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen' 
import Stories1 from './screens/Stories1' 
import Stories2 from './screens/Stories2' 
import Stories3 from './screens/Stories3'
import Stories4 from './screens/Stories4'
import Stories5 from './screens/Stories5'
import Stories6 from './screens/Stories6'
import Stories7 from './screens/Stories7'
import Stories8 from './screens/Stories8' 
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    ); 
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  Stories1 : Stories1,
  Stories2 : Stories2,
  Stories3 : Stories3,
  Stories4 : Stories4,
  Stories5 : Stories5,
  Stories6 : Stories6,
  Stories7 : Stories7,
  Stories8 : Stories8
 })

const AppContainer = createAppContainer(AppNavigator)


