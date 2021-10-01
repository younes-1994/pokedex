import AsyncStorage from "./index";

export default { get, set };

export async function get() {
  try {
    const data = await AsyncStorage.get("Account");
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
}
export async function set(data) {
  try {
    await AsyncStorage.set("Account", data);
    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
}
