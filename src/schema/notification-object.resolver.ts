import { Resolver, FieldResolver, Root, Query } from "type-graphql";
import { NotificationObject } from "./notification-object";
import { EntityUnion } from "./entity-union";
import mockData from "./mock-data";

@Resolver(() => NotificationObject)
export class NotificationObjectResolver {
  @FieldResolver(() => EntityUnion)
  entity(@Root() notificationObject: NotificationObject): typeof EntityUnion {
    return notificationObject.entity;
  }

  @Query(() => [NotificationObject])
  notificationObjects(): NotificationObject[] {
    return mockData.notificationObjects;
  }
}
