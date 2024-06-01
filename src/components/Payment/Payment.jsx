// src/components/PaymentModal.js

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PMhOACUMKhi9B0vPjdiNkAuNlP5istonNUHVbiCtPzkYbruDN8cLXcOrRY5akn821GMYjxFN7IE9ZBJ2njAYllm00EIv097E9');

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
`;

const Button = styled.button`
  margin: 10px 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
  display: block;
`;

const CardElementContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckoutForm = ({ onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentId, setPaymentId] = useState('');
  const [status, setStatus] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    let interval;
    if (paymentId) {
      interval = setInterval(checkPaymentStatus, 2000);
    }
    return () => clearInterval(interval);
  }, [paymentId]);

  const handlePayment = async (data) => {
    if (!stripe || !elements) {
      return;
    }

    const paymentData = { amount: data.amount, currency: 'usd', description: 'Test Payment' };

    try {
      const response = await fetch('http://localhost:3001/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error('Payment creation failed');
      }

      const result = await response.json();
      setPaymentId(result.id);
      setStatus(result.status);

      const cardElement = elements.getElement(CardElement);
      const { error, paymentIntent } = await stripe.confirmCardPayment(result.client_secret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: data.cardHolder,
          },
        },
      });

      if (error) {
        console.error(error.message);
      } else {
        setStatus(paymentIntent.status);
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  const checkPaymentStatus = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/payment/${paymentId}`);

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
    <ModalOverlay>
      <ModalContent>
        <h2>Введите данные для оплаты</h2>
        <form onSubmit={handleSubmit(handlePayment)}>
          <div>
            <Label htmlFor="cardHolder">Имя держателя карты</Label>
            <Input
              id="cardHolder"
              type="text"
              placeholder="Имя держателя карты"
              {...register('cardHolder', { required: 'Имя держателя карты обязательно' })}
            />
            {errors.cardHolder && <ErrorMessage>{errors.cardHolder.message}</ErrorMessage>}
          </div>

          <div>
            <Label htmlFor="cardNumber">Номер карты</Label>
            <CardElementContainer>
              <CardElement id="cardNumber" options={{ hidePostalCode: true }} />
            </CardElementContainer>
          </div>

          <div>
            <Label htmlFor="amount">Сумма</Label>
            <Input
              id="amount"
              type="text"
              placeholder="Сумма"
              {...register('amount', { 
                required: 'Сумма обязательна', 
                pattern: { 
                  value: /^[0-9]+(\.[0-9]{1,2})?$/, 
                  message: 'Неправильный формат суммы' 
                } 
              })}
            />
            {errors.amount && <ErrorMessage>{errors.amount.message}</ErrorMessage>}
          </div>

          <Button type="submit">Оплатить</Button>
        </form>
        {paymentId && (
          <div>
            <p>Payment ID: {paymentId}</p>
            <p>Status: {status}</p>
          </div>
        )}
        <Button onClick={onClose}>Закрыть</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

const PaymentModal = ({ onClose }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm onClose={onClose} />
  </Elements>
);

export default PaymentModal;
