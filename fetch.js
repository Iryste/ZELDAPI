const apiUrl = 'https://zelda.fanapis.com/api/games';

export async function fetchData(path) {
    const options = {
        method: 'GET',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    }
    const result = await fetch(`${apiUrl}${path}`, options)
    if (result.ok) {
        return result.json();
    } else {
        throw new Error('Erreur', {cause:result});
    };
};