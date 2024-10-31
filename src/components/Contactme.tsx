import React, { useState } from "react";
import axios from "axios";

type FormData = {
  name: string;
  message: string;
  contact: string;
};

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    message: "",
    contact: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage`;
  const TELEGRAM_CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!formData.name || !formData.message) {
      setError("Необходимо заполнить поле");
      setLoading(false);
      return;
    }

    try {
      await axios.post(TELEGRAM_API_URL, {
        chat_id: TELEGRAM_CHAT_ID,
        text: `
        Имя: ${formData.name}
        Контакты: ${formData.contact}
        Cообщение: ${formData.message}`,
      });

      setSuccess("Сообщение отправлено");
      setFormData({ name: "", message: "", contact: "" });
    } catch (err) {
      setError("Ошибка. Не отправлено");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 border border-gray-600 rounded-xl"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        Рад ответить на ваш следующий проект
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">
          Имя
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="mt-1 px-3 py-2 bg-gray-700 dark:bg-gray-800 border border-gray-600 rounded-md w-full text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Ваше имя"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contact" className="block text-sm font-medium">
          Связь с вами
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          className="mt-1 px-3 py-2 bg-gray-700 dark:bg-gray-800 border border-gray-600 rounded-md w-full text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Номер телефона, почта, телеграм и т.д."
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="mt-1 px-3 py-2 bg-gray-700 dark:bg-gray-800 border border-gray-600 rounded-md w-full text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={4}
          placeholder="Например: лендинг для кофейни"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold"
      >
        {loading ? "Отправка..." : "Отправить"}
      </button>
    </form>
  );
};

export default ContactMe;
