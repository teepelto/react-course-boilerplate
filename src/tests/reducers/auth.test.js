import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = '123';

    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
    const uid = '123';
    
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid }, action);
    expect(state).toEqual({});
});
