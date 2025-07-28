import { MikroORM } from '@mikro-orm/sqlite';
import config from "./mikro-orm.config";
import { EntityA } from './entities/EntityA';

(async () => {

  const orm = await MikroORM.init(config);
  const em = orm.em.fork();
  const entityAs = await em.findAll(EntityA);
  entityAs.forEach(async ea => {
    await em.removeAndFlush(ea);
  });
  orm.close();

})();
