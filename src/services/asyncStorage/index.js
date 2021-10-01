import AsyncStorage from "@react-native-async-storage/async-storage";

export default { get, set };

export async function get(key) {
  try {
    const stringData = await AsyncStorage.getItem(key);
    const data = stringData != null ? JSON.parse(stringData) : null;
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
}
export async function set(key, data) {
  try {
    const stringData = JSON.stringify(data);
    await AsyncStorage.setItem(key, stringData);
    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
}
