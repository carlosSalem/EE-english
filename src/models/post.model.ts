export interface Post {
    body?:string,
    creationTime?:string,
    id?: string,
    image?:PostImage,
    sentence?:string,
    slug?:string,
    title?:string,
    topic?:string,
    updateTime?:string,
    visits?: number
}

export interface PostImage {
    title?:string,
    alt?:string,
    url?:string
}