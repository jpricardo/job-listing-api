import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
	constructor(
		@InjectRepository(Job)
		private usersRepository: Repository<Job>,
	) {}

	async create(createJobDto: CreateJobDto) {
		return this.usersRepository.save(createJobDto);
	}

	async findAll() {
		return await this.usersRepository.find();
	}

	async findOne(id: number) {
		return await this.usersRepository.findOneBy({ id });
	}

	async update(id: number, updateJobDto: UpdateJobDto) {
		return await this.usersRepository.update(id, updateJobDto);
	}

	async remove(id: number) {
		return await this.usersRepository.delete(id);
	}
}
