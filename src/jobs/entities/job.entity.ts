import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

@Entity()
export class Job {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	title: string;
	@Column()
	shortDescription: string;
	@Column()
	description: string;

	@Column()
	jobType: JobType;
	@Column()
	areaType: AreaType;
	@Column()
	seniorityLevel: SeniorityLevel;
	@Column()
	annualSalary: number;
	@CreateDateColumn()
	createdAt: Date;
	// @Column({ array: true })
	// tags: string[];
}
