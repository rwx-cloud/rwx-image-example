import Fastify from 'fastify';
const app = Fastify();

app.get('/', async () => ({ ok: true, msg: 'Hello from Node in a container!' }));

const port = process.env.PORT || 3000;
app.listen({ port, host: '0.0.0.0' })
  .then(() => console.log(`listening on http://localhost:${port}`))
  .catch(err => { console.error(err); process.exit(1); });
