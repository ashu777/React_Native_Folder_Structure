/**
 * Copyright 2022  https://github.com/ashu777, Inc. All rights reserved.
 */

import Api from './Api';

export const login = async (phone:number,password:any) =>{
    const body = {
        phone,password
    };
    return await Api({
        method:'POST',
        url:'/user/login',
        data:body,
    }).then(res => {
        return res;
     });
};
