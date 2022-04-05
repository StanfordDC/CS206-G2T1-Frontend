import {
    SHOW_LOADER,
    SET_STORED_BID,
    SET_BUSINESS_NAME,
    SET_STORED_CID,
    SET_CUSTOMER_NAME,
} from '../types';

export const setLoader = value => {
    return async dispatch => {
        dispatch({
            type: SHOW_LOADER,
            payload: value,
        });
    };
};

export const setStoredBID = value => {
    return async dispatch => {
        dispatch({
            type: SET_STORED_BID,
            payload: value,
        });
    };
};

export const setBusinessName = value => {
    return async dispatch => {
        dispatch({
            type: SET_BUSINESS_NAME,
            payload: value,
        });
    };
};

export const setStoredCID = value => {
    return async dispatch => {
        dispatch({
            type: SET_STORED_CID,
            payload: value,
        });
    };
};

export const setCustomerName = value => {
    return async dispatch => {
        dispatch({
            type: SET_CUSTOMER_NAME,
            payload: value,
        });
    };
};