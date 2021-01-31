import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ThemeProvider, Button, Icon } from 'react-native-elements';

const theme = {
    Button: {
        titleStyle: {
            color: 'white',
        },                            
    },
  };

const cardsMenu = [
    {
        name: 'Master Parts',
        avatar: require('../img/nav/parts.jpeg'),
        text: 'Data list Raw Material',
        icon: 'code',
        color: '#d8ae28',
        title: 'Show Master Parts',
        screen: 'MasterParts'
    },
    {
        name: 'Master Goods',
        avatar: require('../img/nav/goods.jpeg'),
        text: 'Data list Finished Good',
        icon: 'code',
        color: '#d8ae28',
        title: 'Show Master Goods',
        screen: 'MasterGoods'
     },
     {
        name: 'RFM: Request for Material',
        avatar: require('../img/nav/purchase-request.jpeg'),
        text: 'Data list purchasing yang sudah direquest',
        icon: 'code',
        color: '#d8ae28',
        title: 'Show Request',
        screen: 'PurchaseRequest'
     },
     {
        name: 'Quotation',
        avatar: require('../img/nav/purchase-quotations.jpg'),
        text: 'Data list purchasing yang sudah ditawarkan',
        icon: 'code',
        color: '#d8ae28',
        title: 'Show Quotation',
        screen: 'PurchaseQuotation'
     },
     {
        name: 'Vendor Invoice',
        avatar: require('../img/nav/purchase-invoice.png'),
        text: 'Data list purchasing yang sudah ditagihkan',
        icon: 'code',
        color: '#d8ae28',
        title: 'Show Invoice',
        screen: 'PurchaseInvoice'
     },
     {
        name: 'Vendor Receipt',
        avatar: require('../img/nav/purchase-receipt.png'),
        text: 'Data list purchasing yang sudah dibayarkan',
        icon: 'code',
        color: '#d8ae28',
        title: 'Show Receipt',
        screen: 'PurchaseReceipt'
     }
   ]


const CardsList = (props) => {    
    return (        
        cardsMenu.map((u, i) =>         
        <Card key={i}>
        <Card.Title>{u.name}</Card.Title>
        <Card.Divider/>
        <Card.Image source={u.avatar}>            
        </Card.Image>
        <Text style={{marginBottom: 10}}>
            {u.text}
            </Text>
            <Button
            icon={<Icon name={u.icon} color={u.color} />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:u.color}}
            title={u.title} 
            onPress={() => {
                props.navigation.navigate(u.screen)
            }} />
        </Card>                        
        )
    );
};

const CardsMenu = (props) => {
  return (        
    <ThemeProvider theme={theme}>   
    <CardsList navigation={props.navigation} />
    </ThemeProvider>
  );
};

export default CardsMenu;