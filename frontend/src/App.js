import "./App.css";
import { BsFillTrashFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const getTodoList = async () => {
    const response = await fetch("http://localhost:8080/api/todo/get");
    const data = await response.json();
    setTodoList(data);
    console.log(data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const handleClickAdd = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/api/todo/post", {
      method: "POST",
      body: JSON.stringify({ todo: newTodo, id: uuid4() }),
      headers: { "Content-Type": "application/json" },
    });
    setTodoList([...todoList, { todo: newTodo, id: uuid4() }]);
  };

  const handleClickDelete = (pId) => {
    setTodoList(todoList.filter((todo) => todo?.id !== pId));
  };

  console.log(todoList);

  const showTodoList = () => {
    let template = todoList.map((todo, index) => (
      <div className="d-flex mt-2">
        <div class="border border-1 bg-white d-flex align-items-center" style={{ width: "100%" }}>
          <input className="form-check-input ms-2 mb-1 fs-4" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label ms-5" for="flexCheckDefault">
            {todo?.todo}
          </label>
        </div>
        <button className="btn btn-danger" type="button" onClick={() => handleClickDelete(todo?.id)}>
          <BsFillTrashFill />
        </button>
      </div>
    ));

    return template;
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>

          <div className="col-lg-5 mt-5 text-center">
            <form>
              <h1 className="text-white">Todo List +</h1>
              <div className="d-flex justify-content-center mt-3 mb-4">
                <input type="text" onChange={(e) => setNewTodo(e.target.value)} className="form-control" placeholder="Add New Todo" />

                <button type="submit" onClick={handleClickAdd} class="btn btn-primary ms-3">
                  Add
                </button>
              </div>

              {showTodoList()}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
