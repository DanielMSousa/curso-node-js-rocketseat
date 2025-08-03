import http from 'node:http';

const port = 3333;

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if(method === 'GET' && url === '/users'){
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users));
  }

  if(method === 'POST' && url === '/users'){
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@email.com'
    });
    
    return res.writeHead(201).end();
  }
  
  //rota de escape
  return res.writeHead(404).end("Not found");
});

server.listen(port);