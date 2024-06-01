const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3001; // Порт должен совпадать с клиентским

// Мидлвары
app.use(bodyParser.json());
app.use(cors()); // Подключаем CORS

// Логирование запросов
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Хранилище для тестовых данных
let payments = {};

// Создание платежа
app.post('/api/payment', (req, res) => {
  const { amount, description } = req.body;
  const id = uuidv4();
  payments[id] = {
    id,
    amount,
    description,
    status: 'pending'
  };

  // Изменение статуса через 5 секунд
  setTimeout(() => {
    payments[id].status = 'completed';
    console.log(`Payment ${id} status updated to completed`);
  }, 5000);

  res.status(201).json({ id, status: 'pending' });
});

// Проверка статуса платежа
app.get('/api/payment/:id', (req, res) => {
  const { id } = req.params;
  const payment = payments[id];
  if (payment) {
    res.json(payment);
  } else {
    res.status(404).json({ error: 'Payment not found' });
  }
});

// Отмена платежа
app.delete('/api/payment/:id', (req, res) => {
  const { id } = req.params;
  const payment = payments[id];
  if (payment) {
    payment.status = 'cancelled';
    res.json({ id, status: 'cancelled' });
  } else {
    res.status(404).json({ error: 'Payment not found' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Payment API listening at http://localhost:${port}`);
});
