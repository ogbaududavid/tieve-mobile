import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "react-native-storage";

//A function for handling async storage in the app
const storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true
});

export default storage;
