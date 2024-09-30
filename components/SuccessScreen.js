import React from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

//A success screen that pops up on successful completion
const SuccessScreen = () => {
  return (
    <SafeAreaView>
      <View style = {{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Image source={require('../assets/images/success.png')} style={{width: 200, height: 200, borderRadius: 100}}/>
        <Text>Successful!</Text>
      </View>
    </SafeAreaView>
  )
}

export default SuccessScreen