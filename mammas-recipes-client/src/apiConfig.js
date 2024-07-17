let apiUrl
const apiUrls = {
    production: 'http://localhost:8000/api',
    development: 'http://localhost:8000/api',
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl