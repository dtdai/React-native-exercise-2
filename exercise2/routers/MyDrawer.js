import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CustomDrawerNav from '../components/CustomDrawerNav'

const Drawer = createDrawerNavigator()
const MyDrawer = () => {
  return(
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerNav {...props} />}
    >
      <Drawer.Screen name='Home' component={HomeScreen}/>
      <Drawer.Screen name='Profile' component={ProfileScreen}/>
    </Drawer.Navigator>
  )
}

export default MyDrawer