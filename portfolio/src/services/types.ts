export interface HeaderProps {
  heading: string;
  quote?: {
    authorQuote: string;
    author: string;
  };
  subheading?: string | null;
 
  
}

export interface IBlogPost {
  _id: string;
  author: string;
  body: Array<IBody>;
  title: string;
  categories: Array<BlogCategories>;
  mainImage: Image;
  publishedAt: Date;
  slug: Slug;
  tag: Array<string>;
}

interface IBody {
  _key: string;
  image: Image;
  subtitle: string;
  body: string;
}

interface BlogCategories {
  _key: string;
  _ref: string;
  _type: string;
}

interface Image {
  asset: Assets;
}

interface Assets {
  _id: string;
  url: string;
}
interface Slug {
  current: string;
}

export interface IProject {
  _id: string;
  title: string;
  images: Array<Image>;
  client: string;
  category: string;
  duration: number;
  tools: Array<string>;
  overview: string;
  comment: Array<IComment>;
}

export interface IImages {
  _id: string;
  header: Image;
  service: Array<Image>;
  profile: Image;
}

export interface IComment {
  name: string;
  email: string;
  comment: string;
  publishedAt: Date;
  reply?: Array<IComment>;
  replyTo?: string;
  _key?: string;
}

export interface ICommentArray {
  comment: Array<IComment>;
}

export interface IProjectImage {
  images: Array<{ url: string }>;
}

export interface IClientEnquiry {
  fname?: string;
  lname?: string;
  email: string;
  message?: string;
  category?: string;
}

export interface IBlogPostReply {
  replyTo: string;
  commentKey: string;
  isReply: boolean;
}

export interface ITestimonial {
  title: string;
  comment: string;
}
