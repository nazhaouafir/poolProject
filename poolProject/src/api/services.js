import { Text, View } from 'react-native'
import React from 'react'
import instance from '.';
import * as SecureStore from 'expo-secure-store';

export async function getProduct(){
    try {
        const res = await instance.get('/api/product');
        return res.data.products;
    } catch (err) {
        return console.error(err);
    }
}
export async function getProblems(){
    try{
        const res = await instance.get('/api/problem');
        return res.data.problems;
    } catch(err){
        return console.error(err)
    }
}
export async function problemItem(problem){
    try{
      let token =await SecureStore.getItemAsync('token')
     instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const res = await instance.get(`/api/problem/${problem}`);
        return res.data.problem;
    } catch(err){
        return console.error(err)
    }
} 
export async function productItem(product){
    try{
        let token = await SecureStore.getItemAsync('token')
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const res = await instance.get(`/api/product/${product}`);
            return res.data.product
    } catch(err){
        return console.error(err)
    }
}
export async function category(category){
    try{
        let token = await SecureStore.getItemAsync('token')
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const res = await instance.get(`/api/category/${category}`);

            return res.data.category
    } catch(err){
        return console.error(err)
    }
}
export async function getAdresses(token){
    try{
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const res = await  instance.get('/api/user');
            return res.data.user.infos
    } catch(err){
        return console.error(err)
    }
}
export async function getUser(token){
    try{
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const res = await  instance.get('/api/user');
            return res.data.user
    }catch(err){
        return console.error(err)

    }
}
export async function editUser(token){
    try{
        
    }catch(err){

    }
}