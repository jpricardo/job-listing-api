import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { Job } from './jobs/entities/job.entity';
import { JobsModule } from './jobs/jobs.module';

ConfigModule.forRoot();

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.DB_HOST,
			port: +process.env.DB_PORT,
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			entities: [Job],
			synchronize: true,
		}),

		JobsModule,
	],
})
export class AppModule {
	constructor(private dataSource: DataSource) {}
}
