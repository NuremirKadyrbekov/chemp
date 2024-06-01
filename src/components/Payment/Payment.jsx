import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 999;
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

const Button = styled.button`
  margin: 5px;
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

const PaymentModal = ({ onClose }) => {
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
    const paymentData = { amount: data.amount, description: 'Test Payment' };

    try {
      const response = await fetch('http://localhost:3001/api/payment', { // Проверьте, что порт 3001
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
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  const checkPaymentStatus = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/payment/${paymentId}`); // Проверьте, что порт 3001

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
          <Input
            type="text"
            placeholder="Имя держателя карты"
            {...register('cardHolder', { required: 'Имя держателя карты обязательно' })}
          />
          {errors.cardHolder && <ErrorMessage>{errors.cardHolder.message}</ErrorMessage>}

          <Input
            type="text"
            placeholder="Номер карты"
            {...register('cardNumber', { 
              required: 'Номер карты обязателен', 
              pattern: { 
                value: /^[0-9]{16}$/, 
                message: 'Номер карты должен состоять из 16 цифр' 
              } 
            })}
          />
          {errors.cardNumber && <ErrorMessage>{errors.cardNumber.message}</ErrorMessage>}

          <Input
            type="text"
            placeholder="Срок действия (MM/YY)"
            {...register('expiryDate', { 
              required: 'Срок действия обязателен', 
              pattern: { 
                value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 
                message: 'Неправильный формат срока действия' 
              } 
            })}
          />
          {errors.expiryDate && <ErrorMessage>{errors.expiryDate.message}</ErrorMessage>}

          <Input
            type="text"
            placeholder="CVV"
            {...register('cvv', { 
              required: 'CVV обязателен', 
              pattern: { 
                value: /^[0-9]{3,4}$/, 
                message: 'CVV должен состоять из 3 или 4 цифр' 
              } 
            })}
          />
          {errors.cvv && <ErrorMessage>{errors.cvv.message}</ErrorMessage>}

          <Input
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

export default PaymentModal;
