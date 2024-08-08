import { Route, Routes } from 'react-router';
import PersonalDatatForm from '../pages/PersonalDatatForm';
import LoanForm from '../pages/LoanForm';
import AdressForm from '../pages/AdressForm';

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PersonalDatatForm />} />
        <Route path="/adress-form" element={<AdressForm />} />
        <Route path="/loan-form" element={<LoanForm />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
