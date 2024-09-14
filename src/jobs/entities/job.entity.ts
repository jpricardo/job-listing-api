export enum JobType {
	FULLTIME = 'FullTime',
	HYBRID = 'Hybrid',
	REMOTE = 'Remote',
}

export enum AreaType {
	DEVELOPMENT = 'Development',
	DESIGN = 'Design',
	DEVOPS = 'DevOps',
	QA = 'QA',
	MANAGEMENT = 'Management',
}

export enum SeniorityLevel {
	JUNIOR = 'Junior',
	ASSOCIATE = 'Associate',
	SENIOR = 'Senior',
	LEAD = 'Lead',
}

export class Job {
	id: number;
	title: string;
	shortDescription: string;
	description: string;

	jobType: JobType;
	areaType: AreaType;
	seniorityLevel: SeniorityLevel;
	tags: string[];
}
