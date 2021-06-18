import { StyleSheet } from 'react-native';
import { COLOR_LIGHT_PRIMARY, COLOR_LIGHT_SECONDARY} from '../../config/styles';

export default StyleSheet.create({
    HeaderStyle : {
        fontSize: 30,
        flex: 1,
        marginLeft: 10, 
        marginTop: 5,
        marginBottom: 10
    },

    ImageView : {
        width: "13%",
        height: "100%",
        marginHorizontal: 5,
    },

    HeaderStyle1 : {
        flexDirection: 'row',  
    },

    DividerView : {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom:3,
        marginHorizontal: 10
    },

    DividerView1 : {
        borderBottomColor: '#23598B',
        borderBottomWidth: 1,
        marginBottom:3,
        marginHorizontal: 20
    },
    
    AskButtonStyle : {
        width: "16%",
        height: 32,
        backgroundColor: COLOR_LIGHT_PRIMARY,
        borderRadius: 10,
        right: 10,
        justifyContent: 'center',
        marginTop: 7
    },
  
    QuestionStyle : {
        width : "90%",
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: Platform.OS === 'ios' ? '#fff' : null,
        borderColor: '#b8b8b8',
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: Platform.OS === 'ios' ? 0.9 : 0.8,
        shadowRadius: Platform.OS === 'ios' ? 3 : 40,
        elevation: Platform.OS === 'ios' ? 3 : 4,
        alignSelf: 'center'
    },

    nameHeadlineStyle : {
        width: "101%",
        backgroundColor: COLOR_LIGHT_PRIMARY,
        borderRadius: 7,
        alignSelf: 'center',
        justifyContent: 'center',
        top: 0
    },

    nameHeadlineStyle1 : {
        width: "101%",
        paddingVertical: 2,
        backgroundColor: COLOR_LIGHT_SECONDARY,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'space-between',
        top: 0,
        flexDirection: 'row'
    },
    
    AnswerButtonStyle : {
        width: "20%",
        paddingVertical: 2,
        backgroundColor: COLOR_LIGHT_PRIMARY,
        borderRadius: 5,
        alignSelf: 'flex-end',
        bottom: 5,
        right: 5,
        justifyContent: 'center',
    },

    AnswerButtonStyle1 : {
        width: "20%",
        paddingVertical: 2,
        backgroundColor: COLOR_LIGHT_SECONDARY,
        borderRadius: 5,
        alignSelf: 'flex-end',
        bottom: 5,
        right: 5,
        justifyContent: 'center',
    },

    AnswerButtonStyle2 : {
        width: "20%",
        paddingVertical: 2,
        borderRadius: 5,
        alignSelf: 'flex-end',
        bottom: 5,
        right: 0,
        justifyContent: 'flex-end',
    },

    doneStyle: {
        color: "black", 
        fontWeight: '500', 
        textAlign: 'center', 
        fontSize: 16 
    },

    ViewStyle : {
        flexDirection:'row', 
        justifyContent: 'space-between'
    },

    QuestionlabelStyle : {
        marginLeft: 10, 
        paddingLeft: 5, 
        marginTop: 5, 
        fontWeight: "700"
    },

    TouchableIconStyle: { 
        marginRight: 10, 
        paddingLeft: 5, 
        marginTop: 5, 
        fontWeight: "700"
    },

    IconStyle : {
        color: "gray", 
        alignSelf: "flex-end" 
    },

    QuestionNameStyle : {
        marginLeft: 10, 
        marginRight:5, 
        padding:5, 
        marginBottom: 5
    },

    ImageStyle : {
        height: 100, 
        aspectRatio: 1, 
        alignSelf: 'center', 
        borderRadius: 10, 
        marginBottom: 10
    },

    ViewStyle1 : {
        backgroundColor:'white', 
        borderRadius:10
    },

    textInputStyle : {
        padding: 10, 
        fontSize: 13, 
        width: "100%", 
        marginBottom:5, 
        color: 'black' 
    },

    AnswerStyle : {
        color: "black", 
        fontWeight: '400', 
        textAlign: 'center', 
        fontSize: 14 
    },

    userAnsStyle : {
        marginLeft: 10, 
        marginTop: 2
    },

    ansTimeStyle : {
        fontSize: 10, 
        marginTop: 5, 
        marginRight: 5, 
        color:'white'
    },

    Q_ansStyle : {
        padding: 10, 
        fontSize: 13
    },

    LikeStyle : {
        color: "black", 
        fontWeight: '400', 
        textAlign: 'center', 
        fontSize: 14 
    },

    StarIconStyle : {
        color: "gold", 
        marginRight: 10, 
        alignSelf: "flex-end" 
    }
});