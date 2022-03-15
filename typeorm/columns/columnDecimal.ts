import { TableColumnOptions } from 'typeorm';

/**
 * Cria uma coluna de banco de dados do tipo decimal
 * @param name Nome da coluna
 * @param precision Número de casa da parte inteira, valor padrão 10
 * @param scale Número de casa decimais valor padrão 2
 * @param isNullable A coluna pode ser nula? falor padrão false
 * @returns column
 */
export function columnDecimal(
  name: string,
  precision = 10,
  scale = 2,
  isNullable = false,
) {
  const column = {
    name,
    type: 'decimal',
    precision,
    scale,
    isNullable,
  } as TableColumnOptions;

  return column;
}
