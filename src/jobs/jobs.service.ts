import { Injectable } from '@nestjs/common';

import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
	private jobList: Job[] = [];

	create(createJobDto: CreateJobDto) {
		const id = this.jobList.length + 1;
		this.jobList.push({ id, ...createJobDto });

		return id;
	}

	findAll() {
		return this.jobList;
	}

	findOne(id: number) {
		return this.jobList.find((job) => job.id === id);
	}

	update(id: number, updateJobDto: UpdateJobDto) {
		const targetJob = this.jobList.find((job) => job.id === id);
		Object.assign(targetJob, updateJobDto);

		return targetJob;
	}

	remove(id: number) {
		this.jobList.filter((job) => job.id !== id);
		return;
	}
}
