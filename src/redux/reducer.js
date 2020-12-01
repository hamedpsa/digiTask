import {SET_TOKEN,SET_MOVIE_DATA,SET_CATEGORY_DATA,SHOW_DIALOG,SHOW_INDICATOR} from './ACTION_TYPES';

const initialState = {token:null,movieData:null,categoryData:null,dialogVisibility:false,inidicatorVisibility:false}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case SET_TOKEN:
            return{...state,token:action.payload};
        case SET_MOVIE_DATA:
            return{...state,movieData:action.payload};
        case SET_CATEGORY_DATA:
            return{...state,categoryData:action.payload};
        case SHOW_DIALOG:
            return{...state,dialogVisibility:action.payload};
        case SHOW_INDICATOR:
            return{...state,inidicatorVisibility:action.payload};

        default:
            return state;
    }
}

export default reducer;