
const prod = {
    url: "http://localhost:3000/"
}

const dev = {
    url: "http://myheroku.app/"
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;