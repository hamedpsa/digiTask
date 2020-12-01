import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import FloatingTextInputField from '../components/FloatingTextInputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { callApi, } from '../services/baseApi';
import { AuthConfig, } from '../services/configs';
import { setToken, } from '../redux/action';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showPass: false,
            showInputErro: false,
            showIndicator: false,
        };
    }
    _updateMasterState = (attrName, value) => {
        this.setState({ [attrName]: value, showInputErro: false });
    }
    _login = async () => {
        const { username, password } = this.state;
        let response = await callApi(AuthConfig(username, password));
        console.log(response)
        if (response?.status === 200) {
            //let token = response.data.token
            this.props.setToken(response.data.token);
            await AsyncStorage.setItem('userToken', response.data.token);
            this.props.navigation.replace("Home");
        }
        this.setState({ showIndicator: false });
    }

    render() {
        return (
            <View style={styles.login_contaionr}>
                <View
                    style={styles.login_box}
                >
                    <Text
                        style={styles.login_helper}
                    >test account is username:hriks , password:gt4043@1</Text>
                    <View
                        style={styles.log_input}
                    >
                        <FloatingTextInputField
                            attrName='username'
                            title='USERNAME'
                            value={this.state.username}
                            updateMasterState={this._updateMasterState}
                            textInputStyles={{
                                color: 'black',
                                fontSize: 16,
                            }}
                            otherTextInputProps={{
                                maxLength: 100,
                                textContentType: 'username'
                            }}
                        />
                    </View>
                    <View
                        style={styles.log_input}
                    >
                        <FloatingTextInputField
                            attrName='password'
                            title='PASSWORD'
                            value={this.state.password}
                            updateMasterState={this._updateMasterState}
                            textInputStyles={{
                                color: 'black',
                                fontSize: 16,
                            }}
                            otherTextInputProps={{
                                maxLength: 100,
                                //textContentType: 'password',
                                secureTextEntry: !this.state.showPass
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ showPass: !this.state.showPass })
                            }}
                        >
                            <MaterialIcons
                                style={{ color: 'black' }}
                                name={this.state.showPass ? "visibility" : "visibility-off"}
                                size={24}
                            />
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.showInputErro &&
                        <View
                            style={styles.login_warnign_container}
                        >
                            <Text
                                style={styles.login_warning_text}
                            > username or password is incorrect!!!</Text>
                            <MaterialIcons
                                style={{ color: 'black', marginRight: 8, }}
                                name='warning'
                                size={20}
                            />
                        </View>
                    }
                    <TouchableOpacity
                        style={styles.login_btn}
                        onPress={() => {
                            if ((this.state.username.length <= 3 || this.state.password.length <= 6)) {
                                this.setState({ showInputErro: true })
                            } else {
                                this.setState({ showIndicator: true })
                                this._login()
                            }
                        }}
                    >
                        <Text
                            style={{
                                color: 'white', fontSize: 14,
                            }}
                        > LogIn </Text>
                    </TouchableOpacity>
                    {
                        this.state.showIndicator &&
                        <ActivityIndicator
                            size="small"
                            color="gray"
                        />
                    }
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        token: state.token,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        setToken: (token) => dispatch(setToken(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
