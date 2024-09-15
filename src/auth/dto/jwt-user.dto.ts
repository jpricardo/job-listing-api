import { PickType } from '@nestjs/swagger';

import { User } from '../../users/entities/user.entity';

export class JwtUserDto extends PickType(User, ['username', 'role']) {
	sub: number;
}
