import { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  //Initial Value
  const initialValue = {
    id: "",
    firstName: "nnn",
    middleName: "",
    lastName: "oooo",
    gender: "Female",
    number: "7678909876",
    marital: "",
    join: "Yes",
    contact: ["E-mail", "Phone"],
  };

  //State
  const [data, setData] = useState(initialValue);
  const [list, setList] = useState([]);
  const [fList, setFList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [editKey, setEditKey] = useState(false);
  const [listErr, setListErr] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("list"));
    const user1 = JSON.parse(localStorage.getItem("fList"));
    if (user) {
      setList(user);
    }
    if (user1?.length) {
      setFList(user1);
    } else {
      setFList([]);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [edit]);

  //setting value to the variable
  const handleChange = (e) => {
    if (e.target.name === "contact") {
      if (e.target.checked) {
        setData((pre) => ({
          ...pre,
          contact: [...pre.contact, e.target.value],
          // contact: pre.contact.push(e.target.value),
        }));
        // setData({ ...data, contact: [...data.contact, e.target.value] });
      } else {
        setData({
          ...data,
          contact: data.contact.filter((v) => v !== e.target.value),
        });
      }
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const addTask = (num) => {
    setListErr("");
    const duplicate =
      list.length &&
      list.filter((l) => {
        console.log(
          JSON.stringify(l.number),
          JSON.stringify(data.number),
          JSON.stringify(l.number) === JSON.stringify(data.number),
          "compare"
        );
        return JSON.stringify(l.number) === JSON.stringify(data.number);
      });
      
    //NUMBER VALIDATION
    if (!data.firstName.trim() || !data.lastName.trim()) {
      alert("Name should be filled");
    } else if (data.firstName.trim() === data.lastName.trim()) {
      alert("First Name and Last Name should be unique");
    } else if (!num.match("[0-9]{10}")) {
      alert("Please provide valid phone number");
    } else if (edit) {
      if (JSON.stringify(data) === JSON.stringify(edit)) {
        alert("You didn't update anything");
      } else {
        const updateUser = list.map((l) => {
          if (l.id === edit.id) {
            const a = { ...l, ...data };
            console.log(l, data, "lllllllll", a);
            return { ...l, ...data };
          }
          return l;
        });
        setList(updateUser);
        setFList(updateUser);
        localStorage.setItem("list", JSON.stringify(updateUser));
        localStorage.setItem("fList", JSON.stringify(updateUser));
        setData({ ...data, ...initialValue });
        setEdit(false);
        setEditKey(false);
      }
    } else if (duplicate.length & !edit) {
      setListErr("User with this number already exist, Try to add new number");
    } else {
      setList([...list, { ...data, id: new Date().getTime() }]);
      setFList([...fList, { ...data, id: new Date().getTime() }]);
      setData(initialValue);
      localStorage.setItem(
        "list",
        JSON.stringify([...list, { ...data, id: new Date().getTime() }])
      );
      localStorage.setItem(
        "fList",
        JSON.stringify([...fList, { ...data, id: new Date().getTime() }])
      );
    }
  };

  const resetTask = () => {
    setEditKey(null);
    setData({ ...data, ...initialValue });
  };

  const search = (searchValue) => {
    const data = list.filter((l) => {
      return l.firstName.includes(searchValue);
    });
    setFList(data);
  };

  const editTask = (user) => {
    // setData({ ...data, ...user });
    setData(user);
    setEdit(user);
    setEditKey(user.id);
  };

  const deleteUser = (id) => {
    if (editKey !== id) {
      const deletedUser = list.filter((l) => l.id !== id);
      setFList(deletedUser);
      setList(deletedUser);
      localStorage.setItem("list", JSON.stringify(deletedUser));
      localStorage.setItem("fList", JSON.stringify(deletedUser));
    } else {
      alert("You can't delete this user, as it is in edit mode");
    }
  };

  const deleteAll = () => {
    setList([]);
    setList([]);
    localStorage.setItem("list", JSON.stringify([]));
    localStorage.setItem("fList", JSON.stringify([]));
  };

  return (
    <div>
      <div className="mt-9">
        <div className="border-4 border-blue-900  mx-96 p-9 rounded-3xl bg-blue-200">
          <div>
            <input
              type="text"
              value={data.firstName}
              placeholder="First Name..."
              className="border-2 border-blue-800 outline-8 mb-6 mr-1 w-[230px] px-2 py-2 rounded-3xl text-xl text-blue-900  font-semibold"
              name="firstName"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              value={data.middleName}
              placeholder="Middle Name..."
              className="border-2 border-blue-800 outline-8 mb-6 mr-1 w-[230px] px-2 py-2 rounded-3xl text-xl text-blue-900  font-semibold"
              name="middleName"
              onChange={handleChange}
            />
            <input
              type="text"
              value={data.lastName}
              placeholder="Last Name..."
              className="border-2 border-blue-800 outline-8 mb-6 w-[200px] px-2 py-2 rounded-3xl text-xl text-blue-900  font-semibold"
              name="lastName"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="mr-[120px] text-2xl font-semibold">Gender</label>
            <input
              type="radio"
              className="w-5 h-5"
              value="Male"
              checked={data.gender === "Male"}
              name="gender"
              onChange={handleChange}
            />{" "}
            Male
            <input
              type="radio"
              className="w-5 h-5 ml-5"
              value="Female"
              checked={data.gender === "Female"}
              name="gender"
              onChange={handleChange}
            />{" "}
            Female
            <input
              type="radio"
              className="w-5 h-5 ml-5"
              value="Others"
              checked={data.gender === "Others"}
              name="gender"
              onChange={handleChange}
            />{" "}
            Others
          </div>
          <div className="mt-4">
            <label className="mr-20 text-2xl font-semibold">Phone No </label>
            <input
              type="number"
              value={data.number}
              className="border-2 border-blue-800 outline-8 mb-6 w-96 px-2 py-2 rounded-3xl text-xl text-blue-900  font-semibold"
              name="number"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mr-[28px] text-2xl font-semibold">
              Mode of Contact
            </label>
            <input
              type="checkbox"
              value="E-mail"
              checked={data?.contact?.includes("E-mail")}
              className="border border-black w-5 h-5"
              name="contact"
              onChange={handleChange}
            />{" "}
            E-mail
            <input
              type="checkbox"
              value="Phone"
              checked={data?.contact?.includes("Phone")}
              className="border border-black ml-5 w-5 h-5"
              name="contact"
              onChange={handleChange}
              required
            />{" "}
            Phone
          </div>
          <div className="mt-3">
            <label className="text-2xl font-semibold mr-[38px]">
              Marital Status{" "}
            </label>
            <select
              name="marital"
              value={data.marital}
              onChange={handleChange}
              className="ml-2 border-2 text-xl border-blue-800 outline-8 mb-6 w-96 px-2 py-2 rounded-3xl text-blue-900 font-semibold"
            >
              <option value="">Select your marital status</option>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </select>
          </div>
          <div>
            <label className="text-2xl font-semibold mr-2">
              Immediate Joiner{" "}
            </label>
            <input
              type="radio"
              value="Yes"
              name="join"
              checked={data.join === "Yes"}
              className="w-5 h-5 ml-2"
              onChange={handleChange}
            />{" "}
            Yes
            <input
              type="radio"
              value="No"
              name="join"
              checked={data.join === "No"}
              className="w-5 h-5 ml-5"
              onChange={handleChange}
            />{" "}
            No
          </div>
          <br />
          <div>
            <button
              onClick={() => resetTask()}
              className="float-right bg-red-600 ml-5 px-3 py-1 text-white rounded-lg"
            >
              RESET
            </button>
            <button
              onClick={() => addTask(data.number)}
              className="float-right ml-5 bg-green-500 px-3 py-1 text-white rounded-lg"
            >
              {edit ? "EDIT" : "SAVE"}
            </button>
          </div>
          <br />
        </div>
        <div className="ml-60 mt-9 mb-96">
          <p className="ml-[200px] text-red-500 font-semibold text-2xl">
            {listErr}
          </p>
          {list.length ? (
            <>
              <input
                type="text"
                value={searchValue}
                placeholder="Search by using First Name"
                className="border-2 border-blue-800 outline-8 mb-6 w-96 ml-72 px-2 py-2 rounded-3xl text-xl text-blue-900  font-semibold"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                className=" bg-slate-400 ml-5 h-8px-3 py-2 px-3 text-white rounded-lg"
                onClick={() => search(searchValue)}
              >
                SEARCH
              </button>
              <button
                className=" bg-red-600 ml-5 h-8px-3 py-1 px-3 text-white rounded-lg"
                onClick={() => deleteAll()}
              >
                DELETE ALL USER
              </button>
              {fList.length ? (
                <table className="border-separate border-spacing-2 border-4 p-3 border-blue-700 bg-green-200 rounded-lg">
                  <thead>
                    <tr>
                      <th className="border border-slate-900">ID</th>
                      <th className="border border-slate-900">FIRST_NAME</th>
                      <th className="border border-slate-900">MIDDLE_NAME</th>
                      <th className="border border-slate-900">LAST_NAME</th>
                      <th className="border border-slate-900">GENDER</th>
                      <th className="border border-slate-900">PHONE_NUMBER</th>
                      <th className="border border-slate-900">
                        MODE_OF_CONTACT
                      </th>
                      <th className="border border-slate-900">
                        MARITAL_STATUS
                      </th>
                      <th className="border border-slate-900">JOINER</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fList.map((l, i) => {
                      return (
                        <tr key={i}>
                          <td className="border border-slate-300 bg-blue-700 text-white font-semibold">
                            {l.id}
                          </td>
                          <td className="border border-slate-300 bg-blue-700 text-white font-semibold">
                            {l.firstName}
                          </td>
                          <td className="border border-slate-300 bg-blue-700 text-white font-semibold">
                            {l.middleName}
                          </td>
                          <td className="border border-slate-300 bg-blue-700 text-white font-semibold">
                            {l.lastName}
                          </td>
                          <td className="border border-slate-300 bg-blue-700 text-white font-semibold">
                            {l.gender}
                          </td>
                          <td className="border border-slate-300 bg-blue-700 text-white font-semibold">
                            {l.number}
                          </td>
                          <td className="border border-slate-300 bg-blue-700 text-white font-semibold">
                            {l.contact.length
                              ? l.contact.length === 1
                                ? l.contact
                                : l.contact[0] + ", " + l.contact[1]
                              : l.contact}
                          </td>
                          <td className="border border-slate-300 bg-blue-700 text-white font-semibold">
                            {l.marital}
                          </td>
                          <td className="border border-slate-300 bg-blue-700 text-white font-semibold">
                            {l.join}
                          </td>
                          <td
                            className="border border-slate-300 bg-green-600 text-white font-semibold cursor-pointer rounded-lg px-3"
                            onClick={() => editTask(l)}
                          >
                            Edit
                          </td>
                          <td
                            className="border border-slate-300 bg-red-700 text-white font-semibold cursor-pointer rounded-lg px-3"
                            onClick={() => deleteUser(l.id)}
                          >
                            Delete
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <h1 className="ml-52 text-3xl text-red-600 font-bold">
                  Can't find any user in this name, Try different search
                </h1>
              )}
            </>
          ) : (
            <h1 className="ml-64 text-3xl text-red-600 font-bold">
              You don't have any user to show
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
