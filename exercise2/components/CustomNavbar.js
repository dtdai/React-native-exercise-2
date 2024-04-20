import React from "react"
import { Appbar, Menu } from 'react-native-paper'
import { getHeaderTitle } from '@react-navigation/elements'

const CustomDrawerNav = ({
  navigation,
  route,
  options,
  back
}) => {
  const [visible, setVisible] = React.useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)
  const { disabled } = false

  const title = getHeaderTitle(options, route.name)
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon='dots-vertical'
              onPress={openMenu}
            />
          }>
          <Menu.Item
            onPress={() => {
              console.log('OK')
            }}
            title='Home'
          />
          <Menu.Item
            onPress={() => {
              navigation.navigate('Profile')
            }}
            title='Profile'
          />
          <Menu.Item
            onPress={() => {
              console.log('OK')
            }}
            title='3'
            disabled
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  )
}

export default CustomDrawerNav