import { Field, Int, ObjectType } from "type-graphql";
import { EntityUnion } from "./entity-union";

@ObjectType()
export class NotificationObject {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;

  @Field(() => EntityUnion)
  entity: typeof EntityUnion;
}
