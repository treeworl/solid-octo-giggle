import react from"react";
import{createDrawerNavigator}from'@react-navigation/bottom-tabs';
import Ionicons from'react-native-vector-icons/Ionicons'
import TabNavigator from"./tabNavigator"
import Profile from"../screens/Profile"
const Drawer=createDrawerNavigator();
const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator
        screenOptions={{headerShown:false}}>
           
            <Drawer.Screen name="Home"component={TabNavigator}/>
            <Drawer.Screen name="Profile"component={Profile}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;