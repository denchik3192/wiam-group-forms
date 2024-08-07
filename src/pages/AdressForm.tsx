import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { setAdressData } from '../store/slices/formSlice';

function AdressForm() {
  const { adressData } = useSelector((state: RootState) => state.forms);
  const dispatch = useAppDispatch();
  const [activeWorkPlace, setActiveWorkPlace] = useState<string>('beauty');
  const [adress, setAdress] = useState<string>(adressData.adress);
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(setAdressData({ workPlace: activeWorkPlace, adress: adress }));
    navigate('loan-form');
  };

  return (
    <>
      <div className="formWrapper">
        <h1>Адрес и место работы</h1>
        <form>
          <div className="form-group" style={{ marginBottom: '30px' }}>
            <label>Место работы</label>
            <select
              defaultValue="place"
              className="form-select"
              aria-label="Default select example"
              style={{ marginBottom: '20px' }}
              onChange={(e) => setActiveWorkPlace(e.target.value)}
              required>
              {adressData.categories?.map((workplace: string, index: number) => (
                <option key={index} value={workplace}>
                  {workplace}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: '40px' }}>
            <label htmlFor="exampleInputPassword1">Адрес проживания</label>
            <input
              type="text"
              className="form-control"
              id="adress"
              placeholder="Адрес проживания"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', flex: '0 1 auto' }}>
            <Link to={'/'} style={{ width: '100%', marginLeft: '10px' }}>
              <button type="submit" className="btn btn-secondary" style={{ width: '100%' }}>
                Назад
              </button>
            </Link>
            <Link to={'/loan-form'} style={{ width: '100%', marginLeft: '10px' }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={handleSubmit}>
                Далее
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdressForm;
