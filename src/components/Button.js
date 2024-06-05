import "../App.css";

export const Button = ({ buttonList, getvalue }) => {
  const onClickHandler = (e) => {
    const button = e.target.innerText;
    getvalue(button);
  };
  const list = buttonList.map((button, i) => (
    <button
      key={i}
      onClick={onClickHandler}
      className="btn d-flex  btn-primary text-center"
    >
      {button}
    </button>
  ));

  return <div className="buttons flex-wrap d-flex">{list}</div>;
};
