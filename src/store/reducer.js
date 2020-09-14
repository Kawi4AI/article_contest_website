import * as actionTypes from './actions'

const initialState = {lan : "en"}

const reducer = ( state = initialState, action) =>{

   switch(action.type){ 
       case actionTypes.CHANGE_LANGUAGE :
            const lan = action.lan === "mm" ? "en" : "mm"
            return {lan} 
   }
   return state
}

export default reducer