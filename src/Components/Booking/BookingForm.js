import React, { useState } from 'react';
import axios from 'axios';
import { Card } from '../Common/Card';

const BookingForm = ({ packageId, packagePrice, onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ travelers: 1, date: '' });

  // Ensure price is treated as a number
  const parsedPrice = parseInt(packagePrice);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };
const handleConfirm = () => {
  const esewaUrl = "https://esewa.com.np/epay/main"; // use production gateway

  const params = {
    amt: 1000,                  // static amount
    psc: 0,                     // service charge
    pdc: 0,                     // delivery charge
    txAmt: 0,                   // tax
    tAmt: 1000,                 // total amount
    pid: "STATIC_TEST_12345",   // static product/payment ID
    scd: "EPAYTEST",            // test merchant code
    su: "http://localhost:3000/esewa-success",
    fu: "http://localhost:3000/esewa-failure"
  };

  const form = document.createElement("form");
  form.method = "POST";
  form.action = esewaUrl;

  Object.keys(params).forEach(key => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = params[key];
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
};



  return (
    <Card className="mb-4">
      {step === 1 && (
        <form onSubmit={handleNext}>
          <h4>Book This Package</h4>
          <div className="mb-3">
            <label className="form-label">Travel Date</label>
            <input
              type="date"
              className="form-control"
              required
              onChange={e => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Number of Travelers</label>
            <input
              type="number"
              min="1"
              className="form-control"
              value={formData.travelers}
              onChange={e => setFormData({ ...formData, travelers: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 mt-3 shadow-sm"
            style={{ borderRadius: '8px', padding: '12px' }}
          >
            Proceed to Summary
          </button>
        </form>
      )}

      {step === 2 && (
        <div>
          <h4>Booking Summary</h4>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Travelers:</strong> {formData.travelers}</p>
          <p><strong>Total Price:</strong> Rs. {(formData.travelers * parsedPrice).toLocaleString()}</p>
          <div className="d-flex gap-2 mt-4">
            <button
              className="btn btn-outline-secondary w-50"
              style={{ borderRadius: '8px', padding: '10px' }}
              onClick={() => setStep(1)}
            >
              Back
            </button>
            <button
              className="btn btn-primary w-50 shadow-sm"
              onClick={handleConfirm}
              style={{ backgroundColor: 'var(--color-secondary)', border: 'none', borderRadius: '8px', padding: '10px' }}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center text-success">
          <h4>Booking Confirmed!</h4>
          <p>Your booking request has been sent to the agency.</p>
        </div>
      )}
    </Card>
  );
};

export default BookingForm;
