import Fastify from "fastify";
import routes from "./routes.js";
import Formbody from "@fastify/formbody";
import fastifyMultipart from "@fastify/multipart";
import fastifyCors from "@fastify/cors";

const fastify = Fastify({ logger: true });

fastify.register(Formbody);
fastify.register(fastifyMultipart);
fastify.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE"],
});
fastify.register(routes);

fastify.listen({ port: 3000 }, (err, adress) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server ruuning on ${adress}`);
});
