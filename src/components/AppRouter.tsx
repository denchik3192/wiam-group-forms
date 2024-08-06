import { Route, Routes } from 'react-router';
import PersonalDatatForm from '../pages/PersonalDatatForm';
import LoanForm from '../pages/LoanForm';
import AdressForm from '../pages/AdressForm';
import { useForms } from '../hooks/useForms';

function AppRouter() {
  const { state, dispatch, categories } = useForms();
  return (
    <div>
      <Routes>
        <Route path="/" element={<PersonalDatatForm state={state} dispatch={dispatch} />} />
        <Route
          path="/adress-form"
          element={<AdressForm state={state} dispatch={dispatch} categories={categories} />}
        />
        <Route path="/loan-form" element={<LoanForm />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
