import { useState } from "react";
import "./CheckoutForm.css";

function CheckoutForm({ onSubmit, loading }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";

    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!form.phone.trim()) newErrors.phone = "El teléfono es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(form);
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Datos del comprador</h2>

      <div className="form-group">
        <label htmlFor="name">Nombre y apellido</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Teléfono</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="form-error">{errors.phone}</span>}
      </div>

      <button type="submit" className="btn-confirmar" disabled={loading}>
        {loading ? "Procesando..." : "Confirmar compra"}
      </button>
    </form>
  );
}

export default CheckoutForm;
