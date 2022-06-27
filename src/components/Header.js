const Header = ({ title, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <button className="btn" onClick={onAdd}>
        add task
      </button>
    </header>
  );
};

export default Header;
