import type { FastifyInstance } from "fastify";

export default function testController(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    reply.send("funcionando");
  });
}
