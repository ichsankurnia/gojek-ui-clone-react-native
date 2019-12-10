import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, NewsDetail, Orders, OrderDetail, ScanQRCode } from '../../containers/pages';

const HomeStack = createStackNavigator(
    {
        Home,
        NewsDetail,
        ScanQRCode,        
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)

const OrderStack = createStackNavigator(
    {
        Orders,
        OrderDetail,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Orders'
    }
)

// Switch Naviagator tidak bisa balik dengan tombol back setelah berpindah kehalamn selanjutnya
const Router = createSwitchNavigator(
    {
        HomeStack,
        OrderStack
        
    },
    {
        headerMode: 'none',
        initialRouteName: 'HomeStack'
    }
);
  
export default createAppContainer(Router);