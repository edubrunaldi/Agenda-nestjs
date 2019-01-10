import { Controller, Post, Body } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post('join')
    async createUser(@Body() body: UserDto): Promise<any> {
        this.userService.createUser(body);
    }
}
