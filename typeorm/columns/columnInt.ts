import { TableColumnOptions } from "typeorm";

/**
 * Cria uma coluna de banco de dados do tipo inteiro
 * @param name Nome da coluna
 * @param isNullable A coluna pode ser nula? falor padrão false
 * @returns column
 */
export function columnInt(name: string,isNullable = false) {
    const column = {
        name,
        type: "int",
        isNullable,
    } as TableColumnOptions

    return column;
}