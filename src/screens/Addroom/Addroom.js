import React from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { firebase } from '../../config/config';
import moment from 'moment';
import styles from './styles.js';
import { LOGO } from '../../config/styles.js';

class Addroom extends Component{
    state = {roomName : '', message : ''}

    createRoom(roomName) {
        const {message} = this.state
        var timeDate = moment();
        firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then((doc) => {
            firebase.database().ref(roomName).push({
                name: doc.data().fullName,
                message,
                creation:  new Date().toUTCString(),
                messageTime: timeDate.format('lll'),
                imageURL : doc.data().downloadURL 
            }).then((data) => {
                this.setState({roomName: '', message: ''})
            }).catch((error) => {
                alert(error)
            })
        })
    }

    render(){
        const {roomName, message} = this.state
    return (
        <SafeAreaView style={{flex:1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View>
                    <View style={{marginBottom: 15}}>
                        <View style={styles.HeaderStyle1}>
                            <Image source={LOGO} style={styles.ImageView} />
                            <Text style={styles.HeaderStyle}>Add room</Text>
                            <TouchableOpacity style={styles.AskButtonStyle} onPress={() => this.props.navigation.navigate("Forum")}>
                                <Text style = {{color: "black", fontWeight: '500', textAlign: 'center', fontSize: 16 }}>BACK</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.DividerView} />
                        <View style={styles.DividerView} />

                    </View>
                    <View style={{justifyContent:'center', alignSelf:'center', marginTop: 100}}>
                        <Text style={{fontSize: 19, alignSelf: 'center', fontWeight: '500', marginBottom: 10}}>Enter the Room Name Here</Text>
                        {this.state.roomName.length === 0 ? 
                        <View>
                        <View style={{width: 250, height: 60, backgroundColor: '#dbdbdb', justifyContent: 'center', borderBottomColor: "gray", borderBottomWidth: 2}}>
                        <TextInput 
                            style={styles.TextStyle2}
                            title="CREATE A NEW CHAT ROOM"
                            placeholder="ROOM NAME"
                            value={this.state.roomName}
                            onChangeText={(roomName) => this.setState({roomName})}
                        />        
                        </View>
                        <View style={{width: 250, minHeight: 100, backgroundColor: '#dbdbdb', padding: 10, borderBottomColor: "gray", borderBottomWidth: 2, marginTop:10, borderRadius: 10}}>
                        <TextInput 
                            style={{}}
                            title="CREATE A NEW CHAT ROOM"
                            value={this.state.message}
                            onChangeText={(message) => this.setState({message})}
                            placeholder="Enter room description"
                            multiline
                        />        
                        </View>
                        <TouchableOpacity 
                            disabled={roomName.length === 0}
                            style={{height: 40, width: 250, backgroundColor: "gray", justifyContent: 'center', marginTop: 30, borderRadius: 10}}
                            onPress = {() => this.createRoom(this.state.roomName)}
                        >
                            <Text style={{alignSelf: 'center', fontSize: 20}}>CREATE</Text>
                        </TouchableOpacity></View> : 
                        <View>
                            <View style={{width: 250, height: 60, backgroundColor: '#dbdbdb', justifyContent: 'center', borderBottomColor: "#51AD28", borderBottomWidth: 2}}>
                                <TextInput 
                                    style={styles.TextStyle2}
                                    title="CREATE A NEW CHAT ROOM"
                                    placeholder="ROOM NAME"
                                    value={this.state.roomName}
                                    onChangeText={(roomName) => this.setState({roomName})}
                                />        
                            </View>
                        {this.state.message.length === 0 ? 
                        <View style={{width: 250, minHeight: 100, backgroundColor: '#dbdbdb', padding: 10, borderBottomColor: "gray", borderBottomWidth: 2, marginTop:10, borderRadius: 10}}>
                            <TextInput 
                                style={{}}
                                title="CREATE A NEW CHAT ROOM"
                                placeholder="Enter room description"
                                value={this.state.message}
                                    onChangeText={(message) => this.setState({message})}
                                multiline
                             />        
                        </View>    
                        :
                        <View style={{width: 250, minHeight: 100, backgroundColor: '#dbdbdb', padding: 10, borderBottomColor: "#51AD28", borderBottomWidth: 2, marginTop:10, borderRadius: 10}}>
                            <TextInput 
                                style={{}}
                                title="CREATE A NEW CHAT ROOM"
                                placeholder="Enter room description"
                                value={this.state.message}
                                onChangeText={(message) => this.setState({message})}
                                multiline
                            />        
                        </View>
                        }
                    <TouchableOpacity 
                        disabled={roomName.length === 0}
                        style={{height: 40, width: 250, backgroundColor: "#51AD28", justifyContent: 'center', marginTop: 30, borderRadius: 10}}
                        onPress = {() => this.createRoom(this.state.roomName)}
                    >
                    <Text style={{alignSelf: 'center', fontSize: 20}}>CREATE</Text>
                    </TouchableOpacity>
                    </View>
                    }
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
        )
    }
};

export default Addroom;