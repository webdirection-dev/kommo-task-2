export interface IObject { [key: string]: string }

export interface IProduct {
    name: string
    slug: string
    category: string
    image: string
    imageMini: string
    price: number
    brand: string
    rating: number
    numReviews: number
    countInStock: number
    description: string
    isFeatured?: boolean
    banner?: string
    quantityThisProduct?: number
    localId?: string
}
