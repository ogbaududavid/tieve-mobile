import storage from "../../components/storage";
import loginUser from "./loginUser";

const verifyLogin = (username, password, { navigation }) => {
  if (username && password) {
    if (password.length < 5) {
      alert("password should be at least 5 characters long or more");
    } else {
      storage
        .load({
          key: username,
          autoSync: true,
          syncInBackground: false,
        })
        .then((ret) => {
          retrivedUsername = ret.accountUsername;
          if (retrivedUsername === username) {
            alert(
              "Username already exists. Sign in or choose a different username"
            );
          }          
        })
        .catch(() => {
          storage.save({
            key: username,
            data: {
              accountUsername: username,
              accountPassword: password,
            },
            expires: null,
          });
          loginUser(username, password, { navigation });
        })
        
    }
  } else {
    alert("Username or password is empty! Enter username and password.");
  }
};

export default verifyLogin;
