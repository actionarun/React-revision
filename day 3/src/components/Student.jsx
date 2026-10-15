function Student({ id, name, mark, remove }) {
  const status = mark >= 40 ? "Pass" : "Fail";

  return (
    <>
      <h1>Name: {name}</h1>
      <h2>Mark: {mark}</h2>
      <h2>Status: {status}</h2>

      <button onClick={() => remove(id)}>
        Delete
      </button>
    </>
  );
}

export default Student;