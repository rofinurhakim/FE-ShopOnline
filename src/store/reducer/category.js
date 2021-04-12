
import Picture from '../../asset/Picture.svg'
import * as actionTypes from '../reducer/actions'


const initialState = {
    category: [
        {
            id: 1,
            name: 'Sepatu'
        },
        {
            id: 2,
            name: 'Jacket'
        },
        {
            id: 3,
            name: 'Kaos'
        },
        {
            id: 4,
            name: 'Topi'
        }
        
    ]
}

const reducer = (state = initialState, action) => {
    
   
    return state
}

export default reducer
