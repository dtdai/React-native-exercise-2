import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MyStack from './routers/MyStack'
import MyDrawer from './routers/MyDrawer'
import MyAppBar from './routers/MyAppBar'
import CustomBottomNavigation from './components/CustomBottomNavigation'

export default function Exercise2() {
  const Tab = createMaterialTopTabNavigator()
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider>
          <Tab.Navigator>
            <Tab.Screen name='Stack' component={MyStack} />
            <Tab.Screen name='Drawer' component={MyDrawer} />
            <Tab.Screen name='AppBar' component={MyAppBar} />
            <Tab.Screen name='BottomTab' component={CustomBottomNavigation} />
          </Tab.Navigator>
        </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}