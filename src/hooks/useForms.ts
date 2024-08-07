import { useEffect, useReducer, useState } from "react"
import { getCategories, postFormsData } from "../api/formsAPI";

function reducer(state, action) {

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

        case 'set_loan': {
            return {
                loan: action.nextName,
                period: state.age
            };
        }
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
    const [categories, setCategories] = useState<string[]>([])
    const [isSucsess, setIsSucsess] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCategories();
                setCategories(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const sendData = () => {
        postFormsData(state)
    }

    return {
        categories, state, dispatch, sendData, isSucsess
    }
}