import { USERNAME, PASSWORD } from "../../constants/account.constant";

export default { login, logout };

export function login(data) {
  const { username = "", password = "" } = data;
  if (username == USERNAME && password == PASSWORD) return Promise.resolve();
  else return Promise.reject();
}
export function logout() {
  return Promise.resolve();
}
