import { TableColumnOptions } from 'typeorm';

/**
 * Cria uma coluna de banco de dados do tipo Varchar
 * @param name Nome da coluna
 * @param length Quantidodade de dígitos
 * @param isNullable A coluna pode ser nula? falor padrão false
 * @returns column
 */
export function columnVarchar(
  name: string,
  length: string,
  isNullable = false,
) {
  const column = {
    name,
    type: 'varchar',
    length,
    isNullable,
  } as TableColumnOptions;

  return column;
}
