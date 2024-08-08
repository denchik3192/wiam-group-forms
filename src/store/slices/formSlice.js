import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getItems = createAsyncThunk('forms/fetchCategories', async (_, rejectedWithValue) => {
  try {
    const response = await fetch('https://dummyjson.com/products/category-list');
    console.log(response);

    return response.json();
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  personalData: {
    phone: '',
    name: '',
    lastName: '',
    gender: '',
  },
  adressData: {
    categories: [],
    workPlace: 'beauty',
    adress: '',
  },
  loanData: {
    loan: 200,
    period: 1,
  },
  status: 'loading',
  error: '',
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setPersonalData(state, action) {
      (state.personalData.phone = action.payload.phone),
        (state.personalData.name = action.payload.name),
        (state.personalData.lastName = action.payload.lastName),
        (state.personalData.gender = action.payload.gender);
    },
    setAdressData(state, action) {
      (state.adressData.workPlace = action.payload.workPlace),
        (state.adressData.adress = action.payload.adress);
    },
    setLoan(state, action) {
      (state.loanData.loan = action.payload.loan), (state.loanData.period = action.payload.period);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state) => {
      state.status = 'loading';
      state.adressData.categories = [];
    });
    builder.addCase(getItems.fulfilled, (state, action) => {
      console.log(action.payload);

      state.status = 'sucsess';
      state.adressData.categories = action.payload;
    });
    builder.addCase(getItems.rejected, (state) => {
      state.status = 'rejected';
      state.adressData.categories = [];
    });
  },
});

export const { setPersonalData, setAdressData, setLoan } = formSlice.actions;
export default formSlice.reducer;
