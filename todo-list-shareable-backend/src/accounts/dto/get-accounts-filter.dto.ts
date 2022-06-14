import { IsOptional, IsString} from "class-validator";

export class GetAccountsFilterDto {
    @IsOptional()
    @IsString()
    search?: string
}