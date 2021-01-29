import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';

import Loader from './src/pages/Loader'
import Conta from './src/pages/Conta'
import Pedidos from './src/pages/Pedidos'
import Sobre from './src/pages/Sobre'



import Drawer from './src/components/Drawer'

const Routes = createAppContainer(


  createDrawerNavigator({
    Home: {
      screen: Loader,
      navigationOptions: {
        drawerLabel: () => null
      }
    },
    Conta: {
      screen: Conta,
      navigationOptions: {
        title: 'Minha Conta',
      }
    },
    Pedidos,
    Sobre,
  }, {
    initialRouteName: 'Home',
    contentComponent: Drawer,
  })
);



export default Routes;