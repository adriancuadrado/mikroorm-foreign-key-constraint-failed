import { MikroORM } from '@mikro-orm/sqlite';
import config from "./mikro-orm.config";
import { EntityA } from './entities/EntityA';

(async () => {

  const orm = await MikroORM.init(config);
  const em = orm.em.fork();
  const entityAs = await em.findAll(EntityA, { populate: ['entityBs'] });
  for (const ea of entityAs) {
    await em.removeAndFlush(ea);
  }
  await orm.close();

})();
