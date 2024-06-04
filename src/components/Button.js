import "../App.css";

export const Button = ({ buttonList }) => {
  const onClickHandler = (e) => {
    console.log(e.target.innerText);
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
