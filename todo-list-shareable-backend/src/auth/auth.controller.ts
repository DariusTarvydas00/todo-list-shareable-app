import {Body, Controller, Get, Logger, Post} from '@nestjs/common';
import {AuthCredentialsDto} from "./dto/auth-credentials.dto";
import {AuthService} from "./auth.service";
import {Accounts} from "../core/accounts.entity";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {
    }
    @Post('/signup')
    signUp(@Body() authCredentialsDto: AuthCredentialsDto):Promise<void> {
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    signIn(
        @Body() authCredentialsDto: AuthCredentialsDto
    ):Promise<{accessToken:string}> {
        return this.authService.signIn(authCredentialsDto);
    }
}
