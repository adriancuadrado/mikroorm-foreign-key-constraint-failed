# SQLITE_CONSTRAINT: FOREIGN KEY constraint failed

https://github.com/mikro-orm/mikro-orm/issues/6779

Run these commands to replicate the error:

```
npm install
npx mikro-orm schema:fresh --run
npx ts-node create.ts
npx ts-node delete.ts
```

This is the output that you should get in the console:
```
$ npx ts-node delete.ts
[info] MikroORM version: 6.4.16
[discovery] ORM entity discovery started, using ReflectMetadataProvider
[discovery] - processing entity EntityA
[discovery] - processing entity EntityB
[discovery] - entity discovery finished, found 2 entities, took 14 ms
[query] select name as table_name from sqlite_master where type = 'table' and name != 'sqlite_sequence' and name != 'geometry_columns' and name != 'spatial_ref_sys' union all select name as table_name from sqlite_temp_master where type = 'table' order by name [took 0 ms, 2 results]
[info] MikroORM successfully connected to database test.sqlite
[query] select `e0`.* from `entity_a` as `e0` [took 1 ms, 1 result]
[query] begin
[query] delete from `entity_a` where `uuid` in ('247857bd-a46d-4b12-95f8-f838ac5fcfae') [took 2 ms]
[query] rollback
/workspaces/codespaces-blank/node_modules/@mikro-orm/sqlite/SqliteExceptionConverter.js:50
            return new core_1.ForeignKeyConstraintViolationException(exception);
                   ^
ForeignKeyConstraintViolationException: delete from `entity_a` where `uuid` in ('247857bd-a46d-4b12-95f8-f838ac5fcfae') - SQLITE_CONSTRAINT: FOREIGN KEY constraint failed
    at SqliteExceptionConverter.convertException (/workspaces/codespaces-blank/node_modules/@mikro-orm/sqlite/SqliteExceptionConverter.js:50:20)
    at SqliteDriver.convertException (/workspaces/codespaces-blank/node_modules/@mikro-orm/core/drivers/DatabaseDriver.js:351:54)
    at /workspaces/codespaces-blank/node_modules/@mikro-orm/core/drivers/DatabaseDriver.js:355:24
    at async ChangeSetPersister.executeDeletes (/workspaces/codespaces-blank/node_modules/@mikro-orm/core/unit-of-work/ChangeSetPersister.js:67:13)
    at async ChangeSetPersister.runForEachSchema (/workspaces/codespaces-blank/node_modules/@mikro-orm/core/unit-of-work/ChangeSetPersister.js:80:13)
    at async UnitOfWork.commitDeleteChangeSets (/workspaces/codespaces-blank/node_modules/@mikro-orm/core/unit-of-work/UnitOfWork.js:857:9)
    at async UnitOfWork.persistToDatabase (/workspaces/codespaces-blank/node_modules/@mikro-orm/core/unit-of-work/UnitOfWork.js:770:13)
    at async SqliteConnection.transactional (/workspaces/codespaces-blank/node_modules/@mikro-orm/knex/AbstractSqlConnection.js:58:25)
    at async UnitOfWork.doCommit (/workspaces/codespaces-blank/node_modules/@mikro-orm/core/unit-of-work/UnitOfWork.js:314:17)
    at async UnitOfWork.commit (/workspaces/codespaces-blank/node_modules/@mikro-orm/core/unit-of-work/UnitOfWork.js:287:13)

 {
  code: 'SQLITE_CONSTRAINT',
  errno: 19,
  sqlState: undefined,
  sqlMessage: undefined,
  errmsg: undefined
}
```
