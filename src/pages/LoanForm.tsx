import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoanForm() {
  const [sum, setSum] = useState<number>(200);
  const [period, setPeriod] = useState<number>(10);

  const handleSubmit = () => {};
  return (
    <>
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
          <Link to={'#'}>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', height: '50px' }}>
              Подать заявку
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default LoanForm;
