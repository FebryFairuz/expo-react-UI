import { StyleSheet } from "react-native";

const mystyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{fontSize:20, color:"purple", fontWeight:"bold", textAlign:"center", marginBottom:10},
    btn:{backgroundColor:"purple", borderRadius:25, padding:15},
    btntext:{color:"white", textAlign:"center", fontWeight:"bold", fontSize:20}
})

export default mystyles;