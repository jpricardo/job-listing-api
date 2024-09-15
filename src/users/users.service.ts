import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Role } from '../lib/enums/role.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
	private readonly users: User[] = [{ id: 1, username: 'maria', password: 'maria', isActive: true, role: Role.USER }];

	private async initializeDb() {
		// Just for development, don't learn from this
		this.usersRepository.save(this.users);
	}

	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) {
		this.initializeDb();
	}

	async create(createUserDto: CreateUserDto) {
		return this.usersRepository.save(createUserDto);
	}

	async findAll() {
		return this.usersRepository.find();
	}

	async findOne(username: string) {
		return this.usersRepository.findOneBy({ username });
	}

	async update(username: string, updateUserDto: UpdateUserDto) {
		return await this.usersRepository.update({ username }, updateUserDto);
	}

	async remove(username: string) {
		return await this.usersRepository.delete({ username });
	}
}
