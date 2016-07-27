/**
 * Created by chenlizan on 16-7-12.
 */

'use strict';

module.exports = {

    Continue: {
        code: 100,
        message: {
            statusCode:100001,
            en: "Continue",
            zh: "继续请求"
        }
    },

    Switching_Protocols: {
        code: 101,
        message: {
            statusCode:101001,
            en: "Switching Protocols",
            zh: "切换协议"
        }
    },

    Processing: {
        code: 102,
        message: {
            statusCode:102001,
            en: "Processing",
            zh: "继续执行"
        }
    },

    OK: {
        code: 200,
        message: {
            statusCode:200001,
            en: "OK",
            zh: "请求成功"
        }
    },

    Created: {
        code: 201,
        message: {
            statusCode:201001,
            en: "Created",
            zh: "已创建"
        }
    },

    Accepted: {
        code: 202,
        message: {
            statusCode:202001,
            en: "Accepted",
            zh: '已接受'
        }
    },

    Non_authoritative_Information: {
        code: 203,
        message: {
            statusCode:203001,
            en: "Non-authoritative Information",
            zh: '非授权信息'
        }
    },

    No_Content: {
        code: 204,
        message: {
            statusCode:204001,
            en: "No Content",
            zh: "无内容"
        }
    },

    Reset_Content: {
        code: 205,
        message: {
            statusCode:205001,
            en: "Reset Content",
            zh: "重置内容"
        }
    },

    Partial_Content: {
        code: 206,
        message: {
            statusCode:206001,
            en: "Partial Content",
            zh: "部分内容"
        }
    },

    Multi_Status: {
        code: 207,
        message: {
            statusCode:207001,
            en: "Multi-Status",
            zh: "多状态"
        }
    },

    Already_Reported: {
        code: 208,
        message: {
            statusCode:208001,
            en: "Already Reported",
            zh: "已应答"
        }
    },

    IM_Used: {
        code: 266,
        message: {
            statusCode:266001,
            en: "IM Used",
            zh: "使用实例"
        }
    },

    Multiple_Choices: {
        code: 300,
        message: {
            statusCode:300001,
            en: "Multiple Choices",
            zh: "多种选择"
        }
    },

    Moved_Permanently: {
        code: 301,
        message: {
            statusCode:301001,
            en: "Moved Permanently",
            zh: "永久移动"
        }
    },

    Move_temporarily: {
        code: 302,
        message: {
            statusCode:302001,
            en: "Move temporarily",
            zh: "临时移动"
        }
    },

    See_Other: {
        code: 303,
        message: {
            statusCode:303001,
            en: "See Other",
            zh: "查看其他位置"
        }
    },

    Not_Modified: {
        code: 304,
        message: {
            statusCode:304001,
            en: "Not Modified",
            zh: "未修改"
        }
    },

    Use_Proxy: {
        code: 305,
        message: {
            statusCode:305001,
            en: "Use Proxy",
            zh: "使用代理"
        }
    },

    Temporary_Redirect: {
        code: 307,
        message: {
            statusCode:307001,
            en: "Temporary Redirect",
            zh: "临时重定向"
        }
    },

    Permanent_Redirect: {
        code: 308,
        message: {
            statusCode:308001,
            en: "Permanent Redirect",
            zh: "永久重定向"
        }
    },

    Bad_Request: {
        code: 400,
        message: {
            statusCode:400001,
            en: "Bad Request",
            zh: "错误请求"
        }
    },

    Unauthorized: {
        code: 401,
        message: {
            statusCode:401001,
            en: "Unauthorized",
            zh: "未授权"
        }
    },

    Payment_Required: {
        code: 402,
        message: {
            statusCode:402001,
            en: "Payment Required",
            zh: "支付请求"
        }
    },

    Forbidden: {
        code: 403,
        message: {
            statusCode:403001,
            en: "Forbidden",
            zh: "禁止"
        }
    },

    Not_Found: {
        code: 404,
        message: {
            statusCode:404001,
            en: "Not Found",
            zh: "未找到"
        }
    },

    Method_Not_Allowed: {
        code: 405,
        message: {
            statusCode:405001,
            en: "Method Not Allowed",
            zh: "方法禁用"
        }
    },

    Not_Acceptable: {
        code: 406,
        message: {
            statusCode:406001,
            en: "Not Acceptable",
            zh: "不接受"
        }
    },

    Proxy_Authentication_Required: {
        code: 407,
        message: {
            statusCode:407001,
            en: "Proxy Authentication Required",
            zh: "需要代理授权"
        }
    },

    Request_Timeout: {
        code: 408,
        message: {
            statusCode:408001,
            en: "Request Timeout",
            zh: "请求超时"
        }
    },

    Conflict: {
        code: 409,
        message: {
            statusCode:409001,
            en: "Conflict",
            zh: "冲突"
        }
    },

    Gone: {
        code: 410,
        message: {
            statusCode:410001,
            en: "Gone",
            zh: "已删除"
        }
    },

    Length_Required: {
        code: 411,
        message: {
            statusCode:411001,
            en: "Length Required",
            zh: "需要有效长度"
        }
    },

    Precondition_Failed: {
        code: 412,
        message: {
            statusCode:412001,
            en: "Precondition Failed",
            zh: "未满足前提条件"
        }
    },

    Payload_Too_Large: {
        code: 413,
        message: {
            statusCode:413001,
            en: "Payload Too Large",
            zh: "请求实体过大"
        }
    },

    Request_URI_Too_Long: {
        code: 414,
        message: {
            statusCode:414001,
            en: "Request-URI Too Long",
            zh: "请求的 URI 过长"
        }
    },

    Unsupported_Media_Type: {
        code: 415,
        message: {
            statusCode:415001,
            en: "Unsupported Media Type",
            zh: "不支持的媒体类型"
        }
    },

    Requested_Range_Not_Satisfiable: {
        code: 416,
        message: {
            statusCode:416001,
            en: "Requested Range Not Satisfiable",
            zh: "请求范围不符合要求"
        }
    },

    Expectation_Failed: {
        code: 417,
        message: {
            statusCode:417001,
            en: "Expectation Failed",
            zh: "未满足期望值"
        }
    },

    I_am_a_teapot: {
        code: 418,
        message: {
            statusCode:418001,
            en: "I'm a teapot",
            zh: "我是一个茶罐"
        }
    },

    Misdirected_Request: {
        code: 421,
        message: {
            statusCode:421001,
            en: "Misdirected Request",
            zh: "错误的请求"
        }
    },

    Unprocessable_Entity: {
        code: 422,
        message: {
            statusCode:422001,
            en: "Unprocessable Entity",
            zh: "无法处理的实体"
        }
    },

    Locked: {
        code: 423,
        message: {
            statusCode:423001,
            en: "Locked",
            zh: "当前资源被锁定"
        }
    },

    Failed_Dependency: {
        code: 424,
        message: {
            statusCode:424001,
            en: "Failed Dependency",
            zh: "依赖失败"
        }
    },

    Upgrade_Required: {
        code: 426,
        message: {
            statusCode:426001,
            en: "Upgrade Required",
            zh: "请求升级"
        }
    },

    Precondition_Required: {
        code: 428,
        message: {
            statusCode:428001,
            en: "Precondition Required",
            zh: "要求先决条件"
        }
    },

    Too_Many_Requests: {
        code: 429,
        message: {
            statusCode:429001,
            en: "Too Many Requests",
            zh: "太多请求"
        }
    },

    Request_Header_Fields_Too_Large: {
        code: 431,
        message: {
            statusCode:431001,
            en: "Request Header Fields Too Large",
            zh: "请求头字段太大"
        }
    },

    Connection_Closed_Without_Response: {
        code: 444,
        message: {
            statusCode:444001,
            en: "Connection Closed Without Response",
            zh: "无响应连接关闭"
        }
    },

    Unavailable_For_Legal_Reasons: {
        code: 451,
        message: {
            statusCode:451001,
            en: "Unavailable For Legal Reasons",
            zh: "由于法律原因而无效"
        }
    },

    Client_Closed_Request: {
        code: 499,
        message: {
            statusCode:449001,
            en: "Client Closed Request",
            zh: "客户端关闭请求"
        }
    },

    Internal_Server_Error: {
        code: 500,
        message: {
            statusCode:500001,
            en: "Internal Server Error",
            zh: "服务器内部错误"
        }
    },

    Not_Implemented: {
        code: 501,
        message: {
            statusCode:501001,
            en: "Not Implemented",
            zh: "尚未实施"
        }
    },

    Bad_Gateway: {
        code: 502,
        message: {
            statusCode:502001,
            en: "Bad Gateway",
            zh: "错误网关"
        }
    },

    Service_Unavailable: {
        code: 503,
        message: {
            statusCode:503001,
            en: "Service Unavailable",
            zh: "服务不可用"
        }
    },

    Gateway_Timeout: {
        code: 504,
        message: {
            statusCode:504001,
            en: "Gateway Timeout",
            zh: "网关超时"
        }
    },

    HTTP_Version_Not_Supported: {
        code: 505,
        message: {
            statusCode:505001,
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
        message: {
            statusCode:507001,
            en: "Insufficient Storage",
            zh: "存储空间不足"
        }
    },

    Loop_Detected: {
        code: 508,
        message: {
            statusCode:508001,
            en: "Loop Detected",
            zh: "环路检查"
        }
    },

    Not_Extended: {
        code: 510,
        message: {
            statusCode:510001,
            en: "Not Extended",
            zh: "没有扩展"
        }
    },

    Network_Authentication_Required: {
        code: 511,
        message: {
            statusCode:511001,
            en: "Network Authentication Required",
            zh: "要求网络认证"
        }
    },

    Network_Connect_Timeout_Error: {
        code: 599,
        message: {
            statusCode:599001,
            en: "Network Connect Timeout Error",
            zh: "网络连接超时错误"
        }
    }
}

