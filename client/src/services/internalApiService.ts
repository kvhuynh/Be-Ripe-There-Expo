import axios from "axios";

import Constants from "expo-constants";

import { UserState } from "../views/login-registration/Register";

import { LoginState } from "../views/login-registration/Login";

const { manifest } = Constants;

// const uri = `http://${manifest!.debuggerHost!.split(':').shift()}:8080/api/v1/auth/`;
const uri = "http://localhost:8080/api/v1/auth/"

const http = axios.create({

    baseURL: uri
});

export const testBackEnd = async () => {

    console.log(uri);
    const res = await http.get("/");
    return res.data;
}

// export const testRegister = async () => {
//     const data = {
//         firstName: "Kevin",
//         lastName: "Huynh",
//         email: "kvhuynh820@gmail.com",
//         password: "test",
//         confirmPassword: "test"
//     }
//     const res = await http.post("/register", data)
//     return res.data;
// }

export const createUser = async (userData: UserState) => {

    const res = await http.post("/register", userData)
    return res.data
}

export const loginUser = async (userData: LoginState) => {
    
    console.log(userData);
    
}