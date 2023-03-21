import { IsString, IsUUID, IsOptional } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly brand?: string;
    
    @IsString()
    @IsOptional()
    readonly model?: string;

    // @IsString()
    // @MinLength(3)
    // readonly model: string;

}
