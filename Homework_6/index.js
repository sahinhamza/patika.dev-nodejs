const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  if (ctx.url === "/") {
    ctx.status = 200;
    ctx.body = "<h1>INDEX SAYFASINA HOSGELDINIZ</h1>";
  }
  else if (ctx.url === "/about"){
    ctx.status = 200;
    ctx.body = "<h1>ABOUT SAYFASINA HOSGELDINIZ</h1>";
  }
  else if (ctx.url === "/contact"){
    ctx.status = 200;
    ctx.body = "<h1>CONTACT SAYFASINA HOSGELDINIZ</h1>";
  }
  else{
    ctx.status = 404;
    ctx.body = "<h1>404 SAYFA BULUNAMADI</h1>.";
  }
});

app.listen(3000);