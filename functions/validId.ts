import { BadRequestException } from "@nestjs/common";

export function validId(id: number) {
    id = Number(id);
    if (isNaN(id)) {
        throw new BadRequestException('ID inválido');
    }
    return id;
}