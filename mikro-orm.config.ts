import { defineConfig } from "@mikro-orm/sqlite";
import { EntityA } from "./entities/EntityA";
import { EntityB } from "./entities/EntityB";

export default defineConfig({
  entities: [EntityA, EntityB],
  debug: true,
  dbName: 'test.sqlite'
});
