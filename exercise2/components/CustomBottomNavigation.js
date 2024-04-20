import { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'

export default function CustomBottomNavigation() {
  const [index, setIndex] = useState(0)
  const [routes] = useState(
    [
      { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
      { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    ]
  )
  const renderScene = BottomNavigation.SceneMap(
    {
      home: HomeScreen,
      profile: ProfileScreen,
    }
  )

  return (
    <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />
  )
}