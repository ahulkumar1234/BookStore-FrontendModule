import { useEffect, useState } from "react";

export default function EditBookModal({ open, onClose, book, onUpdate }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });

  useEffect(() => {
    if (book) {
      setForm({
        title: book.title || "",
        author: book.author || "",
        price: book.price || "",
        category: book.category || "",
        stock: book.stock || "",
        description: book.description || "",
      });
    }
  }, [book]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    onUpdate(book._id, {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-xl bg-slate-950 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">✏️ Edit Book</h2>
          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/15 transition px-3 py-2 rounded-xl text-sm font-semibold"
          >
            Close
          </button>
        </div>

        <div className="mt-4 grid gap-3">
          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
          />

          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Author"
            name="author"
            value={form.author}
            onChange={handleChange}
          />

          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Price"
            name="price"
            value={form.price}
            onChange={handleChange}
          />

          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
          />

          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Stock"
            name="stock"
            value={form.stock}
            onChange={handleChange}
          />

          <textarea
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 min-h-[110px]"
            placeholder="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <button
            onClick={submit}
            className="w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-3 rounded-xl font-semibold"
          >
            Update Book
          </button>
        </div>
      </div>
    </div>
  );
}
