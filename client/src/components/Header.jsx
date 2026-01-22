export default function Header({ page, setPage }) {
  return (
    <header className="header-main">
      <div className="header-unified-bar">
        <div
          className="header-unified-left"
          onClick={() => setPage("home")}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="header-logo"
            style={{
              width: 60,
              height: 60,
              objectFit: "contain",
              cursor: "pointer",
            }}
            onClick={() => setPage("home")}
          />
          <h1
            className="header-title"
            style={{ marginLeft: 16, cursor: "pointer", userSelect: "none" }}
            onClick={() => setPage("home")}
          >
            Green Garden Showcase
          </h1>
        </div>
        <nav className="main-nav main-nav-green header-unified-nav">
          <a
            href="#"
            className={page === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setPage("home");
            }}
          >
            Trang chủ
          </a>
          <a
            href="#"
            className={page === "categories" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setPage("categories");
            }}
          >
            Danh mục
          </a>
          <a
            href="#"
            className={page === "detail" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setPage("detail");
            }}
          >
            Chi tiết cây
          </a>
          <a
            href="#"
            className={page === "contact" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setPage("contact");
            }}
          >
            Liên hệ
          </a>
        </nav>
      </div>
    </header>
  );
}
