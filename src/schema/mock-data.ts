import { NotificationObject } from "./notification-object";
import { Post } from "./post";
import { PostComment } from "./post-comment";

const notificationObjects: NotificationObject[] = [
  {
    id: 1,
    content: "Hello",
    entity: new Post(1, "Post 1")
  },
  {
    id: 2,
    content: "Bonjour",
    entity: new Post(2, "Post 2")
  },
  {
    id: 3,
    content: "Xin chào",
    entity: new PostComment(1, "Post Comment 1")
  }
];

export default {
  notificationObjects
};
