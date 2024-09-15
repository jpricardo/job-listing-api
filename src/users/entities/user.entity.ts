import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcrypt';
import { Column, Entity, PrimaryGeneratedColumn, ValueTransformer } from 'typeorm';

import { Role } from '../../lib/enums/role.enum';

const passwordTransformer: ValueTransformer = {
	// We probablye should use more salt rounds on a real app, but it would be overkill on this one
	// Hash it before writing to the Database
	to: (value: string) => hashSync(value, 10),
	// We just read it normally
	from: (value: string) => value,
};

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	@ApiProperty({ readOnly: true })
	id: number;

	@Column({ unique: true })
	@ApiProperty({ readOnly: true })
	username: string;

	@Column({ transformer: passwordTransformer })
	@ApiProperty({ readOnly: true })
	password: string;

	@Column({ default: true })
	@ApiProperty({ readOnly: true })
	isActive: boolean;

	@Column({ enum: Role })
	@ApiProperty({ enum: Role })
	role: Role;
}
