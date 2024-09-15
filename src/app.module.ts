import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { AuthModule } from './auth/auth.module';
import { Job } from './jobs/entities/job.entity';
import { JobsModule } from './jobs/jobs.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.DB_HOST,
			port: +process.env.DB_PORT,
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			entities: [Job, User],
			synchronize: true,
		}),

		AuthModule,
		JobsModule,
		UsersModule,
	],
})
export class AppModule {
	constructor(private dataSource: DataSource) {}
}
