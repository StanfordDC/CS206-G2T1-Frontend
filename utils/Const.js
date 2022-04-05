//change the ip of your laptop so the phone can connect to both frontend and backend
//format http://ip:8081/
const ip = 'http://192.168.0.26:8081/';

//customer api
const CUSTOMER_LOGIN_API = ip.concat('users/login/');
const GET_ALL_CUSTOMERS_API = ip.concat('get_all_customers');
const CREATE_CUSTOMER_API  = ip.concat('create_customer');

//Business api
const BUSINESS_API = ip.concat('business/');
const BUSINESS_LOGIN_API = ip.concat('business/login/');
const BUSINESS_GET_BY_ID_API = ip.concat('business/bid/');
const BUSINESS_GET_QUEUE_API =ip.concat('business/bid/')

//order api
const ORDER_BUSINESS_API = ip.concat('get_all_order_business/');
const CREATE_ORDER_API = ip.concat('create_order/');

//table api
const SET_TABLE_API = ip.concat('business/table/');

export{
    CUSTOMER_LOGIN_API,
    GET_ALL_CUSTOMERS_API,
    CREATE_CUSTOMER_API,
    BUSINESS_API,
    BUSINESS_LOGIN_API,
    BUSINESS_GET_BY_ID_API,
    BUSINESS_GET_QUEUE_API,
    ORDER_BUSINESS_API,
    SET_TABLE_API,
    CREATE_ORDER_API,
};