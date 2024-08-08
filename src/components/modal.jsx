function Modal({ personalData, loanData, setIsModalActive }) {
  console.log(personalData.name);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <div
        style={{
          width: '800px',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          border: '1px solid gray',
          background: 'white',
          borderRadius: '15px',
        }}>
        <h2>
          Поздравляем,{personalData.name} {personalData.lastName}.
        </h2>
        <h3>
          {' '}
          Вам одобрена {loanData.loan} на {loanData.period} день/дней.
        </h3>
      </div>
    </div>
  );
}

export default Modal;
