import { useState } from "react";
import "./App.css";
import { FaRegEdit } from "react-icons/fa";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const personName = (e) => {
    setName(e.target.value);
  };
  const personEmail = (e) => {
    setEmail(e.target.value);
  };
  const personMobile = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setMobile(value);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || mobile === "") {
      alert("All fields are required");
    } else if (mobile.length < 10) {
      alert("Mobile number must have 10 characters");
    } else if (mobile.length > 10) {
      alert("Mobile number must not exceed 10 characters");
    } else {
      const newData = { name, email, mobile };
      if (editIndex !== -1) {
        const updatedData = [...submittedData];
        updatedData[editIndex] = newData;
        setSubmittedData(updatedData);
        setEditIndex(-1);
      } else {
        setSubmittedData([...submittedData, newData]);
      }
      setName("");
      setEmail("");
      setMobile("");
      console.log("Success");
    }
  };

  const handleEdit = (index) => {
    setName(submittedData[index].name);
    setEmail(submittedData[index].email);
    setMobile(submittedData[index].mobile);
    setEditIndex(index);
  };

  return (
    <main className="flex flex-col gap-8 w-full">
      <form
        className="flex justify-center items-center gap-8 mt-8 flex-col"
        id="first"
        onSubmit={submit}
      >
        <input
          required
          className="py-2 px-2 w-[30rem] text-[1.1rem] border-2 border-violet-500 rounded-md capitalize"
          placeholder="Name"
          type="text"
          id="one"
          onChange={personName}
          value={name}
        />
        <input
          required
          className="py-2 px-2 w-[30rem] text-[1.1rem] border-2 border-violet-500 rounded-md"
          placeholder="Email"
          type="email"
          id="two"
          onChange={personEmail}
          value={email}
        />
        <input
          required
          className="py-2 px-2 w-[30rem] text-[1.1rem] border-2 border-violet-500 rounded-md"
          placeholder="Mobile"
          type="text"
          id="three"
          onChange={personMobile}
          value={mobile}
          name="phone"
        />
        <button
          id="save"
          className="py-1 px-3 text-lg font-medium border-2 border-sky-500 rounded-md"
          type="submit"
        >
          Save
        </button>
      </form>
      {submittedData.length > 0 && (
        <div className="flex justify-center items-center flex-col mt-8">
          <h2 className="text-2xl font-bold">Saved Data</h2>
          {submittedData.map((data, index) => (
            <ul
              id="map-data"
              key={index}
              className="mt-4 flex gap-4 font-medium text-lg shadow-[0_5px_15px_rgba(0,0,0,0.35)] py-2 px-2 rounded-md"
            >
              <li>{`Name: ${data.name}`}</li>
              <li>{`Email: ${data.email}`}</li>
              <li>{`Mobile: ${data.mobile}`}</li>
              <button 
              onClick={() => handleEdit(index)}
              className="py-2 px-2 bg-green-500 text-lg rounded-md flex justify-center items-center">
                <FaRegEdit />
              </button>
            </ul>
          ))}
        </div>
      )}
    </main>
  );
};

export default App;
