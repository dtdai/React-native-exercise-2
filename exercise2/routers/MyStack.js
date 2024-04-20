import { createStackNavigator } from '@react-navigation/stack'
import { Icon } from 'react-native-paper'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createStackNavigator()

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
    >
      <Stack.Screen name='Home' component={HomeScreen}
        options={{
          title: 'Home Screen',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'aqua'
          },
          headerRight: () => <Icon source={'home'} size={40} color='blue' />
        }} />
      <Stack.Screen name='Profile' component={ProfileScreen}
        options={{
          title: 'Profile Screen',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'aqua'
          },
        }} />
    </Stack.Navigator>
  )
}
export default MyStack