import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../lib/decorators/roles.decorator';
import { Role } from '../lib/enums/role.enum';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import { JobsService } from './jobs.service';

@ApiTags('jobs')
@ApiBearerAuth()
@Controller('jobs')
@UseGuards(JwtAuthGuard, RolesGuard)
export class JobsController {
	constructor(private readonly jobsService: JobsService) {}

	@Post()
	@ApiResponse({ type: Job })
	create(@Body() createJobDto: CreateJobDto) {
		return this.jobsService.create(createJobDto);
	}

	@Get()
	@ApiResponse({ type: [Job] })
	findAll() {
		return this.jobsService.findAll();
	}

	@Get(':id')
	@ApiResponse({ type: Job })
	findOne(@Param('id') id: number) {
		return this.jobsService.findOne(id);
	}

	@Patch(':id')
	update(@Param('id') id: number, @Body() updateJobDto: UpdateJobDto) {
		return this.jobsService.update(id, updateJobDto);
	}

	@Delete(':id')
	@Roles(Role.ADMIN)
	remove(@Param('id') id: number) {
		return this.jobsService.remove(id);
	}
}
