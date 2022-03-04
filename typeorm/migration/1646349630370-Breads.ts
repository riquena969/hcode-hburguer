import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { columnCreatedAt, columnId, columnUpdatedAt } from '../columns';

export class Breads1646349630374 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'breads',
        columns: [
          columnId,
          {
            name: 'name',
            type: 'varchar',
            length: '120',
            isNullable: false,
          },
          {
            name: 'value',
            type: 'decimal',
            length: '8,2',
            isNullable: false,
          },
          columnCreatedAt,
          columnUpdatedAt,
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('itens');
  }
}
