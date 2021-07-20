import * as React from "react";

const Collapse = ({ mood, classes, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className={`${classes}`}>
        <button
          type="button"
          className="collapsible"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>{mood}?</div>
          <div>{isOpen ? "-" : "+"}</div>
        </button>
        <p className="content" style={{ ...(isOpen && { display: "block" }) }}>
          {children}
        </p>
      </div>
    </>
  );
};

export default Collapse;
