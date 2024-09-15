import { ApiProperty } from '@nestjs/swagger';
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
	@ApiProperty({ readOnly: true })
	id: number;

	@Column()
	@ApiProperty()
	title: string;

	@Column()
	@ApiProperty({ default: '' })
	shortDescription: string;

	@Column()
	@ApiProperty({ default: '' })
	description: string;

	@Column()
	@ApiProperty({ enum: JobType })
	jobType: JobType;

	@Column()
	@ApiProperty({ enum: AreaType })
	areaType: AreaType;

	@Column()
	@ApiProperty({ enum: SeniorityLevel })
	seniorityLevel: SeniorityLevel;

	@Column()
	@ApiProperty({ minimum: 0 })
	annualSalary: number;

	@CreateDateColumn()
	@ApiProperty({ readOnly: true })
	createdAt: Date;

	// @Column({ array: true })
	// @ApiProperty({ default: [] })
	// tags: string[];
}
