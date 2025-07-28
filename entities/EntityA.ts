import { Cascade, Collection, Entity, OneToMany, PrimaryKey } from "@mikro-orm/core";
import { v4 } from 'uuid';
import { EntityB } from "./EntityB";

@Entity()
export class EntityA {

  @PrimaryKey({ type: 'uuid' })
  uuid = v4();

  @OneToMany(() => EntityB, (entityB) => entityB.entityA, { cascade: [Cascade.ALL] })
  entityBs = new Collection<EntityB>(this);

}