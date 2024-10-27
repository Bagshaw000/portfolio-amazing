export interface HeaderProps{
    heading: string,
    quote?:{
        authorQuote: string,
        author:string
    },
    subheading?:string|null

}

export interface IBlogPost {
    _id:string,
    author:string,
    body: string,
    title: string,
    categories: Array<BlogCategories>,
    mainImage: Image,
    publishedAt: Date,
    slug: Slug


}

interface BlogCategories {
    _key: string,
    _ref:string,
    _type: string
}

interface Image {
 asset: Assets
}

interface Assets {
    _id:string,
    url: string
}
interface Slug {
    current: string
}