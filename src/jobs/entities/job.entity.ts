import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { AreaType } from '../../lib/enums/area-type.enum';
import { JobType } from '../../lib/enums/job-type.enum';
import { SeniorityLevel } from '../../lib/enums/seniority-level.enum';

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

	@Column({ enum: JobType })
	@ApiProperty({ enum: JobType })
	jobType: JobType;

	@Column({ enum: AreaType })
	@ApiProperty({ enum: AreaType })
	areaType: AreaType;

	@Column({ enum: SeniorityLevel })
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
