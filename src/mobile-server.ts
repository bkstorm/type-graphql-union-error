import "reflect-metadata";
import { ApolloServer, ServerRegistration } from "apollo-server-express";
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

  const schema = await buildSchema({
    resolvers: [NotificationObjectResolver]
  });

  const server = new ApolloServer({
    schema,
    playground: true,
    debug: true,
    introspection: true,
    tracing: true
  });

  server.applyMiddleware({
    app,
    path: "/graphql"
  });

  app.listen(5002, "127.0.0.1", () => {
    console.log(
      `🚀 Mobile ready at http://0.0.0.0:${5002}${server.graphqlPath}`
    );
  });
}

bootstrap();
