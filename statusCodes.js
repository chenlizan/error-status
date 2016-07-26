/**
 * Created by chenlizan on 16-7-12.
 */

'use strict';

module.exports = {

    Continue: {
        code: 100,
        message: {
            en: "Continue",
            chs: "继续请求"
        }
    },

    Switching_Protocols: {
        code: 101,
        message: {
            en: "Switching Protocols",
            chs: "切换协议"
        }
    },

    Processing: {
        code: 102,
        message: {
            en: "Processing",
            chs: "继续执行"
        }
    },

    OK: {
        code: 200,
        message: {
            en: "OK",
            chs: "请求成功"
        }
    },

    Created: {
        code: 201,
        message: {
            en: "Created",
            chs: "已创建"
        }
    },

    Accepted: {
        code: 202,
        message: {
            en: "Accepted",
            chs: '已接受'
        }
    },

    Non_authoritative_Information: {
        code: 203,
        message: {
            en: "Non-authoritative Information",
            chs: '非授权信息'
        }
    },

    No_Content: {
        code: 204,
        message: {
            en: "No Content",
            chs: "无内容"
        }
    },

    Reset_Content: {
        code: 205,
        message: {
            en: "Reset Content",
            chs: "重置内容"
        }
    },

    Partial_Content: {
        code: 206,
        message: {
            en: "Partial Content",
            chs: "部分内容"
        }
    },

    Multi_Status: {
        code: 207,
        message: {
            en: "Multi-Status",
            chs: "多状态"
        }
    },

    Already_Reported: {
        code: 208,
        message: {
            en: "Already Reported",
            chs: "已应答"
        }
    },

    IM_Used: {
        code: 266,
        message: {
            en: "IM Used",
            chs: "使用实例"
        }
    },

    Multiple_Choices: {
        code: 300,
        message: {
            en: "Multiple Choices",
            chs: "多种选择"
        }
    },

    Moved_Permanently: {
        code: 301,
        message: {
            en: "Moved Permanently",
            chs: "永久移动"
        }
    },

    Move_temporarily: {
        code: 302,
        message: {
            en: "Move temporarily",
            chs: "临时移动"
        }
    },

    See_Other: {
        code: 303,
        message: {
            en: "See Other",
            chs: "查看其他位置"
        }
    },

    Not_Modified: {
        code: 304,
        message: {
            en: "Not Modified",
            chs: "未修改"
        }
    },

    Use_Proxy: {
        code: 305,
        message: {
            en: "Use Proxy",
            chs: "使用代理"
        }
    },

    Temporary_Redirect: {
        code: 307,
        message: {
            en: "Temporary Redirect",
            chs: "临时重定向"
        }
    },

    Permanent_Redirect: {
        code: 308,
        message: {
            en: "Permanent Redirect",
            chs: "永久重定向"
        }
    },

    Bad_Request: {
        code: 400,
        message: {
            en: "Bad Request",
            chs: "错误请求"
        }
    },

    Unauthorized: {
        code: 401,
        message: {
            en: "Unauthorized",
            chs: "未授权"
        }
    },

    Payment_Required: {
        code: 402,
        message: {
            en: "Payment Required",
            chs: "支付请求"
        }
    },

    Forbidden: {
        code: 403,
        message: {
            en: "Forbidden",
            chs: "禁止"
        }
    },

    Not_Found: {
        code: 404,
        message: {
            en: "Not Found",
            chs: "未找到"
        }
    },

    Method_Not_Allowed: {
        code: 405,
        message: {
            en: "Method Not Allowed",
            chs: "方法禁用"
        }
    },

    Not_Acceptable: {
        code: 406,
        message: {
            en: "Not Acceptable",
            chs: "不接受"
        }
    },

    Proxy_Authentication_Required: {
        code: 407,
        message: {
            en: "Proxy Authentication Required",
            chs: "需要代理授权"
        }
    },

    Request_Timeout: {
        code: 408,
        message: {
            en: "Request Timeout",
            chs: "请求超时"
        }
    },

    Conflict: {
        code: 409,
        message: {
            en: "Conflict",
            chs: "冲突"
        }
    },

    Gone: {
        code: 410,
        message: {
            en: "Gone",
            chs: "已删除"
        }
    },

    Length_Required: {
        code: 411,
        message: {
            en: "Length Required",
            chs: "需要有效长度"
        }
    },

    Precondition_Failed: {
        code: 412,
        message: {
            en: "Precondition Failed",
            chs: "未满足前提条件"
        }
    },

    Payload_Too_Large: {
        code: 413,
        message: {
            en: "Payload Too Large",
            chs: "请求实体过大"
        }
    },

    Request_URI_Too_Long: {
        code: 414,
        message: {
            en: "Request-URI Too Long",
            chs: "请求的 URI 过长"
        }
    },

    Unsupported_Media_Type: {
        code: 415,
        message: {
            en: "Unsupported Media Type",
            chs: "不支持的媒体类型"
        }
    },

    Requested_Range_Not_Satisfiable: {
        code: 416,
        message: {
            en: "Requested Range Not Satisfiable",
            chs: "请求范围不符合要求"
        }
    },

    Expectation_Failed: {
        code: 417,
        message: {
            en: "Expectation Failed",
            chs: "未满足期望值"
        }
    },

    I_am_a_teapot: {
        code: 418,
        message: {
            en: "I'm a teapot",
            chs: "我是一个茶罐"
        }
    },

    Misdirected_Request: {
        code: 421,
        message: {
            en: "Misdirected Request",
            chs: "错误的请求"
        }
    },

    Unprocessable_Entity: {
        code: 422,
        message: {
            en: "Unprocessable Entity",
            chs: "无法处理的实体"
        }
    },

    Locked: {
        code: 423,
        message: {
            en: "Locked",
            chs: "当前资源被锁定"
        }
    },

    Failed_Dependency: {
        code: 424,
        message: {
            en: "Failed Dependency",
            chs: "依赖失败"
        }
    },

    Upgrade_Required: {
        code: 426,
        message: {
            en: "Upgrade Required",
            chs: "请求升级"
        }
    },

    Precondition_Required: {
        code: 428,
        message: {
            en: "Precondition Required",
            chs: "要求先决条件"
        }
    },

    Too_Many_Requests: {
        code: 429,
        message: {
            en: "Too Many Requests",
            chs: "太多请求"
        }
    },

    Request_Header_Fields_Too_Large: {
        code: 431,
        message: {
            en: "Request Header Fields Too Large",
            chs: "请求头字段太大"
        }
    },

    Connection_Closed_Without_Response: {
        code: 444,
        message: {
            en: "Connection Closed Without Response",
            chs: "无响应连接关闭"
        }
    },

    Unavailable_For_Legal_Reasons: {
        code: 451,
        message: {
            en: "Unavailable For Legal Reasons",
            chs: "由于法律原因而无效"
        }
    },

    Client_Closed_Request: {
        code: 499,
        message: {
            en: "Client Closed Request",
            chs: "客户端关闭请求"
        }
    },

    Internal_Server_Error: {
        code: 500,
        message: {
            en: "Internal Server Error",
            chs: "服务器内部错误"
        }
    },

    Not_Implemented: {
        code: 501,
        message: {
            en: "Not Implemented",
            chs: "尚未实施"
        }
    },

    Bad_Gateway: {
        code: 502,
        message: {
            en: "Bad Gateway",
            chs: "错误网关"
        }
    },

    Service_Unavailable: {
        code: 503,
        message: {
            en: "Service Unavailable",
            chs: "服务不可用"
        }
    },

    Gateway_Timeout: {
        code: 504,
        message: {
            en: "Gateway Timeout",
            chs: "网关超时"
        }
    },

    HTTP_Version_Not_Supported: {
        code: 505,
        message: {
            en: "HTTP Version Not Supported",
            chs: "HTTP 版本不受支持"
        }
    },

    Variant_Also_Negotiates: {
        code: 506,
        message: {
            en: "Variant Also Negotiates",
            chs: "透明内容协商协议"
        }
    },

    Insufficient_Storage: {
        code: 507,
        message: {
            en: "Insufficient Storage",
            chs: "存储空间不足"
        }
    },

    Loop_Detected: {
        code: 508,
        message: {
            en: "Loop Detected",
            chs: "环路检查"
        }
    },

    Not_Extended: {
        code: 510,
        message: {
            en: "Not Extended",
            chs: "没有扩展"
        }
    },

    Network_Authentication_Required: {
        code: 511,
        message: {
            en: "Network Authentication Required",
            chs: "要求网络认证"
        }
    },

    Network_Connect_Timeout_Error: {
        code: 599,
        message: {
            en: "Network Connect Timeout Error",
            chs: "网络连接超时错误"
        }
    }
}

