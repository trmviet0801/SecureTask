import { createStackNavigator } from "@react-navigation/stack";
import { SCREEN_NAMES } from "./screenNames";
import Home from "../screens/home/home";
import Login from "../screens/login/login";
import { TypedNavigator } from "@react-navigation/native";

const NavStack: any = createStackNavigator();

function SecureTaskStack() {
  return (
    <NavStack.Navigator>
      <NavStack.Screen
        name={SCREEN_NAMES.HOME}
        component={Home}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
      <NavStack.Screen name={SCREEN_NAMES.LOGIN} component={Login} />
    </NavStack.Navigator>
  );
}

export default SecureTaskStack;
