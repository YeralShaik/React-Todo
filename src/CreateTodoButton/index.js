
  function CreateTodoButton({ setOpenModal }) {
    return (
      <button
        className="button addTarea"
        onClick={
          () => {
            setOpenModal(state => !state);
          }
        }
      >+</button>
    );
  }
  

  export { CreateTodoButton };