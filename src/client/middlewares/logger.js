/**
 * Created by sourabh on 9/5/17.
 */

export const logger = (store) => (next) => (action) => {
    console.log(action.type);
    next(action);
};