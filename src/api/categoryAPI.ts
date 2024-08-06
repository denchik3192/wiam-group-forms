
export const getCategory = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products/category-list');
        const data = response.json()
        return data
    } catch {
        console.error('Failed');

    }
}

