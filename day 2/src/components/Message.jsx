
function Message() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <>
      <button onClick={handleShow}>
        Toggle
      </button>

      {show ? <h1>Hello Arun</h1> : <p>Message Hidden</p>}
    </>
  );
}

export default Message;
