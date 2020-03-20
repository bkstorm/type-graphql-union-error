import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export class PostComment {
  constructor(id: number, content: string) {
    this.id = id;
    this.content = content;
  }

  @Field(() => Int)
  id: number;

  @Field()
  content: string;
}
