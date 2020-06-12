import { Job } from './job';

job: Job;

export class Request {
    firstname: string;//L1 name + abbr
    lastname: string;
    telnum:number;
    email:string;
    requestedservicename:Job;
}

