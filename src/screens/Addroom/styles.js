import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    HeaderStyle1 : {
        flexDirection: 'row',
    },

    ImageView : {
        width: 55,
        height: 55,
        marginHorizontal: 5
    },

    HeaderStyle : {
        fontSize: 30,
        flex: 1,
        marginLeft: 10, 
        marginTop: 5
    },

    AskButtonStyle : {
        width: 60,
        height: 30,
        backgroundColor: "#9cd683",
        borderRadius: 10,
        right: 10,
        justifyContent: 'center',
        marginTop: 7
    },

    DividerView : {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom:3,
        marginHorizontal: 10
    },

    DividerView1 : {
        borderBottomColor: '#51AD28',
        borderBottomWidth: 2,
        marginBottom:3,
    },

    TextStyle2 : {
        flex: 1,
        color: 'black',
        padding: 10,
        fontSize:20
    },
})