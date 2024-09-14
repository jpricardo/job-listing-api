import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';

@Module({
	imports: [JobsModule],
	providers: [AppService],
})
export class AppModule {}
