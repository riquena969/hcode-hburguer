import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { columnCreatedAt, columnId, columnUpdatedAt } from '../columns';

export class Products1646350102086 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          columnId,
          {
            name: 'value',
            type: 'decimal',
            length: '8,2',
            isNullable: false,
          },
          {
            name: 'order_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'bread_id',
            type: 'int',
            isNullable: false,
          },
          columnCreatedAt,
          columnUpdatedAt,
        ],
        foreignKeys: [
          {
            columnNames: ['order_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'orders',
            name: 'FK_orders_products',
          },
          {
            columnNames: ['bread_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'breads',
            name: 'FK_breads_products',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
