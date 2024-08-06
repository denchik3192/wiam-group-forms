import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCategory } from '../api/categoryAPI';
import Loader from '../components/Loader';

function AdressForm() {
  const [workPlaces, setWorkPlaces] = useState<string[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    navigate('/loan-form');
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1>Адрес и место работы</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '30px' }}>
          <label>Место работы</label>
          <select
            defaultValue="place"
            className="form-select"
            aria-label="Default select example"
            style={{ marginBottom: '20px' }}
            required>
            {workPlaces?.map((workplace: string, index: number) => (
              <option value={index}>{workplace}</option>
            ))}
          </select>
        </div>

        <div className="form-group" style={{ marginBottom: '10px' }}>
          <label htmlFor="exampleInputPassword1">Адрес проживания</label>
          <input
            type="text"
            className="form-control"
            id="adress"
            placeholder="Адрес проживания"
            required
          />
        </div>

        <Link to={'/'}>
          <button type="submit" className="btn btn-secondary">
            Назад
          </button>
        </Link>

        <button type="submit" className="btn btn-primary">
          Далее
        </button>
      </form>
    </>
  );
}

export default AdressForm;
