export const round2 = (n: number) => Math.round(n * 100 + Number.EPSILON) / 100

export const getError = (err: any) => {
    err.response && err.response.data && err.response.data.message ?
        err.response.data.message :
        err.message
}


export const plainObject = (mongoObj: any) => {
    return JSON.parse(JSON.stringify(mongoObj))
}