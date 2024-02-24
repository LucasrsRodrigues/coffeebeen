import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ForgotPassword } from "@screens/ForgotPassword";
import { Login } from "@screens/Login";

const { Navigator, Screen } = createNativeStackNavigator();

export function UnsafeRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="LoginScreen" component={Login} />
      <Screen name="ForgotPasword" component={ForgotPassword} />
    </Navigator>
  )
}