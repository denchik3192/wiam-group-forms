import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoanForm() {
  const [prise, setPrise] = useState<number>(200);
  const [period, setPeriod] = useState<number>(1);
  return (
    <>
      <h1>Параметры займа</h1>
      <form>
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
            value={prise}
            onChange={(e: any) => {
              setPrise(e.target.value);
            }}
          />
          <span>${prise}</span>
        </div>
        <div className="form-group" style={{ marginBottom: '10px' }}>
          <label htmlFor="customRange2" className="form-label">
            Срок займа
          </label>
          <input
            type="range"
            className="form-range"
            min="1"
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
            className="btn btn-secondary"
            style={{ width: '100%', height: '50px' }}>
            Подать заявку
          </button>
        </Link>
      </form>
    </>
  );
}

export default LoanForm;
