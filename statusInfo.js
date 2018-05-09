/**
 * Created by chenlizan on 2018/2/14.
 */

module.exports = {

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

    Not_Found: {
        code: 404,
        statusCode: 404001,
        message: "未找到"
    },

    Network_Error: {
        code: 500,
        statusCode: 500001,
        message: "网络错误"
    },

    Parameter_Error: {
        code: 501,
        statusCode: 501001,
        message: "参数错误"
    }

};
