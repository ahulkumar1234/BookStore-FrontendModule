import { useEffect, useState } from "react";
import { api } from "../api/Api";
import BooksList from "../components/BooksList";
import AddBook from "../components/AddBook";
import EditBookModal from "../components/EditBookModal";
import toast from "react-hot-toast";

export default function Dashboard({ role }) {
  const [books, setBooks] = useState([]);

  const [editOpen, setEditOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooks = async () => {
    const res = await api.get("/books");
    setBooks(res.data.books || []);
  };

  const createBook = async (bookData) => {
    try {
      const res = await api.post("/books/create", bookData);
      toast.success(res.data.message || "Book added!");
      fetchBooks();
    } catch (err) {
      console.log(err.response?.data);
      toast.error(err.response?.data?.message || "Create failed");
    }
  };

  const deleteBook = async (id) => {
    try {
      const res = await api.delete(`/books/delete/${id}`);
      toast.success(res.data.message || "Book deleted!");
      fetchBooks();
    } catch (err) {
      console.log(err.response?.data);
      toast.error(err.response?.data?.message || "Delete failed");
    }
  };

  const openEdit = (book) => {
    setSelectedBook(book);
    setEditOpen(true);
  };

  const updateBook = async (id, updatedData) => {
    try {
      const res = await api.put(`/books/update/${id}`, updatedData);
      toast.success(res.data.message || "Book updated!");
      setEditOpen(false);
      setSelectedBook(null);
      fetchBooks();
    } catch (err) {
      console.log(err.response?.data);
      toast.error(err.response?.data?.message || "Update failed");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Dashboard</h2>

        <button
          onClick={fetchBooks}
          className="bg-white/10 hover:bg-white/15 transition px-4 py-2 rounded-xl text-sm font-semibold"
        >
          Refresh
        </button>
      </div>

      <BooksList
        books={books}
        role={role}
        onDelete={deleteBook}
        onEdit={openEdit}
      />

      {role === "admin" && <AddBook onCreate={createBook} />}

      <EditBookModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        book={selectedBook}
        onUpdate={updateBook}
      />
    </div>
  );
}
