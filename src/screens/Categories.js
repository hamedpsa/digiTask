import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Modal, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { callApi, } from '../services/baseApi';
import { GetCategoriesConfig, } from '../services/configs';
import { getAllCategories, showDialog, filterWithTag } from '../redux/action';
import store from '../redux/store';
import styles from '../styles/styles';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showIndicator: false,
        };
    }
    async _getCategories() {
        this.setState({ showIndicator: true });
        await this.props.getAllCategories();
        this.setState({ showIndicator: false });
    }
    componentDidMount() {
        this._getCategories()
    }
    _renderCategoryItems() {
        let categoryItems = this.props.categoryData !== null ? this.props.categoryData.results : null;
        let totalItems = this.props.categoryData !== null ? this.props.categoryData.count : 0;
        return (
            <View
                style={styles.categoty_container}
            >
                <View
                    style={styles.category_list_head}
                >
                    <Text style={{ fontSize: 16, margin: 8, }}>{`Select Category`}</Text>
                    <Text style={{ margin: 8, }}>{`total of categories : ${totalItems}`}</Text>

                </View>
                <View
                    style={styles.category_line}
                />
                <ScrollView
                    contentContainerStyle={{ width: '100%', }}
                    showsVerticalScrollIndicator={false}
                >
                    {
                        categoryItems !== null &&
                        categoryItems.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.category_item_container}
                                    onPress={async () => {
                                        this.props.showDialog(false);
                                        await this.props.filterWithTag(item.name);

                                    }}
                                >
                                    <Text>{`category ${index + 1} : ${item.name}`}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>

            </View>

        )
    }

    render() {
        return (
            <View
                style={{
                    flex: 1, width: '100%', alignItems: 'center',
                }}
            >
                {
                    this.state.showIndicator &&
                    <ActivityIndicator
                        size="small"
                        color="gray"
                    />
                }
                {
                    !this.state.showIndicator &&
                    this._renderCategoryItems()
                }

            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        categoryData: state.categoryData,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllCategories: () => dispatch(getAllCategories()),
        showDialog: (visible) => dispatch(showDialog(visible)),
        filterWithTag: (tag) => dispatch(filterWithTag(tag)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
