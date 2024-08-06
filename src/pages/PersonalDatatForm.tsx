import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PersonalDatatForm() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('adress-form');
  };

  const [phone, setPhone] = useState<string>('');

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (phone === '') {
      value = '0' + value;
    }
    if (value.length > 4) {
      value = value.slice(0, 4) + ' ' + value.slice(4);
    }
    if (value.length > 8) {
      value = value.slice(0, 8) + ' ' + value.slice(8, 11);
    }
    setPhone(value);
  };
  return (
    <>
      <h1>Личные данные</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '10px' }}>
          <label htmlFor="exampleInputEmail1">Телефон</label>
          <input
            onChange={handleInputChange}
            value={phone}
            type="tel"
            className="form-control"
            id="phone"
            aria-describedby="emailHelp"
            placeholder="0XXX XXX XXX"
            required
          />
        </div>
        <div className="form-group" style={{ marginBottom: '10px' }}>
          <label htmlFor="exampleInputPassword1">Имя</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Имя"
            required
          />
        </div>
        <div className="form-group" style={{ marginBottom: '10px' }}>
          <label htmlFor="lastname">Фамилия</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Фамилия"
            required
          />
        </div>
        <div className="form-group" style={{ marginBottom: '30px' }}>
          <label>Пол</label>
          <select
            defaultValue="не выбрано"
            className="form-select"
            aria-label="Default select example"
            style={{ marginBottom: '20px' }}
            required>
            <option value="1">Мужской</option>
            <option value="2">Женский</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '50px' }}>
          Далее
        </button>
      </form>
    </>
  );
}

export default PersonalDatatForm;
