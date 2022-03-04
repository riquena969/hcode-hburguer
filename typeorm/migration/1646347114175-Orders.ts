import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { columnCreatedAt, columnId, columnUpdatedAt } from '../columns';

export class Orders1646347114175 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          columnId,
          {
            name: 'user_id',
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
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            name: 'FK_orders_users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
