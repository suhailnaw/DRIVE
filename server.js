import Koa from 'koa';
import Router from 'koa-router';
// import Redis from 'redis';

const koa = new Koa();
const app = new Router();
// const client = Redis.createClient();
// app.get('/:name', async (ctx) => {
//   ctx.body = `Hello, ${ctx.params.name}!\n`;
// });

app.post('/PMO', async (ctx) => {
  ctx.body = 'fuck off';
  //update Redis with new PMO
  //send to Cassandra for storage
})

app.post('/login', async (ctx) => {
  ctx.body = 'hi';
  //calc distance
  //determine starting zone
  //read current PMO for zone
  //calc price
  //post active rider in Redis
  //reply with riderid, price, time
  //post this event to Cassandra
})
//
// app.post('/accept', async (ctx) => {
//   //save to Cassandra
//   //send to Thomas
//   //send to David
// })

koa.use(app.routes());
koa.listen(3000);
