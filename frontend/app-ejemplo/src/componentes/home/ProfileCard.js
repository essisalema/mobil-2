import React from "react";
import { View, Text, StyleSheet, Image, Linking, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const snapchat = <Icon name={'snapchat'} size={70} color={'yellow'} />
const pinterest = <Icon name={'pinterest'} size={70} color={'red'} />
const youtube = <Icon name={'youtube'} size={70} color={'red'} />
const spotify = <Icon name={'spotify'} size={70} color={'green'} />
const twitch = <Icon name={'twitch'} size={70} color={'purple'} />
const kwai = <Icon name={'camera'} size={70} color={'orange'} />
const ProfileCard = () => {
               
    const user = {
        avatar: "../../../assets/perfil.jpg",
        //avatar: "https://www.shutterstock.com/image-photo/lion-king-black-white-260nw-635211587.jpg",
        coverPhoto: "https://img.freepik.com/fotos-premium/efecto-haz-luz-explosion-particulas-polvo-luz-azul_35672-1665.jpg?size=626&ext=jpg",
        name: "Edison Sisalema"
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
            <Image source={require("../../../assets/perfil.jpg")} style={styles.avatar} />
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback style={{ color: 'blue' }} onPress={() => {
                    Linking.openURL('https://www.snapchat.com/')
                }}>
                    {snapchat}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{ color: 'blue' }} onPress={() => {
                    Linking.openURL('https://www.pinterest.com/')
                }}>
                    {pinterest}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{ color: 'blue' }} onPress={() => {
                    Linking.openURL('https://www.youtube.com/')
                }}>
                    {youtube}
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://open.spotify.com/intl-es')}>
                    {spotify}
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.twitch.tv/')}>
                    {twitch}
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.kwai.com/es')}>
                    {kwai}
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 200,
        opacity: 0.8,
        shadowColor: 'black',
        resizeMode: 'cover'

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -100
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 10,
        borderColor: 'white'
    },
    name: {
        marginTop: -10,
        fontSize: 30,
        fontWeight: 'normal',
        letterSpacing: 4,
        textDecorationLine: 'line-through',


    },
    buttonContainer: {
        flexDirection: 'col',
        marginTop: 20,
        width: '75%',
        justifyContent: 'space-between'
    }
});
export default ProfileCard