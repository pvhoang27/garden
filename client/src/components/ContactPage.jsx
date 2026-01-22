import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>Liên hệ với chủ vườn</h2>
      <div className="contact-info">
        <div>
          <strong>SĐT:</strong> 0123 456 789
        </div>
        <div>
          <strong>Email:</strong> gardenowner@email.com
        </div>
        <div>
          <strong>Zalo:</strong> 0123 456 789
        </div>
      </div>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Đã gửi tin nhắn!");
        }}
      >
        <h3>Gửi tin nhắn</h3>
        <input type="text" placeholder="Tên của bạn" required />
        <input type="email" placeholder="Email của bạn" required />
        <textarea placeholder="Nội dung tin nhắn" rows="4" required></textarea>
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
};

export default ContactPage;
