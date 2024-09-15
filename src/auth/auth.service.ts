import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

import { UsersService } from '../users/users.service';
import { JwtUserDto } from './dto/jwt-user.dto';
import { RequestUserDto } from './dto/request-user.dto';

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService,
	) {}

	async validateUser(username: string, pass: string) {
		const user = await this.usersService.findOne(username);

		if (user && (await compare(pass, user.password))) {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { password, ...result } = user;
			return result;
		}

		return null;
	}

	async login(user: RequestUserDto) {
		const payload = { username: user.username, sub: user.id, role: user.role } as JwtUserDto;
		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
