/**
 * Created by chenlizan on 16-7-12.
 */

'use strict';

module.exports = {

    Continue: {
        code: 100,
        statusCode:100001,
        message: {
            en: "Continue",
            zh: "继续请求"
        }
    },

    Switching_Protocols: {
        code: 101,
        statusCode:101001,
        message: {
            en: "Switching Protocols",
            zh: "切换协议"
        }
    },

    Processing: {
        code: 102,
        statusCode:102001,
        message: {
            en: "Processing",
            zh: "继续执行"
        }
    },

    OK: {
        code: 200,
        statusCode:200001,
        message: {
            en: "OK",
            zh: "请求成功"
        }
    },

    Created: {
        code: 201,
        statusCode:201001,
        message: {
            en: "Created",
            zh: "已创建"
        }
    },

    Accepted: {
        code: 202,
        statusCode:202001,
        message: {
            en: "Accepted",
            zh: '已接受'
        }
    },

    Non_authoritative_Information: {
        code: 203,
        statusCode:203001,
        message: {
            en: "Non-authoritative Information",
            zh: '非授权信息'
        }
    },

    No_Content: {
        code: 204,
        statusCode:204001,
        message: {
            en: "No Content",
            zh: "无内容"
        }
    },

    Reset_Content: {
        code: 205,
        statusCode:205001,
        message: {
            en: "Reset Content",
            zh: "重置内容"
        }
    },

    Partial_Content: {
        code: 206,
        statusCode:206001,
        message: {
            en: "Partial Content",
            zh: "部分内容"
        }
    },

    Multi_Status: {
        code: 207,
        statusCode:207001,
        message: {
            en: "Multi-Status",
            zh: "多状态"
        }
    },

    Already_Reported: {
        code: 208,
        statusCode:208001,
        message: {
            en: "Already Reported",
            zh: "已应答"
        }
    },

    IM_Used: {
        code: 266,
        statusCode:266001,
        message: {
            en: "IM Used",
            zh: "使用实例"
        }
    },

    Multiple_Choices: {
        code: 300,
        statusCode:300001,
        message: {
            en: "Multiple Choices",
            zh: "多种选择"
        }
    },

    Moved_Permanently: {
        code: 301,
        statusCode:301001,
        message: {
            en: "Moved Permanently",
            zh: "永久移动"
        }
    },

    Move_temporarily: {
        code: 302,
        statusCode:302001,
        message: {
            en: "Move temporarily",
            zh: "临时移动"
        }
    },

    See_Other: {
        code: 303,
        statusCode:303001,
        message: {
            en: "See Other",
            zh: "查看其他位置"
        }
    },

    Not_Modified: {
        code: 304,
        statusCode:304001,
        message: {
            en: "Not Modified",
            zh: "未修改"
        }
    },

    Use_Proxy: {
        code: 305,
        statusCode:305001,
        message: {
            en: "Use Proxy",
            zh: "使用代理"
        }
    },

    Temporary_Redirect: {
        code: 307,
        statusCode:307001,
        message: {
            en: "Temporary Redirect",
            zh: "临时重定向"
        }
    },

    Permanent_Redirect: {
        code: 308,
        statusCode:308001,
        message: {
            en: "Permanent Redirect",
            zh: "永久重定向"
        }
    },

    Bad_Request: {
        code: 400,
        statusCode:400001,
        message: {
            en: "Bad Request",
            zh: "错误请求"
        }
    },

    Unauthorized: {
        code: 401,
        statusCode:401001,
        message: {
            en: "Unauthorized",
            zh: "未授权"
        }
    },

    Payment_Required: {
        code: 402,
        statusCode:402001,
        message: {
            en: "Payment Required",
            zh: "支付请求"
        }
    },

    Forbidden: {
        code: 403,
        statusCode:403001,
        message: {
            en: "Forbidden",
            zh: "禁止"
        }
    },

    Not_Found: {
        code: 404,
        statusCode:404001,
        message: {
            en: "Not Found",
            zh: "未找到"
        }
    },

    Method_Not_Allowed: {
        code: 405,
        statusCode:405001,
        message: {
            en: "Method Not Allowed",
            zh: "方法禁用"
        }
    },

    Not_Acceptable: {
        code: 406,
        statusCode:406001,
        message: {
            en: "Not Acceptable",
            zh: "不接受"
        }
    },

    Proxy_Authentication_Required: {
        code: 407,
        statusCode:407001,
        message: {
            en: "Proxy Authentication Required",
            zh: "需要代理授权"
        }
    },

    Request_Timeout: {
        code: 408,
        statusCode:408001,
        message: {
            en: "Request Timeout",
            zh: "请求超时"
        }
    },

    Conflict: {
        code: 409,
        statusCode:409001,
        message: {
            en: "Conflict",
            zh: "冲突"
        }
    },

    Gone: {
        code: 410,
        statusCode:410001,
        message: {
            en: "Gone",
            zh: "已删除"
        }
    },

    Length_Required: {
        code: 411,
        statusCode:411001,
        message: {
            en: "Length Required",
            zh: "需要有效长度"
        }
    },

    Precondition_Failed: {
        code: 412,
        statusCode:412001,
        message: {
            en: "Precondition Failed",
            zh: "未满足前提条件"
        }
    },

    Payload_Too_Large: {
        code: 413,
        statusCode:413001,
        message: {
            en: "Payload Too Large",
            zh: "请求实体过大"
        }
    },

    Request_URI_Too_Long: {
        code: 414,
        statusCode:414001,
        message: {
            en: "Request-URI Too Long",
            zh: "请求的 URI 过长"
        }
    },

    Unsupported_Media_Type: {
        code: 415,
        statusCode:415001,
        message: {
            en: "Unsupported Media Type",
            zh: "不支持的媒体类型"
        }
    },

    Requested_Range_Not_Satisfiable: {
        code: 416,
        statusCode:416001,
        message: {
            en: "Requested Range Not Satisfiable",
            zh: "请求范围不符合要求"
        }
    },

    Expectation_Failed: {
        code: 417,
        statusCode:417001,
        message: {
            en: "Expectation Failed",
            zh: "未满足期望值"
        }
    },

    I_am_a_teapot: {
        code: 418,
        statusCode:418001,
        message: {
            en: "I'm a teapot",
            zh: "我是一个茶罐"
        }
    },

    Misdirected_Request: {
        code: 421,
        statusCode:421001,
        message: {
            en: "Misdirected Request",
            zh: "错误的请求"
        }
    },

    Unprocessable_Entity: {
        code: 422,
        statusCode:422001,
        message: {
            en: "Unprocessable Entity",
            zh: "无法处理的实体"
        }
    },

    Locked: {
        code: 423,
        statusCode:423001,
        message: {
            en: "Locked",
            zh: "当前资源被锁定"
        }
    },

    Failed_Dependency: {
        code: 424,
        statusCode:424001,
        message: {
            en: "Failed Dependency",
            zh: "依赖失败"
        }
    },

    Upgrade_Required: {
        code: 426,
        statusCode:426001,
        message: {
            en: "Upgrade Required",
            zh: "请求升级"
        }
    },

    Precondition_Required: {
        code: 428,
        statusCode:428001,
        message: {
            en: "Precondition Required",
            zh: "要求先决条件"
        }
    },

    Too_Many_Requests: {
        code: 429,
        statusCode:429001,
        message: {
            en: "Too Many Requests",
            zh: "太多请求"
        }
    },

    Request_Header_Fields_Too_Large: {
        code: 431,
        statusCode:431001,
        message: {
            en: "Request Header Fields Too Large",
            zh: "请求头字段太大"
        }
    },

    Connection_Closed_Without_Response: {
        code: 444,
        statusCode:444001,
        message: {
            en: "Connection Closed Without Response",
            zh: "无响应连接关闭"
        }
    },

    Unavailable_For_Legal_Reasons: {
        code: 451,
        statusCode:451001,
        message: {
            en: "Unavailable For Legal Reasons",
            zh: "由于法律原因而无效"
        }
    },

    Client_Closed_Request: {
        code: 499,
        statusCode:449001,
        message: {
            en: "Client Closed Request",
            zh: "客户端关闭请求"
        }
    },

    Internal_Server_Error: {
        code: 500,
        statusCode:500001,
        message: {
            en: "Internal Server Error",
            zh: "服务器内部错误"
        }
    },

    Not_Implemented: {
        code: 501,
        statusCode:501001,
        message: {
            en: "Not Implemented",
            zh: "尚未实施"
        }
    },

    Bad_Gateway: {
        code: 502,
        statusCode:502001,
        message: {
            en: "Bad Gateway",
            zh: "错误网关"
        }
    },

    Service_Unavailable: {
        code: 503,
        statusCode:503001,
        message: {
            en: "Service Unavailable",
            zh: "服务不可用"
        }
    },

    Gateway_Timeout: {
        code: 504,
        statusCode:504001,
        message: {
            en: "Gateway Timeout",
            zh: "网关超时"
        }
    },

    HTTP_Version_Not_Supported: {
        code: 505,
        statusCode:505001,
        message: {
            en: "HTTP Version Not Supported",
            zh: "HTTP 版本不受支持"
        }
    },

    Variant_Also_Negotiates: {
        code: 506,
        statusCode:506001,
        message: {
            en: "Variant Also Negotiates",
            zh: "透明内容协商协议"
        }
    },

    Insufficient_Storage: {
        code: 507,
        statusCode:507001,
        message: {
            en: "Insufficient Storage",
            zh: "存储空间不足"
        }
    },

    Loop_Detected: {
        code: 508,
        statusCode:508001,
        message: {
            en: "Loop Detected",
            zh: "环路检查"
        }
    },

    Not_Extended: {
        code: 510,
        statusCode:510001,
        message: {
            en: "Not Extended",
            zh: "没有扩展"
        }
    },

    Network_Authentication_Required: {
        code: 511,
        statusCode:511001,
        message: {
            en: "Network Authentication Required",
            zh: "要求网络认证"
        }
    },

    Network_Connect_Timeout_Error: {
        code: 599,
        statusCode:599001,
        message: {
            en: "Network Connect Timeout Error",
            zh: "网络连接超时错误"
        }
    }
}

