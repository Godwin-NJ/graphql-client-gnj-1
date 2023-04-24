import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from "@queries/queries";

const AddBook = () => {
  const [form, setForm] = useState({
    name: "",
    genre: "",
    author: "",
  });

  const { data, loading } = useQuery(GET_AUTHORS);
  const [
    addTodo,
    { data: mutateData, loading: mutateLoading, reset: resetAddMutation },
  ] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });
  //   addTodo,{data,loading}
  //   console.log(data, "data");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.currentTarget;
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(form, "form");
    if (!form) {
      return alert("kindly provide all data");
    }
    addTodo({
      variables: { name: form.name, genre: form.genre, authorId: form.author },
    });
    // resetAddMutation();
    setForm({
      name: "",
      genre: "",
      author: "",
    });
  };

  return (
    <div>
      <p className="text-base  font-bold text-yellow-800 mb-5">
        {/* text-center */}
        AddBook
      </p>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={handleChange}
          placeholder="Book Name"
          className="p-4 rounded "
        />
        <input
          type="text"
          value={form.genre}
          name="genre"
          onChange={handleChange}
          placeholder="Genre"
          className="p-4 rounded "
        />

        <div className="flex flex-col gap-5">
          <label>Choose an Author</label>
          <select name="author" className="w-56" onChange={handleChange}>
            <option value="" className="p-4 rounded w-10">
              Author
            </option>
            {data?.authors.map((author: any) => {
              return (
                <option value={author.id} key={author.id}>
                  {author.name.toUpperCase()}
                </option>
              );
            })}
          </select>
        </div>

        <button
          type="submit"
          className=" border-solid border-2 border-indigo-600 w-24 rounded p-2 bg-blue-200  "
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
