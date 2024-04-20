import { Drawer } from "react-native-paper";

const CustomDrawerNav = ({ navigation}) => {
  return(
    <Drawer.Section>
      <Drawer.Item label='Home' icon={'home'} onPress={() => navigation.navigate('Home')}/>
      <Drawer.Item label='Profile' icon={'star'} onPress={() => navigation.navigate('Profile')}/>
    </Drawer.Section>
  )
}
export default CustomDrawerNav