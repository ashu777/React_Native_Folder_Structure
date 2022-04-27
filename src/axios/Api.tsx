/**
 * Copyright 2022  https://github.com/ashu777, Inc. All rights reserved.
 */

import axios from "axios";

export const URL ='https://yoururl.com/';

const Api = async (config:any) =>{
    const token ='vvfvv';
    if(token){
        config.headers={
            authorization:token
        };
    }
    axios.interceptors.response.use(
        response =>{
            return response;
        },
        function(error){
            if(!error.response){
                error.response={
                    data:'network error',
                    status:500,
                };
            }
            if(error.response.status === 401){
                console.log('Un Authorised');
            }
            return Promise.reject(error);
        },
    );
    config.baseURL=URL;
    return axios(config);
};

export default Api;




