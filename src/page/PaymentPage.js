import React, { useState } from 'react';

const PaymentPage = () => {
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [message, setMessage] = useState('');

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const processPayment = async () => {
        if (!amount || !paymentMethod) {
            setMessage('모든 필드를 채워주세요.');
            return;
        }

        // PG사 연동 API URL
       const apiUrl = 'http://121.254.239.138:30200/payment'

        // 결제 요청 데이터
        const requestData = {
            MID: 'M20240805117201',
            API_KEY: 'f357ab0cfc7d81f25b6e60877dc2a88b',
            amount: amount,
            paymentMethod: paymentMethod
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

            const result = await response.json();

            if (response.ok) {
                setMessage('결제가 성공적으로 처리되었습니다.');
            } else {
                setMessage('결제 처리에 실패했습니다: ' + result.error);
            }
        } catch (error) {
            setMessage('네트워크 오류가 발생했습니다.');
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1>상품 결제 페이지</h1>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="amount">결제 금액:</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="금액 입력"
                    value={amount}
                    onChange={handleAmountChange}
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    required
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="paymentMethod">결제 수단:</label>
                <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    required
                >
                    <option value="">선택해 주세요</option>
                    <option value="credit_card">신용카드</option>
                    <option value="bank_transfer">계좌이체</option>
                    <option value="virtual_account">가상계좌</option>
                    <option value="kakao_pay">카카오페이</option>
                </select>
            </div>
            <div style={{ marginBottom: '15px' }}>
                <button
                    onClick={processPayment}
                    style={{ padding: '10px 15px', backgroundColor: '#007bff', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                    결제하기
                </button>
            </div>
            {message && <div style={{ marginTop: '20px' }}>{message}</div>}
        </div>
    );
};

export default PaymentPage;









