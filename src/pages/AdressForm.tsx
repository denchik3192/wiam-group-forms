import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

function AdressForm({ state, dispatch, categories }) {
  const [activeWorkPlace, setActiveWorkPlace] = useState<string>('');
  const [adress, setAdress] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch({
      type: 'set_adress',
      workPlace: activeWorkPlace,
      adress: adress,
    });
    navigate('adress-form');
  };

  if (isLoading) {
    return <Loader />;
  }

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
              {categories?.map((workplace: string, index: number) => (
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
              onChange={(e) => setAdress(e.target.value)}
              required
            />
          </div>
          <div className="button-block">
            <Link to={'/'}>
              <button type="submit" className="btn btn-secondary">
                Назад
              </button>
            </Link>
            <Link to={'/loan-form'}>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary"
                style={{ width: '100%', marginLeft: '10px' }}>
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
