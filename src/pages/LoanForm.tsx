import { useState } from 'react';
import Modal from '../components/modal';
import { RootState, useAppDispatch } from '../store/store';
import { useSelector } from 'react-redux';
import { postForms, setLoan } from '../store/slices/formSlice';
import { postFormsData } from '../api/formsAPI';

function LoanForm() {
  const { loanData, personalData } = useSelector((state: RootState) => state.forms);
  const dispatch = useAppDispatch();
  const [sum, setSum] = useState<number>(loanData.loan);
  const [period, setPeriod] = useState<number>(loanData.period);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoan({ loan: sum, period: period }));
    postFormsData(personalData);
    setIsModalActive(true);
  };

  return (
    <>
      {isModalActive && (
        <Modal
          personalData={personalData}
          loanData={loanData}
          setIsModalActive={setIsModalActive}
        />
      )}
      <div className="formWrapper">
        <h1>Параметры займа</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label htmlFor="customRange2" className="form-label">
              Cумма займа
            </label>
            <input
              type="range"
              className="form-range"
              min="200"
              max="1000"
              step={100}
              id="sum"
              value={sum}
              required
              onChange={(e: any) => {
                setSum(e.target.value);
              }}
            />
            <span>${sum}</span>
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label htmlFor="customRange2" className="form-label">
              Срок займа (дней)
            </label>
            <input
              type="range"
              className="form-range"
              min="10"
              max="30"
              step={1}
              id="period"
              value={period}
              onChange={(e: any) => {
                setPeriod(e.target.value);
              }}
            />
            <span>{period}</span>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', height: '50px' }}>
            Подать заявку
          </button>
        </form>
      </div>
    </>
  );
}

export default LoanForm;
