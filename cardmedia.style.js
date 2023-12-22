import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        elevation: 5,
        shadowRadius: 2,
        shadowColor: "rgba(67, 67, 67, 2)",
    },
    title:{
        fontSize: 35,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    description:{
        marginTop: "5%",
        fontSize: 20,
    },
    cardContainer: {
        padding: 20,
        alignItems: 'flex-start',
    },
    image:{
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        alignSelf: 'stretch',
        height: 200,
    }
})

export default styles;