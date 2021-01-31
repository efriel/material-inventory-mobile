import React from 'react';
import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MisNavigator from './navigation/MisNavigator';

const App = () => {
  return (    
    /*<View>
      <Text>Welcome to MIS folks</Text>
    </View>    
    */
   <SafeAreaProvider>     
      <MisNavigator />               
   </SafeAreaProvider>
  );
};

export default App;
