const apiUrl = 'https://zelda.fanapis.com/api/games';

export async function fetchData() {
    const options = {
        method: 'GET',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Last-Modified': 'application/json',
            'Cache-Control': 'application/json',
            'Expires': 'application/json',
            'Pragma': 'application/json'
        },
        body: JSON.stringify()
    }
    const result = await fetch(`${apiUrl}`, options)
    if (result.ok) {
        console.log(result)
        return result.json();
    } else {
        throw new Error('Erreur', {cause:result});
    };
};

// export async function fetchData(route, method = 'GET', data) {
//     const options = {
//         method: method,
//         headers: { 
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: data ? JSON.stringify(data) : data,
//     }
//     // Changer apiUrl par apiUrlD si utilisation de Docker
//     const result = await fetch(`${apiUrl}${route}`, options);
//     if (result.ok) {
//         return result.json();
//     }
//     throw new Error('Erreur serveur', { cause: result });
// }

