import { Trainer } from "./trainer";

export class Project {
	id!:number;
	title!:string;
	description!:string;
	organizer!:string;
	period!:string;
	place!:string;
	trainersSet!:Trainer[];
}
