import React from 'react';
import { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView, Alert, FlatList } from 'react-native';
import { firebase } from '../../config/config';
import { LOGO } from '../../config/styles.js';
import styles from './styles';

class ForumScreen extends Component {
    render() {
        return (
            <SafeAreaView>
              <View>
                <View style={{marginBottom: 15}}>
                    <View style={styles.HeaderStyle1}>
                        <Image source={LOGO} style={styles.ImageView} />
                        <Text style={styles.HeaderStyle}>Forums</Text>
                        <TouchableOpacity style={styles.AskButtonStyle} onPress={() => {
                            this.props.navigation.navigate("AddChat")
                        }}>
                            <Text style = {{color: "black", fontWeight: '500', textAlign: 'center', fontSize: 16 }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.DividerView} />
                    <View style={styles.DividerView} />
                </View>

                <View>
                  <TouchableOpacity onPress={() => this.props.navigation.push("Chat")}>
                    <View>
                        <View style={{flexDirection:'row', marginLeft:10}}>
                            <Image source={LOGO} style={styles.ImageView1}/>
                            <Text style={{alignSelf:'center', fontSize:16, marginHorizontal:15, marginBottom:2}}>
                                GSoC
                            </Text>
                        </View>
                    </View>
                  </TouchableOpacity>
                <View style={styles.DividerView1} />
              </View>
            </View>
          </SafeAreaView>
        );
    }
}

export default ForumScreen;