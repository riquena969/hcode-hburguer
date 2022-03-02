import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { columnId, columnCreatedAt, columnUpdatedAt } from "../columns";

export class Users1646260829119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [columnId, {
                name: 'name',
                type: 'varchar',
                length: '120',
                isNullable: false
            }, {
                    name: 'email',
                    type: 'varchar',
                    length: '120',
                    isNullable: false
                }, {
                    name: 'password',
                    type: 'varchar',
                    length: '120',
                    isNullable: false
                }, {
                    name: 'user_type',
                    type: 'enum',
                    enum: ['client', 'admin'],
                    default: '"client"'
                }, {
                    name: 'street',
                    type: 'varchar',
                    length: '120',
                    isNullable: true
                }, {
                    name: 'number',
                    type: 'varchar',
                    length: '120',
                    isNullable: true
                }, {
                    name: 'complement',
                    type: 'varchar',
                    length: '120',
                    isNullable: true
                }, {
                    name: 'district',
                    type: 'varchar',
                    length: '120',
                    isNullable: true
                }, {
                    name: 'city',
                    type: 'varchar',
                    length: '120',
                    isNullable: true
                }, {
                    name: 'uf',
                    type: 'varchar',
                    length: '120',
                    isNullable: true
                }, {
                    name: 'zipcode',
                    type: 'varchar',
                    length: '120',
                    isNullable: true
                },
                columnCreatedAt,
                columnUpdatedAt]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}