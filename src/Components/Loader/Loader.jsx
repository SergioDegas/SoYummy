const { Spinner } = require("./Loader.styled")

const Loader = () => {
  return (
    <div style={{ position: "fixed", top: "calc(50% - 40px)", left: "calc(50% - 40px)" }}>
      <Spinner></Spinner>
    </div>
  )
};

export default Loader;