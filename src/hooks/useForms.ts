import { useEffect, useReducer, useState } from "react"

function reducer(state, action) {
    console.log(action);

    switch (action.type) {
        case 'set_personal_data':
            return {
                ...state, personalData: {
                    ...state.personalData,
                    phone: action.phone,
                    name: action.name,
                    lastName: action.lastName,
                    gender: action.gender,
                }
            }


        case 'set_adress':
            return {
                ...state, adress: {
                    ...state.adress,
                    workPlace: action.workPlace,
                    adress: action.adress
                }
            }

        // case 'set_loan': {
        // return {
        //     state: action.nextName,
        //     age: state.age
        // };
        // }
        // }

    }
}

const initialState = {
    personalData: {
        phone: null,
        name: null,
        lastName: null,
        gender: null
    },
    adress: {
        workPlace: null,
        adress: null
    },
    loan: {
        loan: 200,
        period: 1
    }
};

export const useForms = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [categories, setCategories] = useState<any>()

    useEffect(() => {

    }, [])
    return {
        categories, state, dispatch
    }
}