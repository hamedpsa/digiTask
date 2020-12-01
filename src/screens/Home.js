import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, Alert, Pressable, Modal } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { getAllMovieItems, searchMovieItems, showDialog } from '../redux/action';
import { callApi, } from '../services/baseApi';
import { GetMoviesConfig, SearchMoviesConfig, } from '../services/configs';
import Categories from '../screens/Categories';
import store from '../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtInSearch: '',
    };
  }
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }
  _renderSearchBar() {
    return (
      <View
        style={styles.home_searchbar_contariner}
      >
        <TouchableOpacity
          style={styles.home_seach_btn}
          onPress={() => {
            this.txtInSearch.focus();
          }}
        >
          <MaterialIcons
            style={{
              color: 'gray',
              marginLeft: 8,
            }}
            name={'search'}
            size={32}
          />
        </TouchableOpacity>
        <View
          style={styles.home_search_box}
        >
          <TextInput
            ref={(ref) => this.txtInSearch = ref}
            autoFocus={false}
            style={styles.home_search_input}
            placeholder=' search '
            value={this.state.txtInSearch}
            maxLength={100}
            selectionColor={'gray'}
            onChangeText={async (txt) => {
              await this.setStateAsync({ txtInSearch: txt });
              await this.props.searchMovieItems(this.state.txtInSearch);
            }}
          />
          {
            this.state.txtInSearch.length > 0 &&
            <TouchableOpacity
              style={styles.home_search_clear}
              onPress={async () => {
                await this.setStateAsync({ txtInSearch: '' });
                await this.props.getAllMovieItems();
              }}
            >
              <MaterialIcons
                style={{
                  color: 'gray',
                }}
                name={'clear'}
                size={20}
              />
            </TouchableOpacity>
          }

        </View>
        <TouchableOpacity
          style={styles.home_filer_btn}
          onPress={() => {
            this.props.showDialog(true)
            console.log(this.props.dialogVisibility)
          }}
        >
          <MaterialIcons
            style={{
              color: 'gray',
              marginLeft: 8,
              //marginRight: 16,

            }}
            name={'filter-list'}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.home_logout_btn}
          onPress={() => {
            Alert.alert(
              'LOG OUT',
              'DO YOU WANT TO LOG OUT?',
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                {
                  text: "OK", onPress: () => {
                    console.log("OK Pressed")
                    this._logOut()
                  }
                }
              ]
            )
          }}
        >
          <MaterialIcons
            style={{
              color: 'gray',
              marginLeft: 8,
            }}
            name={'launch'}
            size={30}
          />
        </TouchableOpacity>
      </View>
    )
  }
  _renderMovieItems() {
    let movieItems = this.props.movieData !== null ? this.props.movieData.results : null;
    let totalItems = this.props.movieData !== null ? this.props.movieData.count : 0;

    return (
      <View
        style={{
          flex: 1, width: '100%',
        }}
      >
        <View
          style={styles.home_items_header}
        >
          <Text>{`total of movies : ${totalItems}`}</Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            width: '100%',
          }}
        >
          {movieItems !== null &&
            movieItems.map((item, index) => {
              return (
                <View
                  key={item.id}
                  style={styles.home_item_list_container}
                >
                  <Text
                    style={{ width: '100%', marginBottom: 8 }}
                  >{`title : ${item.title}`}</Text>
                  <Text
                    style={{ width: '100%', marginBottom: 8 }}
                  >{`date of release : ${item.date_of_release}`}</Text>
                  <Text
                    style={{ width: '100%', marginBottom: 8 }}
                  >{`rating : ${item.rating}`}</Text>
                  <Text
                    style={{ width: '100%', marginBottom: 8 }}
                  >{`tags : ${item.tags}`}</Text>
                  <Text
                    style={{ width: '100%', marginBottom: 8 }}
                  >{`director : ${item.director}`}</Text>
                  <Text
                    style={styles.home_item_list_indexer}
                  >{` ${index + 1}`}</Text>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
  _renderFileterDialog() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.dialogVisibility}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Pressable
          onPress={() => { this.props.showDialog(false) }}
          style={styles.home_dialog_back}
        >
          <View
            style={styles.home_dialog_container}
          >
            <Categories />
          </View>

        </Pressable>

      </Modal>
    )
  }
  async _logOut() {
    await AsyncStorage.setItem('userToken', '');
    this.props.navigation.replace("LogIn");

  }

  async componentDidMount() {
    await this.props.getAllMovieItems();

  }
  render() {
    return (
      <View
        style={{ flex: 1, alignItems: 'center' }}
      >
        {
          this._renderSearchBar()
        }
        {
          this.props.inidicatorVisibility &&
          <ActivityIndicator
            size="small"
            color="gray"
          />
        }
        {!this.props.inidicatorVisibility &&
          this._renderMovieItems()
        }
        {this.props.dialogVisibility &&
          this._renderFileterDialog()
        }

      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.token,
    movieData: state.movieData,
    dialogVisibility: state.dialogVisibility,
    inidicatorVisibility: state.inidicatorVisibility,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllMovieItems: () => dispatch(getAllMovieItems()),
    searchMovieItems: (q) => dispatch(searchMovieItems(q)),
    showDialog: (visible) => dispatch(showDialog(visible)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
