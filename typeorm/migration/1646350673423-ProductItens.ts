import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { columnCreatedAt, columnId, columnUpdatedAt } from '../columns';

export class ProductItens1646350673423 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product_itens',
        columns: [
          columnId,
          {
            name: 'product_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'item_id',
            type: 'int',
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
        foreignKeys: [
          {
            columnNames: ['product_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'products',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            name: 'FK_product_itens_products',
          },
          {
            columnNames: ['item_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'itens',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            name: 'FK_product_itens_itens',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product_itens');
  }
}
