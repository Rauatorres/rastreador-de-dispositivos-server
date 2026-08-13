import type { FastifyInstance } from "fastify";

export default function testController(fastify: FastifyInstance) {
  fastify.get("/teste", async (request, reply) => {
    return {
      msg: "get funcionando",
    };
  });
}
