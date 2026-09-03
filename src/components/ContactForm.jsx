import { useState } from "react";
import { CONTACT } from "../constants";

const FIELD_CLASS =
  "rounded border border-term-border bg-term-bg px-3 py-2 text-term-text placeholder:text-term-muted/50 outline-none transition-colors focus:border-term-green";

const ContactForm = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${values.name || "a visitor"}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="h-full rounded-lg border border-term-border bg-term-panel p-6 font-mono text-sm sm:p-8">
      <p className="text-term-muted">
        <span className="text-term-green">$</span> ./send_message.sh
      </p>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <label className="flex flex-col gap-1.5" htmlFor="contact-name">
          <span className="text-xs uppercase tracking-wider text-term-muted">$ name</span>
          <input
            id="contact-name"
            required
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            placeholder="first last"
            className={FIELD_CLASS}
          />
        </label>

        <label className="flex flex-col gap-1.5" htmlFor="contact-email">
          <span className="text-xs uppercase tracking-wider text-term-muted">$ email</span>
          <input
            id="contact-email"
            required
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            placeholder="mail@company.com"
            className={FIELD_CLASS}
          />
        </label>

        <label className="flex flex-col gap-1.5" htmlFor="contact-message">
          <span className="text-xs uppercase tracking-wider text-term-muted">$ message</span>
          <textarea
            id="contact-message"
            required
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            placeholder="Have a project in mind or want to chat?"
            className={`resize-y ${FIELD_CLASS}`}
          />
        </label>

        <button
          type="submit"
          className="mt-2 rounded border border-term-green px-4 py-2 text-center font-semibold text-term-green transition-colors hover:bg-term-green hover:text-term-bg"
        >
          Send Message →
        </button>

        <p className="text-xs text-term-muted">{"// opens your email client with this pre-filled"}</p>
      </form>
    </div>
  );
};

export default ContactForm;
