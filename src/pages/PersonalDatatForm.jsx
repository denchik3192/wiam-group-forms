import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItems, setPersonalData } from '../store/slices/formSlice';
import { useDispatch, useSelector } from 'react-redux';

function PersonalDatatForm() {
  const { personalData } = useSelector((state) => state.forms);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState(personalData.phone);
  const [name, setName] = useState(personalData.name);
  const [lastName, setLastName] = useState(personalData.lastName);
  const [gender, setGender] = useState(personalData.gender);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(
      setPersonalData({
        phone: phone,
        name: name,
        lastName: lastName,
        gender: gender,
      }),
    );
    navigate('adress-form');
  };

  const handlePhoneInputChange = (e) => {
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
      <div className="formWrapper">
        <h1>Личные данные</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label htmlFor="exampleInputEmail1">Телефон</label>
            <input
              onChange={handlePhoneInputChange}
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
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
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
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group" style={{ marginBottom: '30px' }}>
            <label>Пол</label>
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ marginBottom: '20px' }}
              required
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}>
              <option value="Мужской">Мужской</option>
              <option value="Женский">Женский</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', height: '50px' }}>
            Далее
          </button>
        </form>
      </div>
    </>
  );
}

export default PersonalDatatForm;
