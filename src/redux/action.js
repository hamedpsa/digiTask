import {SET_TOKEN,SET_MOVIE_DATA,SET_CATEGORY_DATA,SHOW_DIALOG,SHOW_INDICATOR} from './ACTION_TYPES';
import { callApi, } from '../services/baseApi';
import { GetMoviesConfig, SearchMoviesConfig, GetCategoriesConfig,SelectGategoryConfig } from '../services/configs';
import store from './store';

const setToken  = (token)=>({type:SET_TOKEN,payload:token});

const setMovieData = (data)=>({type:SET_MOVIE_DATA,payload:data});

const setCategoryData = (data)=>({type:SET_CATEGORY_DATA,payload:data});

const showDialog = (visibile)=>({type:SHOW_DIALOG,payload: visibile});

const showIndicator = (visibile)=>({type:SHOW_INDICATOR,payload: visibile});

const getAllMovieItems = ()=> async ()=>{
    store.dispatch(showIndicator(true));
    let response = await callApi(GetMoviesConfig());
    console.log(store.getState().inidicatorVisibility)
    console.log(response.data);
    if (response?.status === 200) {
        store.dispatch(setMovieData(response.data));

    }
    store.dispatch(showIndicator(false));


}
const searchMovieItems = (q)=> async ()=>{
    store.dispatch(showIndicator(true));

    let response = await callApi(SearchMoviesConfig(q));
    console.log(response.data);
    if (response?.status === 200) {
       store.dispatch(setMovieData(response.data));
    }
    store.dispatch(showIndicator(false));


}
const getAllCategories = ()=> async ()=>{
    let response = await callApi(GetCategoriesConfig());
    console.log(response.data);
    if (response?.status === 200) {
       store.dispatch(setCategoryData(response.data));
    }

}
const filterWithTag = (tag)=> async ()=>{
    store.dispatch(showIndicator(true));
    let response = await callApi(SelectGategoryConfig(tag));
    console.log(response.data);
    if (response?.status === 200) {
       store.dispatch(setMovieData(response.data));
    }
    store.dispatch(showIndicator(false));


}

export{setToken,getAllMovieItems,searchMovieItems,getAllCategories,showDialog,filterWithTag}