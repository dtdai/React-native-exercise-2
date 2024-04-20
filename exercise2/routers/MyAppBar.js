import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CustomNavBar from '../components/CustomNavbar'

const Stack = createStackNavigator()

const MyAppBar = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ header: (props) => <CustomNavBar {...props} />}}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}
export default MyAppBar