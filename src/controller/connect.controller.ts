import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default function connectController(fastify: FastifyInstance) {
  fastify.post(
    "/connect",
    {},
    async (request: FastifyRequest, reply: FastifyReply) => {
      //   console.log(request.body);
      return request.body;
    },
  );
}
