import { Entity, ManyToOne, PrimaryKey } from "@mikro-orm/core";
import { v4 } from 'uuid';
import { EntityA } from "./EntityA";

@Entity()
export class EntityB {

  @PrimaryKey({ type: 'uuid' })
  uuid = v4();

  @ManyToOne(() => EntityA, { deleteRule: "cascade" })
  entityA!: EntityA;

}