import {combineReducers, bindActionCreators} from 'redux';

const data=(state={},action)=>{
    switch(action.type){
        case('submit'):
            return {
                result:action.pyaload
            }
        default:
        return state;

    }
}

const allReducers=combineReducers({
data,
})


export default allReducers;