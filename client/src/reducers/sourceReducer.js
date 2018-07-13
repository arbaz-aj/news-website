var k = {
    sources:[]
};
const sourceReducer = (state=k.sources, action) => {
    switch (action.type) {
        case "ADD":       
        state = {
            ...state,           
            sources: action.payload
        };            
        break;
         default:
         state = {
            ...state,           
        }; 
        break;
    }
    return state;
};

export default sourceReducer;