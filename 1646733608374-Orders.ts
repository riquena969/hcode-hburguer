import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import { columnCreatedAt, columnDecimal, columnId, columnInt, columnUpdatedAt } from "typeorm/columns";

export class Orders1646733608374 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "oreder",
            columns: [
                columnId,
                columnInt("userId"),
                columnDecimal("value"),
                columnCreatedAt,
                columnUpdatedAt,
            ]
        }));

        await queryRunner.createForeignKey("orders", new TableForeignKey({
            columnNames: ["id"],
            referencedColumnNames: ["userId"],
            referencedTableName: "user",
            name: "FK_orders_users",
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("orders", "FK_orders_users");
        await queryRunner.dropTable("orders");
    }

}
