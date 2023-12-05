/**
环境配置文件
一般在企业级项目里面有三个环境
开发环境
测试环境
线上环境
* */

// 当前的环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    development:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/02f9ad5325caf30d39c4fba567b1c76f/api',

    },
    test:{
        baseApi:'//test.future.com/api',
        mockApi:'https://www.fastmock.site/mock/02f9ad5325caf30d39c4fba567b1c76f/api',

    },
    prod:{
        baseApi:'//future.com/api',
        mockApi:'https://www.fastmock.site/mock/02f9ad5325caf30d39c4fba567b1c76f/api',

    },
}

export default {
    env,
    // mock的总开关
    mock:true,
    ...EnvConfig[env]
}