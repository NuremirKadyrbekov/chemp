const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PMhOACUMKhi9B0vTn8652TuB1wymaJYpvwzu8HMqLDgnDF5AMFT57G0SMt2DGvSmR2UKWSMg4VYZqkGLSddaC7600HDBv4E38');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Логирование запросов
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       required:
 *         - amount
 *         - currency
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: Уникальный идентификатор платежа
 *         amount:
 *           type: number
 *           description: Сумма платежа
 *         currency:
 *           type: string
 *           description: Валюта платежа
 *         description:
 *           type: string
 *           description: Описание платежа
 *         status:
 *           type: string
 *           description: Статус платежа
 *       example:
 *         id: pi_1Jxxxxxxx
 *         amount: 100
 *         currency: usd
 *         description: Test payment
 *         status: succeeded
 */

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: API для управления платежами через Stripe
 */

/**
 * @swagger
 * /api/payment:
 *   post:
 *     summary: Создать новый платеж
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Payment'
 *     responses:
 *       201:
 *         description: Платеж создан
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 */

/**
 * @swagger
 * /api/payment/{id}:
 *   get:
 *     summary: Получить платеж по ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID платежа
 *     responses:
 *       200:
 *         description: Платеж найден
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       404:
 *         description: Платеж не найден
 */

/**
 * @swagger
 * /api/payment/{id}/cancel:
 *   post:
 *     summary: Отменить платеж по ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID платежа
 *     responses:
 *       200:
 *         description: Платеж отменен
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       404:
 *         description: Платеж не найден
 */

// Создание платежа
app.post('/api/payment', async (req, res) => {
  const { amount, currency, description } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe работает с минимальными единицами валюты (например, центы для USD)
      currency,
      description,
    });
    res.status(201).json({ id: paymentIntent.id, status: paymentIntent.status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Проверка статуса платежа
app.get('/api/payment/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(id);
    res.json({ id: paymentIntent.id, amount: paymentIntent.amount, currency: paymentIntent.currency, description: paymentIntent.description, status: paymentIntent.status });
  } catch (error) {
    res.status(404).json({ error: 'Payment not found' });
  }
});

// Отмена платежа
app.post('/api/payment/:id/cancel', async (req, res) => {
  const { id } = req.params;
  try {
    const paymentIntent = await stripe.paymentIntents.cancel(id);
    res.json({ id: paymentIntent.id, status: paymentIntent.status });
  } catch (error) {
    res.status(404).json({ error: 'Payment not found' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Payment API listening at http://localhost:${port}`);
});