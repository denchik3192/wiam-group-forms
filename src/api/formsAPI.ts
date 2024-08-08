
export const postFormsData = async (data) => {
    try {
        const res = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "title": data.name + ' ' + data.lastName
            })
        })
        return console.log(res.json());

    } catch {
        console.error('Failed');

    }
}

