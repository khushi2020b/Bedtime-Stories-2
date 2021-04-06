import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';

export default class ReadStoryScreen extends React.Component(){
    constructor(){
        super();
        this.state = {
          search: "",
        }
      }
    updateSearch = (search) => {
        this.setState ({search});
    };
    retreiveStories = () =>{
        try{
            var allStories = [];
            var stories = db.collection("stories")
            .get().then((querySnapshot) =>{
                querySnapshot.forEach((doc) =>
                {
                    allStories.push(doc.data())
                    console.log('these are the stories you can read - ', allStories)
                })
                this.setState({allStories})
            })
        }
        catch(error){
            console.log(error)
        }
    };
    searchFilter = () =>{
        var dataSourceList = this.searchFilter(search,({allStories}));
    }
    renderItem = ({ item, i }) => {
        let obj = {
          title: item.volumeInfo.title,
          selfLink: item.selfLink,
          buyLink: item.saleInfo.buyLink,
          imageLink: item.volumeInfo.imageLinks,
        };
    
        return (
          <TouchableHighlight
            style={styles.touchableopacity}
            underlayColor="#DDDDDD"
            onPress={() => {
              this.setState({
                bookName: item.volumeInfo.title,
              });
            }}
            bottomDivider
          >
            <Text> {item.volumeInfo.title} </Text>
          </TouchableHighlight>
        );
      };
    render(){
        const search = this.search;
        return(
            <View style = {styles.container}>
               <SearchBar
               placeHolder = "Type here...."
               onChangeText = {this.updateSearch}
               value = {search}
               />
               <ScrollView style = {styles.scrollView}>
                  <FlatList
                  data = {this.state.allStories}
                  renderItem = {({item}) =>(
                      <View style = {styles.itemContainer}>
                          <Text>Title - {item.title}</Text>
                          <Text>Author of story - {item.author}</Text>
                      </View>
                  )}/>
               </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignSelf: 'center'
    }
})