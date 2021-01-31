import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView} from 'react-native';

import CardMenuList from '../../components/Cards'

const MenuScreen = props => {    
    return ( 
        <ScrollView>
        <CardMenuList navigation={props.navigation}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MenuScreen;