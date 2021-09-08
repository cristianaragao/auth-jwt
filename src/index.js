require('dotenv').config();
const express = require('express');

const sessionstorage = require('sessionstorage');

const jwt = require('jsonwebtoken');

const { autoIncrementCustomers, customers } = require('./data/data');

const port = process.env.PORT || 8080;

// express configuration
const app = express();

app.use(express.json());

autoIncrementCustomers();

const verifyJWT = (req, res, next) => {
  const token = sessionstorage.getItem('x-access-token');

  console.log("token: ", token);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
    
    if(err){
      console.log("err: ", err);
      return res.status(401).json({ auth: false });
    }

    req.userId = decode.userId;
    next();
  })
}

app.get('/', (req, res) => {
    return res.status(200).json({ description: 'Teste de Autenticação com JWT' });
})

app.get('/customers', verifyJWT, (req, res) => {
    res.json({ auth: true, customers });
})

app.post('/login', (req, res) => {
  if(req.body.user === 'cristian' && req.body.password === '123'){

    const token = jwt.sign({ username: 'cristian' }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: Number(process.env.ACCESS_TOKEN_LIFE) })

    sessionstorage.setItem('x-access-token', token);

    return res.json({ auth: true, token });
  }

  return res.status(401).end();

})

app.post('/logout', (req, res) => {
  sessionstorage.removeItem('x-access-token');
  return res.status(200).json({ auth: false });
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));