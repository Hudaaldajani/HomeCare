import { JobParagraph } from './jobParagraph';
import { Category } from './category';

export class Job{
    cols:number;
    rows:number;
    id:string;
    name:string;
    image:string;
    category:Category["category"];
    categoryname:Category["categoryname"];
    categoryimage:Category["categoryimage"];
    price:number;
    title: string;
    paragraphs: JobParagraph[];
}