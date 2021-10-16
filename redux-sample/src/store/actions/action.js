export const counterAction =() =>{
    return{
        type: 'increment_counter'
    }
}

export const counterAction2 =() =>{
    return{
        type: 'increment_value',
        count: 5
    }
}