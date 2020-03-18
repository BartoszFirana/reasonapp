import fetch from 'cross-fetch';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const removeItem = (itemType, id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: {
            itemType,
            id,
        },
    };
};

export const fetchItems = itemType => dispatch => {
    dispatch({ type: FETCH_REQUEST });

    return fetch('https://www.reasonapps.pl/data.json')
        .then(response => {
            if (response.status >= 400) {
                throw new Error('Bad response fu server');
            }
            return response.json();
        })
        .then(({ data }) => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: {
                    data,
                    itemType,
                },
            });
        })
        .catch(err => {
            console.log(err);
        });
};
