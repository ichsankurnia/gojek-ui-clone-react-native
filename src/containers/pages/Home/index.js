import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import SearchBar from '../../../components/molecules/SearchFeature';
import HomeGopay from '../../../containers/organisms/HomeGopayFeature';
import HomeMain from '../../../containers/organisms/HomeMainFeature';
import GoNews from '../../../components/molecules/GoNews';
import InternalInfo from '../../../components/molecules/InternalInformation';
import Banner from '../../../components/molecules/GoBanner';
import ScrollHorizontal from '../../../containers/organisms/ScrollableProduct';
import HomeBotNav from '../../../containers/organisms/HomeBottomNavigation';

class Home extends Component {
    render() {
        return (
            <View style={{flex:1}}>

                {/* Search Bar */}
                <SearchBar />

                <ScrollView style={{backgroundColor:'#FFF', flex:1}}>
                {/* Gopay Feature */}
                    <HomeGopay />
                    {/* Main Feature */}
                    <HomeMain />
                    {/*  */}
                    <View style={{height:17, backgroundColor:'#F2F2F4', marginTop:20 }}></View>
                    {/* News Section GO-NEWS*/}
                    <GoNews onPress={() => this.props.navigation.navigate('NewsDetail')} img={require('../../../assets/dummy/sepak-bola.jpg')} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod kkjbkjbj' />
                    {/* Internal Information Center */}
                    <InternalInfo />
                    {/* GO-FOOD Banner Section */}
                    <Banner img={require('../../../assets/dummy/food-banner.jpg')} logo={require('../../../assets/logo/go-food.png')} title='Free GO-FOOD voucher' description='Lorem ipsum dolor sit amet' btn='GET VOUCHER' />
                    {/* Go-Food Horizontal Scroll */}
                    <ScrollHorizontal title='Nearby Restaurant' img={require('../../../assets/logo/go-food.png')} />
                </ScrollView>

                {/* Bottom Navigation */}
                <HomeBotNav />

            </View>
        )
    }
}

export default Home;

// () => alert('Horee')}        => Alert
