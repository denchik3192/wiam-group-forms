export const postFormsData = async (data) => {
  try {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: data.name + ' ' + data.lastName,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  } catch {
    console.error('Failed');
  }
};
