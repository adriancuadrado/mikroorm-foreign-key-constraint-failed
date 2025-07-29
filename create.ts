import { MikroORM } from '@mikro-orm/sqlite';
import config from "./mikro-orm.config";
import { EntityA } from './entities/EntityA';
import { EntityB } from './entities/EntityB';

(async () => {

  const orm = await MikroORM.init(config);
  const em = orm.em.fork();
  const entityA = new EntityA();
  entityA.entityBs.add(new EntityB());
  await em.persistAndFlush(entityA);
  await orm.close();

})();