import React from 'react'
import { TabNavigator, StackNavigator, } from 'react-navigation'
import RoomList from '../components/RoomList'
import SceneList from '../components/SceneList'
import Panels from '../components/Panels'
import Store from '../components/Store'
import NavTestingComponent from '../components/NavTestingComponent'
import News from '../components/News'


export const MainMenuTabNav = TabNavigator({
    RoomList: { screen: RoomList },
    Store: { screen: Store },
    News: { screen: News },
  }, {
      tabBarPosition: 'bottom',
      tabBarOptions: {
          labelStyle: {
            fontSize: 20,
          },
          activeTintColor: 'orange',
          inactiveTintColor: 'black',
          style: {
            backgroundColor: '#AEFAFF',
          },
      }
  })

  export const RoomListNav = StackNavigator(
    {
      RoomList: { screen: MainMenuTabNav,  header: null, navigationOptions: { header: null }    },
      SceneList: { screen: SceneList },
      Panels: { screen: Panels },
      NavTestingComponent: { screen: NavTestingComponent },
    }
  )
