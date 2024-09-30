import storage from "../../components/storage";
import navigationHandler from "./navigationHandler";

//A function for authenticating and login in a user
const loginUser = (username, password, { navigation }) => {
  var retrivedPassword;
  var retrivedUsername;
  if (username && password) {
    storage
      .load({
        key: username,
        autoSync: true,
        syncInBackground: false,
      })
      .then((ret) => {
        retrivedPassword = ret.accountPassword;
        retrivedUsername = ret.accountUsername;
        if ((retrivedUsername === username) & (retrivedPassword === password)) {
          global.usersCart = []
          navigationHandler({ navigation }, "Home");
        } else {
          alert("No user with this account. Verify login details.");
        }
      })
      .catch((e) => {
        alert("No user with this account. Verify login details.");
      });
  } else {
    alert("Username or password is empty! Enter username and password.");
  }
};

export default loginUser;
