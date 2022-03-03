import {
    SHOW_LOADER
} from '../types';

export const setLoader = value => {
    return async dispatch => {
        dispatch({
            type: SHOW_LOADER,
            payload: value,
        });
    };
};