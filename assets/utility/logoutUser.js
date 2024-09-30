import navigationHandler from "./navigationHandler";

//A function for login out a user
const logoutUser = ({ navigation }) => {
    navigationHandler({ navigation }, "Login");
};

export default logoutUser;
