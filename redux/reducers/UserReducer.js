import {
    SET_STORED_BID,
    SET_BUSINESS_NAME,
    SET_STORED_CID,
    SET_CUSTOMER_NAME,
} from '../types';

const INITIAL_STATE ={
    bid: '',
    name: '',
    cid: '',
    cname: ''
};

export default function(state = INITIAL_STATE, action){
    switch (action.type){
        case SET_STORED_BID:
            return {
                ...state,
                bid: action.payload,
            };

        case SET_BUSINESS_NAME:
            return {
                ...state,
                name: action.payload,
            };

        case SET_STORED_CID:
            return {
                ...state,
                cid: action.payload,
            };

        case SET_CUSTOMER_NAME:
            return {
                ...state,
                cname: action.payload,
            };
        default:
            return state;
    }
}