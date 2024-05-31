// src/components/PaymentModal.js

import React, { useState } from 'react';
import './Payment.css';

const PaymentModal = ({ onClose }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentId, setPaymentId] = useState('');
  const [status, setStatus] = useState('');

  const handlePayment = async () => {
    const paymentData = { amount, description: 'Test Payment' };

    try {
      const response = await fetch('http://localhost:3000/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error('Payment creation failed');
      }

      const data = await response.json();
      setPaymentId(data.id);
      setStatus(data.status);
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  const checkPaymentStatus = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/payment/${paymentId}`);

      if (!response.ok) {
        throw new Error('Failed to fetch payment status');
      }

      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      console.error('Status check error:', error);
    }
  };

  return (
    <div className="payment-modal">
      <div className="payment-modal__content">
        <h2>Введите данные для оплаты</h2>
        <input
          type="text"
          placeholder="Номер карты"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Срок действия"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <input
          type="text"
          placeholder="Сумма"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handlePayment}>Оплатить</button>
        {paymentId && (
          <div>
            <p>Payment ID: {paymentId}</p>
            <p>Status: {status}</p>
            <button onClick={checkPaymentStatus}>Проверить статус</button>
          </div>
        )}
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default PaymentModal;
