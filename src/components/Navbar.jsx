

function Navbar({ loggedIn, role, onLogout, onGoAuth, loading }) {
  return (
    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
      <h1 className="font-bold text-lg">📚 Book Store</h1>

      <div className="flex items-center gap-3">
        {loggedIn ? (
          <>
            <span className="text-sm text-white/70">
              Role: <b className="text-white">{role}</b>
            </span>

            <button
              onClick={onLogout}
              className="bg-white/10 hover:bg-white/15 transition px-4 py-2 rounded-xl text-sm font-semibold"
            >
              {loading ? "Logging out..." : "Logout"}
            </button>
          </>
        ) : (
          <button
            onClick={onGoAuth}
            className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl text-sm font-semibold"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}


export default Navbar