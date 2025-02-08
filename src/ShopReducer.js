 export const initialState = {
    products:[],
    total:0
 };

 export const reducer = (state,action) =>{
    const {type,payload} = action;
    switch(type){

        case "AddItem":
            return ({...state,products:payload});
        case "UpdateQuantity":
                return ({...state,products:payload});
        case "RemoveItem":
             return ({...state,products:payload});
        case "CalculateTotal":
             return ({...state,total:payload});
        case "ClearCart":
            return initialState;

       default:
        throw new Error("unknown reducer action");
            

    }
 }