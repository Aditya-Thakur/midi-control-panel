import * as actionTypes from '../action';
const initialState={
    top_bar:true,
    side_bar:true,
    loginpage:true,
    log_out:false,
    isRegpage:false,
    recover_pass : false,
    footer : true,
    authentication:false,
    user_id:null,
    notification_count:0,
    notification_list:[]
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case actionTypes.TOP_BAR:
        return{
            ...state,
            top_bar:!state.top_bar
        };
        case actionTypes.SIDE_BAR:
        return{
            ...state,
            side_bar:!state.side_bar
        };
        case actionTypes.LOGINPAGE:
        return{
            ...state,
            loginpage:action.value
        };
        case actionTypes.LOG_OUT:
        return{
            ...state,
            log_out:action.value
        };
        case actionTypes.REG_PAGE:
        return{
            ...state,
            isRegpage:!state.isRegpage
        };
        case actionTypes.SWITCHTOLOGIN:
        return{
            ...state,
           isRegpage:!state.isRegpage,
           
        };
        case actionTypes.SWITCHTOREG:
        return{
            ...state,
            isRegpage:!state.isRegpage
        };
        case actionTypes.RECOVER_PASS:
        return{
            ...state,
            recover_pass:!state.recover_pass
        };
        case actionTypes.FOOTER:
        return{
            ...state,
            footer:!state.footer
        };
        case actionTypes.AUTH:
        return{
            ...state,
            authentication:action.value
        };
        case actionTypes.USER_ID:
        return{
            ...state,
            user_id:action.value
        };
        case actionTypes.NOTIFICATION_COUNT:
        return{
            ...state,
            notification_count:action.value
        };
        case actionTypes.NOTIFICATION_LIST:
        return{
            ...state,
            notification_list:action.value
        };
        default :
        return state;
    }

}

export default reducer;