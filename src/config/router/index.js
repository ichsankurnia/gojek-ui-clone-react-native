import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, NewsDetail, Orders, OrderDetail, ScanQRCode, ScanQRDetail, Help, Inbox, Account } from '../../containers/pages';

const HomeStack = createStackNavigator(
    {
        Home,
        NewsDetail,
        ScanQRCode,
        ScanQRDetail,        
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
        OrderStack,
        Help,
        Inbox,
        Account
    },
    {
        headerMode: 'none',
        initialRouteName: 'HomeStack'
    }
);
  
export default createAppContainer(Router);