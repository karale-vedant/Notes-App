import React, { useState } from "react";

const App = () => {
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");

  const [Task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...Task];

    copyTask.push({ Title, Details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...Task];
    copyTask.splice(idx,1)

    setTask(copyTask)
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      >
        <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded "
          placeholder="Write Details here"
          value={Details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2  p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
          {Task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative h-52 w-40 rounded-xl bg-cover py-4 px-2 flex flex-col justify-between item-start text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">
                    {elem.Title}
                  </h3>
                  <p className="mt-2 leading-tight font-medium text-gray-700">
                    {elem.Details}
                  </p>
                </div>
                <button
                  className="active:scale-95 w-full p-1 text-xs hover:bg-red-500 bg-red-400 cursor-pointer text-white rounded font-bold"
                  onClick={() => {
                    deleteNote(idx);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default App;
