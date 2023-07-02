import { Project } from "./project";

export class Participant {
	id!: number;
	name!: string;
	email!: string;
	phoneNumber!: string;
	lastSchool!: string;
	participantsProjects!:Project[];
}
