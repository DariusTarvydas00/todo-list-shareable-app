import {IsNotEmpty} from "class-validator";

export class SendFriendRequestDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    sharedWith: string;
}