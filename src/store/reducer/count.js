const initial_state = {
    count: 0
}



const countreducer = (state = initial_state, action) => {

    switch (action.type) {
        case 'increament': {
            return {
                count: action.payload
            }
        }
        case 'decrement': {
            return {
                count: action.payload
            }
        }
        // default:
        //     break;
        default: {
            return state
        }
    }

}

export default countreducer