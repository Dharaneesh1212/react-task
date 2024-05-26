import { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const personName = (e) => {
    setName(e.target.value);
  };
  const personEmail = (e) => {
    setEmail(e.target.value);
  };
  const personMobile = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
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
      console.log("Success");
    }
  };

  return (
    <main className="flex flex-col gap-8 w-screen">
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
    </main>
  );
};

export default App;
