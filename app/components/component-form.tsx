import { useState } from 'react';

interface FormProps {
  color: string;
}

export default function ContactForm({ color }: FormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    notify: false,
    share: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // not functional
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div
      className={`flex justify-center items-center w-full bg-${color} drop-shadow-2xl border-b-2 border-black`}
      id="contact"
    >
      <form onSubmit={handleSubmit} className="text-white p-8 rounded-lg max-w-2xl space-y-4">
        <h2 className="text-3xl font-semibold text-center">
  <span className="text-white">Contact GGSTL</span>
</h2>

<p className="text-center text-gray-200 max-w-2xl mx-auto leading-relaxed">
  We'd be pleased to discuss research collaboration, technology partnerships,
  digital transformation projects, and business enquiries.
</p>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded-full text-black bg-white"
        />

        <div className="flex gap-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-1/2 p-3 rounded-full text-black bg-white"
          />
          <div className="flex items-center w-1/2 bg-white rounded-full overflow-hidden">
  <span className="px-3">🌍</span>

  <input
    type="text"
    name="phone"
    placeholder="+Country Code Phone Number"
    value={form.phone}
    onChange={handleChange}
    className="flex-1 p-3 rounded-r-full text-black outline-none bg-white"
  />
</div>
        </div>

        <textarea
          name="message"
          placeholder="Write your question here..."
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 rounded-2xl text-black min-h-[120px] bg-white"
        />

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="notify"
              checked={form.notify}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span>I agree to receive notification by e-mail and cellphone</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="share"
              checked={form.share}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span>
  I consent to GGSTL storing and processing my information to respond to this enquiry.
</span>
          </label>
        </div>

        <button
          type="submit"
          className="px-8 py-2 rounded-full border-white border-2 bg-inherit hover:bg-gray-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}
