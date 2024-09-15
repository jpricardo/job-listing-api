import { ApiProperty } from '@nestjs/swagger';

import { AreaType, JobType, SeniorityLevel } from '../entities/job.entity';

export class CreateJobDto {
	@ApiProperty()
	title: string;
	@ApiProperty({ default: '' })
	shortDescription: string;
	@ApiProperty({ default: '' })
	description: string;

	@ApiProperty({ enum: JobType })
	jobType: JobType;
	@ApiProperty({ enum: AreaType })
	areaType: AreaType;
	@ApiProperty({ enum: SeniorityLevel })
	seniorityLevel: SeniorityLevel;
	@ApiProperty()
	annualSalary: number;

	// @ApiProperty({ default: [] })
	// tags: string[];
}
