import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MenuScreen from '../screens/Menu/Menu'
import MasterPartsScreen from '../screens/Master/Parts'
import MasterGoodsScreen from '../screens/Master/Goods'
import PurchaseRequestScreen from '../screens/Purchase/Request'
import PurchaseQuotationScreen from '../screens/Purchase/Quotation'
import PurchaseInvoiceScreen from '../screens/Purchase/Invoice'
import PurchaseReceiptScreen from '../screens/Purchase/Receipt'

const MisNavigator = createStackNavigator({
    Menu: {screen: MenuScreen},
    MasterParts: {screen: MasterPartsScreen},
    MasterGoods: {screen: MasterGoodsScreen},
    PurchaseRequest: {screen: PurchaseRequestScreen},
    PurchaseQuotation: {screen: PurchaseQuotationScreen},
    PurchaseInvoice: {screen: PurchaseInvoiceScreen},
    PurchaseReceipt: {screen: PurchaseReceiptScreen}
})

export default createAppContainer(MisNavigator);