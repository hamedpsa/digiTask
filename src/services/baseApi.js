import axios from 'axios';
import { Alert, } from 'react-native';

export const callApi = async (option) => {
    try {
        const response = await axios(option);
        return response;
    } catch (error) {
        console.log('error', error);
        Alert.alert('Error',error)
    }
};