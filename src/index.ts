import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import { buildSchema } from "type-graphql";
import { NotificationObjectResolver } from "./schema/notification-object.resolver";

async function bootstrap() {
  const app = express();
  app.use(
    cors({
      origin: true,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true
    })
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(helmet());

  const adminSchema = await buildSchema({
    resolvers: [NotificationObjectResolver]
  });
  const mobileSchema = await buildSchema({
    resolvers: [NotificationObjectResolver]
  });

  const mobileServer = new ApolloServer({
    schema: mobileSchema,
    playground: true,
    debug: true,
    introspection: true,
    tracing: true
  });
  mobileServer.applyMiddleware({
    app,
    path: "/graphql"
  });

  const adminServer = new ApolloServer({
    schema: adminSchema,
    playground: true,
    debug: true,
    introspection: true,
    tracing: true
  });
  adminServer.applyMiddleware({
    app,
    path: "/admin-graphql"
  });

  app.listen(5002, "127.0.0.1", () => {
    console.log(
      `🚀 Mobile ready at http://0.0.0.0:${5002}${mobileServer.graphqlPath}`
    );
    console.log(
      `🚀 Admin ready at http://0.0.0.0:${5002}${adminServer.graphqlPath}`
    );
  });
}

bootstrap();
