export function managePresents(state = {numberOfPresents: 0}, action){
    return {...state, numberOfPresents: action.type === "INCREASE" ? state.numberOfPresents +1 : state.numberOfPresents}
}
