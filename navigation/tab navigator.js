import react from"react";
import{createBottomTabNavigator}from'@react-navigation/bottom-tabs';
import Ionicons from'react-native-vector-icons/Ionicons'
import feed from"../screens/Feed"
import createStory from"../screens/CreateStory";
const tab=createBottomTabNavigator();
const bottomTabNavigator=()=>{
    return(
        <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({focused,colour,size})=>{
                let iconName;
                if(route.name==='Feed'){
                    iconName=focused?'book' :'book-outline';
                } else if(route.name==='createStory'){
                    iconName=focused?'create':'create-outline'
                }
                return<Ionicons name={iconName}size={size}colour={colour}/>
            }
        })}
        tabBarOptions={{
            activeTintColour:'tomato',
            inActiveTintColour:'grey',
        }}>
            <Tab.Screen name="Feed"component={Feed}/>
            <Tab.Screen name="createStory"component={createStory}/>
        </Tab.Navigator>
    )
}