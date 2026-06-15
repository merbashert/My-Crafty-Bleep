const jsonHeaders = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
}

const handleResponse = (response, errorMessage) => {
    if (!response.ok) {
        throw new Error(errorMessage)
    }

    return response.json()
}

export const apiGet = (url, errorMessage) => {
    return fetch(url).then(response => handleResponse(response, errorMessage))
}

export const apiPost = (url, data, errorMessage) => {
    return fetch(url, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: jsonHeaders
    }).then(response => handleResponse(response, errorMessage))
}

export const apiPut = (url, data, errorMessage) => {
    return fetch(url, {
        body: JSON.stringify(data),
        method: 'PUT',
        headers: jsonHeaders
    }).then(response => handleResponse(response, errorMessage))
}

export const apiDelete = (url, errorMessage) => {
    return fetch(url, {
        method: 'DELETE',
        headers: jsonHeaders
    }).then(response => {
        if (!response.ok) {
            throw new Error(errorMessage)
        }

        return response
    })
}
