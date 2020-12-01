import { StyleSheet,} from 'react-native';

const styles = StyleSheet.create({
    login_contaionr:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    login_box:{
        width: '88%',  
        justifyContent: 'center',
        alignItems: 'center',
    },
    login_helper:{
        color: 'gray', 
        fontSize: 12,
        marginBottom:36
    },
    log_input:{
        width: '80%',
        height: 56, 
        borderWidth: 0.5, 
        borderColor: 'gray', 
        borderStyle: 'solid', 
        borderRadius: 4,
        margin: 10, 
        justifyContent: 'center', 
        paddingLeft: 20, 
        alignItems: 'center', 
        flexDirection: 'row',
    },
    login_warnign_container:{
        width: '100%', 
        flexDirection: 'row-reverse', 
        alignItems: 'center',
        justifyContent: 'flex-end', 
        paddingRight: 24,
    },
    login_warning_text:{
        fontFamily: 'iransans', 
        fontSize: 9, 
        color: 'black', 
        marginRight: 8,
    },
    login_btn:{
        width: '72%', 
        height: 50, 
        backgroundColor: '#0095f6', 
        marginTop: 24, 
        marginBottom: 20,
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 4,
    },
    home_searchbar_contariner:{
        width: '100%', 
        height: 52, 
        backgroundColor: 'white',
        flexDirection: 'row', 
        elevation: 8, 
        alignItems: 'center'
    },
    home_seach_btn:{
        width: '15%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    home_search_box:{
        width: '55%', 
        height: '100%',
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
    },
    home_search_input:{
        width: '98%', 
        height: '82%',
        textAlign: 'left', 
        color: 'gray', 
        fontSize: 14,
        fontFamily: 'iransans',
    },
    home_search_clear:{
        width: 24, 
        height: 24, 
        borderRadius: 12,
        borderColor: '#efefef', 
        borderWidth: 2, 
        marginRight: 4,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    home_filer_btn:{
        width: '15%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    home_logout_btn:{
        width: '15%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    home_items_header:{
        width: '100%', 
        height: 32, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor:'white'
    },
    home_item_list_container:{
        width: '100%', 
        backgroundColor: 'white', 
        marginTop: 10, 
        paddingLeft: 16,
        paddingTop:8,
    },
    home_item_list_indexer:{
        width: '100%',
        fontSize:12, 
        marginBottom: 8,
        color:'gray', 
        textAlign: 'center'
    },
    home_dialog_back:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(100,100,100,0.5)'
    },
    home_dialog_container:{
        width:'70%',
        height:'80%',
        borderRadius:24,
        paddingTop:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    categoty_container:{
        flex: 1, 
        width: '100%',
        alignItems:'center'
    },
    category_list_head:{
        width: '100%',  
        alignItems: 'center', 
        justifyContent: 'center', 

    },
    category_line:{
        width:'100%',
        height:1,
        backgroundColor:'#efefef',
        margin:6

    },
    category_item_container:{
        width: '100%', 
        height: 24,
        margin:12, 
        justifyContent: 'center', 
        alignItems: 'center'
    }





})
export default styles;
