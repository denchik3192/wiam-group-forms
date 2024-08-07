
export async function getCategories() {
    try {
        const response = await fetch('https://dummyjson.com/products/category-list');
        const data = response.json()
        return data
    } catch {
        console.error('Failed');
    }
}

// export const postFormsData = async () => {
//     try {
//         fetch('https://dummyjson.com/products/add', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 "title": data.personalData.name + ' ' + data.personalData.lastName
//             })
//         })
//             .then(res => res.json())
//             .then(console.log);
//     } catch {
//         console.error('Failed');

//     }
// }

