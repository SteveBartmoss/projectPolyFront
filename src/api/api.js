const BASE_URL = 'http://localhost:3000/api/'

export async function apiFetch(endpoint, options={}){

    const url = `${BASE_URL}${endpoint}`
    
    const defaultOPtions = {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    }

    const response = await fetch(url,defaultOPtions)

    return response
    
}