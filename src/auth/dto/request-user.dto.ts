import { PickType } from '@nestjs/swagger';

import { User } from '../../users/entities/user.entity';

export class RequestUserDto extends PickType(User, ['id', 'username', 'isActive', 'role']) {}
