import { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL_BACKEND;

// export const LoginUser = async (data: any) => {
//     try {
//         const response = await axios.post(`${BASE_URL}/api/user/login`, {
//             email: data.email,
//             password: data.password,
//         });
//         if (response.data.ok) {
//             localStorage.setItem('token', response.data.token);
//         }
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// };

export const registerUser = async (data: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/user/`, {
            name: data.fullName,
            email: data.email,
            password: data.password,
        });

        if (response.data.ok) {
            localStorage.setItem('token', response.data.token);
        }
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

