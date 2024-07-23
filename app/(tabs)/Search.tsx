import { StyleSheet, Text, View,ScrollView,TextInput,Image,Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Search from '@/comman/Header/Search';


const songs = [
    {
      id: 1,
      title: 'stranger Things 1 & 2',
      artist: 'tv shows',
      image: require('../../assets/svg/stranger.jpg')
    },
    {
      id: 2,
      title: '13 RESASONS WHY',
      artist: 'tv shows',
      image: require('../../assets/svg/13R.jpg')
    },
    {
      id: 3,
      title: 'Money Heist',
      artist: 'tv shows',
      image: require('../../assets/svg/moneyHeist.jpg')
    },
    {
      id: 4,
      title: 'DARK',
      artist: 'tv shows',
      image: require('../../assets/svg/dark.png')
    },
    {
      id: 5,
      title: 'Peaky Blinder',
      artist: 'tv shows',
      image: require('../../assets/svg/peakyBlinder.jpg')
    },
    {
      id: 6,
      title: 'Peaky Blinder',
      artist: 'tv shows',
      image: require('../../assets/svg/peakyBlinder.jpg')
    },{
      id: 7,
      title: 'Peaky Blinder',
      artist: 'tv shows',
      image: require('../../assets/svg/peakyBlinder.jpg')
    },{
      id: 8,
      title: 'Peaky Blinder',
      artist: 'tv shows',
      image: require('../../assets/svg/peakyBlinder.jpg')
    },{
      id: 9,
      title: 'Peaky Blinder',
      artist: 'tv shows',
      image: require('../../assets/svg/peakyBlinder.jpg')
    }
    
  ]

export default function Details() {
  const [searchText, setSearchText] = useState('');
  return (
    
    <View style={styles.pageContainer}>
      
    <Search/>
  <View style={styles.container}>

      <ScrollView style={styles.scrollView}>

       
     
      {songs.map((song, index) => (
        <View key={song.id} style={styles.popularContainer}>
          <Text style={styles.rankText}>{index + 1}</Text>
          <Image
            style={styles.popularImage}
            source={song.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.songTitle}>{song.title}</Text>
            <Text style={styles.songArtist}>{song.artist}</Text>
          </View>
          <Ionicons name="play" size={24} color="grey" style={styles.popularMoreIcon} />
        </View>
      ))}
    </ScrollView>
    </View>
   
  </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
    container: {
        flex: 1,
        backgroundColor: '#000000',
      },
      scrollView: {
        marginTop: 10,
      },
      imageContainer: {
        alignItems: 'center',
        marginTop: 0,
      },
      tinyLogo: {
        width: 360,
        height: 300,
      },
      imageText: {
        color: 'darkgray',
        fontSize: 16,
        marginTop: 20,
        marginRight: 180,
      },
      baseText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22,
        marginTop: 20,
        marginLeft: 20,
      },
      popularContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
      },
      rankText: {
        color: 'white',
        fontSize: 20,
        marginRight: 10,
      },
      popularImage: {
        width: 60,
        height: 60,
      },
      textContainer: {
        marginLeft: 10,
        flex: 1,
      },
      songTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
      },
      songArtist: {
        color: 'gray',
        fontSize: 16,
      },
      popularMoreIcon: {
        marginLeft: 10,
      },
      bottomIcons: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      },
      icons: {
        marginHorizontal:20,
    },
    trailerContainer: {
      height: 270,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    trailer: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
    },
    playBtn: {
      position: 'absolute',
      borderColor: 'red',
      height: 60,
      width: 60,
      padding: 8,
      borderWidth: 2,
      backgroundColor: 'rgba(0,0,0,0.8)',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    audioBtn: {
      position: 'absolute',
      height: 40,
      width: 40,
      padding: 8,
      backgroundColor: 'rgba(0,0,0,0.8)',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      right: 20,
      bottom: 20,
    },
    playButton: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 5,
      marginVertical: 5,
      width: 250,
    },
    playText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 5,
    },
    downloadBtn: {
      backgroundColor: 'grey',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 5,
      marginVertical: 10,
    },
    downloadText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    detailsContainer: {
      padding: 15,
    },
    stats: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      gap: 10,
    },
    match: {
      color: 'green',
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10,
    },
    year: {
      color: 'grey',
      fontSize: 16,
      marginRight: 10,
    },
    age: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10,
      backgroundColor: 'yellow',
      padding: 3,
      borderRadius: 5,
    },
    seasons: {
      color: 'grey',
      fontSize: 16,
      marginRight: 10,
    },
    searchContainer: {
      position: 'absolute',
      top: 70,
      width: '96%',
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    searchIcon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      color: 'black',
    },
})