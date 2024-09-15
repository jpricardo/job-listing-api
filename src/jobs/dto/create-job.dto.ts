import { OmitType } from '@nestjs/swagger';

import { Job } from '../entities/job.entity';

export class CreateJobDto extends OmitType(Job, ['id', 'createdAt']) {}
