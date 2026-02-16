export default function BooksList({ books, role, onDelete, onEdit }) {
  return (
    <div className="mt-4 grid gap-3">
      {books.length === 0 ? (
        <div className="text-white/60 text-sm bg-white/5 border border-white/10 rounded-xl p-4">
          No books found.
        </div>
      ) : (
        books.map((b) => (
          <div
            key={b._id}
            className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between gap-3"
          >
            <div>
              <p className="font-semibold">{b.title}</p>
              <p className="text-sm text-white/60">
                {b.author} • ₹{b.price}
              </p>
              <p className="text-xs text-white/50 mt-1">
                {b.category} • Stock: {b.stock}
              </p>
            </div>

            {role === "admin" && (
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(b)}
                  className="bg-white/10 hover:bg-white/15 transition px-3 py-2 rounded-xl text-sm font-semibold"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(b._id)}
                  className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 transition px-3 py-2 rounded-xl text-sm font-semibold"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
