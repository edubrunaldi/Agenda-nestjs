import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) {}

    async createUser(userDto: UserDto): Promise<User> {
        const createUser = new this.userModel(userDto);
        return await createUser.save();
    }

}
