import React from 'react';
import{Text,View,Button,Image,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Data =[
{
    id: 1,
    name: "English"
},

{
    id: 2,
    name: "Hindi"
},

{
    id: 3,
    name: "Maths"
},

{
    id: 4,
    name: "Science"
},

{
    id: 5,
    name: "Social studies"
}
]

const Demoapp = () => {

        
return (

<NavigationContainer>
 <View>
    <FlatList

            data={Data}
            horizontal={true}
            renderItem={({item}) => {

                return (
                <TouchableOpacity>

        <View style={{backgroundColor:"skyblue",margin:10,padding:10,borderWidth:1,borderRadius:20}}>

            <Text> {item.name} </Text>

             </View>

                </TouchableOpacity>
        )}} />

                <Text style={{backgroundColor: "gray", color : "white",margin:10,padding:10,borderWidth:1,alignContent: "center"}}> English Tense Notes </Text>
                 <Image source={require('./Images/test.jpg')} style={{width:400,alignContent: "center", height:160, }} />
                 <Text style={{backgroundColor: "gray",color : "white",margin:10,padding:10,borderWidth:1,alignContent: "center"}}> Upcoming Mathematics Class {'\n'}
                 Octber 31, 2:30PM </Text>
                 <Image source={require('./Images/test1.jpg')} style={{width:400,alignContent: "center", height:160, }} />
                 <Text style={{backgroundColor: "gray",color : "white",margin:10,padding:10,borderWidth:1,alignContent: "center"}}> Chemistry Unit 1 Notes {'\n'}
                 15kb </Text>      

                    </View>
                        </NavigationContainer>
)}



const stack = createNativeStackNavigator();

const Mystack = () => {

return (


    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{ title : 'welcome'}}
    />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    );


};   

export default Mystack;
