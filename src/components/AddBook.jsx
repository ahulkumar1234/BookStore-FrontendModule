import { useState } from "react";

export default function AddBook({ onCreate }) {
    const [bookForm, setBookForm] = useState({
        title: "",
        author: "",
        price: "",
        category: "",
        stock: "",
        description: "",
    });

    const handleChange = (e) => {
        setBookForm({ ...bookForm, [e.target.name]: e.target.value });
    };

    const submit = () => {
        if (
            !bookForm.title ||
            !bookForm.author ||
            !bookForm.price ||
            !bookForm.category ||
            !bookForm.stock ||
            !bookForm.description
        ) {
            alert("All fields required!");
            return;
        }

        onCreate({
            ...bookForm,
            price: Number(bookForm.price),
            stock: Number(bookForm.stock),
        });

        setBookForm({
            title: "",
            author: "",
            price: "",
            category: "",
            stock: "",
            description: "",
        });
    };

    return (
        <div className="mt-8">
            <h3 className="text-lg font-semibold">Add Book (Admin)</h3>

            <div className="mt-3 grid gap-3">
                <input
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    placeholder="Title"
                    name="title"
                    value={bookForm.title}
                    onChange={handleChange}
                />

                <input
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    placeholder="Author"
                    name="author"
                    value={bookForm.author}
                    onChange={handleChange}
                />

                <input
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    placeholder="Price"
                    name="price"
                    value={bookForm.price}
                    onChange={handleChange}
                />

                <input
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    placeholder="Category (ex: Self Help)"
                    name="category"
                    value={bookForm.category}
                    onChange={handleChange}
                />

                <input
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    placeholder="Stock (ex: 20)"
                    name="stock"
                    value={bookForm.stock}
                    onChange={handleChange}
                />

                <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 min-h-[110px]"
                    placeholder="Description"
                    name="description"
                    value={bookForm.description}
                    onChange={handleChange}
                />

                <button
                    onClick={submit}
                    className="w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-3 rounded-xl font-semibold"
                >
                    Add Book
                </button>
            </div>
        </div>
    );
}
