import axios from 'axios';

const BaseUrl = 'https://imdb.hriks.com';

export const AuthConfig = (username,password)=>{
    console.log(username,password)
    let data = JSON.stringify({"username":username,"password":password});
    return{
        method: 'post',
        url: `${BaseUrl}/user/auth-token`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    }
}

export const GetMoviesConfig = ()=>{
    return{
        method: 'get',
        url: `${BaseUrl}/movie/`,
        headers: { }
    }
}
export const SearchMoviesConfig = (q)=>{
    return{
        method: 'get',
        url: `${BaseUrl}/movie/?search=${q}`,
        headers: { }
    }
}
export const GetCategoriesConfig = ()=>{
    return{
        method: 'get',
        url: `${BaseUrl}/category`,
        headers: { }
    }
}
export const SelectGategoryConfig = (tag)=>{
    return{
        method: 'get',
        url: `${BaseUrl}/movie/?tags=${tag}`,
        headers: { }
    }
}