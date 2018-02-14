/**
 * Created by chenlizan on 2018/2/14.
 */

module.exports = {

    User_Has_Registered: {
        code: 202,
        statusCode: 202001,
        message: "用户已被注册"
    },

    Phone_Has_Registered: {
        code: 202,
        statusCode: 202002,
        message: "手机已被注册"
    },

    Password_Invalid: {
        code: 202,
        statusCode: 202003,
        message: "原始密码无效"
    },

    Phone_Format_Error: {
        code: 202,
        statusCode: 202007,
        message: "手机格式不对"
    },

    Verify_Code_Error: {
        code: 202,
        statusCode: 202008,
        message: "验证码错误"
    },

    Unauthorized: {
        code: 401,
        statusCode: 401001,
        message: "未授权"
    },

    Unauthorized_Operation: {
        code: 401,
        statusCode: 401002,
        message: "无此操作权限"
    },

    User_Or_Password_Error: {
        code: 403,
        statusCode: 403001,
        message: "用户名或密码无效"
    },

    Not_Found:{
        code: 404,
        statusCode: 404001,
        message: "未找到"
    },

    Network_Error:{
        code: 500,
        statusCode: 500001,
        message: "网络错误"
    },

    Parameter_Error: {
        code: 501,
        statusCode: 501001,
        message: "参数错误"
    },

};
