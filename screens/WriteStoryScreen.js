import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, ToastAndroid, Alert} from 'react-native';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase'
import db from '../config'

export default class App extends React(){
    constructor(){
        super();
        this.state = {
            title = "",
            author = "",
            story = "",
            
        }
    }
    submitStory = ()=>{
        var title = this.state.title
        var author = this.state.author
        var story = this.state.story
        db.collection('write_story_details').add({
            "title": title,
            "author":author,
            "writeStory":story,
        })
        var transactionMessage;
        transactionMessage = "Story Submitted Successfully";
        ToastAndroid.show(transactionMessage, ToastAndroid.SHORT);
      }
    
    render(){
        return(
            <KeyboardAvoidingView style = {styles.container} behavior = "padding" enabled>
                <View style = {styles.container}>
                    <MyHeader title = "Story Hub"/>
                    <View style = {styles.formContainer}>
                        <TextInput
                            style = {styles.title}
                            placeholder = {"title"}/>
                        <TextInput
                            style = {styles.author}
                            placeholder = {"author"}/>
                        <TextInput
                            style = {styles.story}
                            placeholder = {"story"}
                            multiline = {true}/>
                        <TouchableOpacity style = {styles.button}
                        onPress = {this.submitStory}>
                            <Text style = {styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        flex:1,
        width: '100%',
        alignItems: 'center'
    },
    title: {
        width: '75%',
        height:35,
        alignSelf: 'center',
        borderColor: '#FFAB91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    },
    author: {
        width: '75%',
        height:35,
        alignSelf: 'center',
        borderColor: '#FFAB91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    },
    story: {
        width: '75%',
        height:35,
        alignSelf: 'center',
        borderColor: '#FFAB91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    },
    button: {
        width:'75%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FF5722'
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF'
    }
})