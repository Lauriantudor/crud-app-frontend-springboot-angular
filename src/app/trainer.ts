import { Project } from "./project";

export class Trainer {
	 id!: number;
	 name!: string;
	 email!: string;
	 institution!: string;
	 phoneNumber!: string;
	 assignedProjects!: Project[];
}
