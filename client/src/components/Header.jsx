import logo from "../assets/logo.jpg";
export default function Header({ page, setPage }) {
  return (
    <header className="header-main header-sample">
      <div className="header-sample-inner">
        <img
          src={logo}
          alt="Logo"
          className="header-logo"
          style={{
            width: 90,
            height: 70,
            objectFit: "contain",
            cursor: "pointer",
          }}
          onClick={() => setPage("home")}
        />
        <nav className="main-nav main-nav-sample">
          <a
            href="#"
            className={page === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setPage("home");
            }}
          >
            TRANG CHỦ
          </a>
          <a
            href="#"
            className={page === "categories" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setPage("categories");
            }}
          >
            DANH MỤC
          </a>
          <a
            href="#"
            className={page === "detail" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setPage("detail");
            }}
          >
            CHI TIẾT CÂY
          </a>
          <a
            href="#"
            className={page === "contact" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setPage("contact");
            }}
          >
            LIÊN HỆ
          </a>
        </nav>
      </div>
    </header>
  );
}
