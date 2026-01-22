export default function Header({ page, setPage }) {
  return (
    <header className="header-main">
      <div className="header-brand-row">
        <span className="header-logo">
          <svg
            width="48"
            height="48"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="19" cy="19" rx="15" ry="15" fill="#fff" />
            <path
              d="M19 28c-4-2-8-7-8-11.5C11 11 15 9 19 14c4-5 8-3 8 2.5C27 21 23 26 19 28Z"
              fill="#43a047"
            />
          </svg>
        </span>
        <h1 className="header-title" style={{ marginLeft: 16 }}>
          Green Garden Showcase
        </h1>
      </div>
      <nav className="main-nav main-nav-green">
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
    </header>
  );
}
