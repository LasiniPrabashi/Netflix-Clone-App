import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React from 'react'

const LogingScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require('../../../assets/svg/FullLogo.png')}
        />
        <View style={styles.headerOptions}>
          <Text style={styles.headerText}>Help</Text>
          <Text style={styles.headerText}>Privacy</Text>
        </View>
      </View>

      <View style={styles.loginMessageContianer}>
        <Image
          style={styles.loginMessageImage}
          source={require('../../../assets/svg/Devices.png')}
        />
        <Text style={styles.loginHeading}>Watch on any device</Text>
        <Text style={styles.loginMessageText}>
          Stream on your phone, tablet, laptop, and TV without paying more.
        </Text>
      </View>
      <Pressable
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate('Main-Page');
        }}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>
    </View>
  )
}

export default LogingScreen

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    headerImage: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
      },
    
      headerOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
      },
      headerText: {
        color: 'white',
      },
      loginMessageContianer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      loginMessageImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
      },
      loginMessageText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',
        width: 300,
      },
      loginHeading: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        width: 300,
      },
      loginButton: {
        backgroundColor: '#D23027',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      loginButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
})