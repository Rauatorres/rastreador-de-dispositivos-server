import { FastifyInstance } from "fastify";

export default async function routes(fastify: FastifyInstance){
    fastify.get('/', async (request, reply) => {
        reply.send('funcionando')
    })
}