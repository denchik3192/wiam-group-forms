import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCategory } from '../api/formsAPI';
import Loader from '../components/Loader';

function AdressForm({ state, dispatch, categories }) {
  const [workPlaces, setWorkPlaces] = useState<string[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  console.log(state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getCategory();
        setWorkPlaces(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // const handleSubmit = () => {
  //   navigate('/loan-form');
  // };

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
              required>
              {workPlaces?.map((workplace: string, index: number) => (
                <option key={index} value={index}>
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
              required
            />
          </div>
          <div style={{ display: 'flex', flex: '1 0 auto' }}>
            <Link to={'/'}>
              <button type="submit" className="btn btn-secondary">
                Назад
              </button>
            </Link>
            <Link to={'/loan-form'}>
              <button
                type="submit"
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
