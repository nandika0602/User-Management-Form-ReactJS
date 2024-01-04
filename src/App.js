import { useState } from "react";
import "./index.css";

const App = () => {
  // const [firstName, setFirstName] = useState('');
  // const [middleName, setMiddleName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [gender, setGender] = useState('')
  // const [number, setNumber] =  useState('')
  // const [marital, setMarital] = useState('')
  const [contact, setContact] = useState([]);
  // const [join, setJoin] = useState('')


  const d = {
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    number: "",
    marital: "",
    join: "",
    contact: [],
  };
  const [data, setData] = useState(d);
  const [list, setList] = useState([]);
  const [fList, setFList] = useState([]);
  const [genderErr, setGenderErr] = useState("");
  const [joinErr, setJoinErr] = useState("");
  const [listErr, setListErr] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [edit, setEdit] = useState(false);

  const addTask = () => {
    setListErr("");
    setGenderErr("");
    setJoinErr("");
    if (data.firstName === "" || data.lastName === "") {
      alert("Name should not be empty");
    } else if (data.gender === "") {
      setGenderErr("Gender should not be empty");
    } else if (data.number === "") {
      alert("Please Enter your Phone Number");
      // } else if(!contact.length) {
      // alert("How can we contact you?... Please select mode of contact")
    } else if (data.join === "") {
      setJoinErr("Are you an immediate joiner or not?");
    } else if (edit) {
      const update = list.map((l) => {
        if (l.id === edit) {
          return { ...l, data };
        }
        return l;
      });
      setEdit(false);
      setFList(update);
      setList(update);
      // setFirstName('');
      // setMiddleName('');
      // setLastName('');
      // setGender('');
      // setNumber('');
      // setMarital('');
      // setJoin('');
      // setContact([]);
      setData(data);
      setGenderErr("");
      setJoinErr("");
    } else {
      // const obj = {
      //   id: new Date().getTime(),
      //   firstName,
      //   middleName,
      //   lastName,
      //   gender,
      //   number,
      //   marital,
      //   join,
      //   contact
      // };
      // const duplicate =list.length && list.filter((l) =>{ console.log(JSON.stringify(l), JSON.stringify(obj), JSON.stringify(l) === JSON.stringify(obj)) ;return JSON.stringify(l) === JSON.stringify(obj)})
      // console.log(duplicate);
      // if(duplicate.length){
      //   setListErr("User already exist, Try to add new user")
      // } else {
      // setList([...list, obj])
      // setFList([...list, obj])
      // setFirstName('');
      // setMiddleName('');
      // setLastName('');
      // setGender('');
      // setNumber('');
      // setMarital('');
      // setJoin('');
      // setContact([]);
      setData(d);
      setGenderErr("");
      setJoinErr("");
    }
    console.log(listErr);
  };
  // }

  // const resetTask = () => {
  //     setFirstName('');
  //     setMiddleName('');
  //     setLastName('');
  //     setGender('');
  //     setNumber('');
  //     setMarital('');
  //     setJoin('');
  //     setContact([]);
  //   // setList([])
  //   // setFList([])
  // }
  // const editTask = (user) => {
  //   setEdit(user.id);
  //   setFirstName(user.firstName);
  //   setMiddleName(user.middleName);
  //   setLastName(user.lastName);
  //   setGender(user.gender);
  //   setNumber(user.number);
  //   setMarital(user.marital);
  //   setJoin(user.join);
  //   setContact(user.contact);
  // }

  // const deleteUser = (id) => {
  //   const deletedUser = list.filter((l) => l.id !== id);
  //   setFList(deletedUser);
  //   setList(deletedUser);
  // }

  // const search = (searchValue) => {
  //   const data = list.filter((l) => {
  //     console.log(l.firstName, searchValue);
  //     console.log(l.firstName.includes(searchValue));
  //     return l.firstName.includes(searchValue)
  //   })
  //   console.log(data);
  //   setFList(data)
  // }

  const handleChange = (e) => {
    console.log("event", e.target, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data, "data");


  return (
    <div>
      <div className="mt-9">
        <div className="border-4 border-blue-900  mx-96 p-9 rounded-3xl bg-blue-200">
          <div>
            <label className="mr-[74px] text-2xl font-semibold">
              FirstName{" "}
            </label>
            <input
              type="text"
              className="border-2 border-blue-800 outline-8 mb-6 w-96 px-2 py-2 rounded-3xl text-xl text-blue-900  font-semibold"
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label className="mr-12 text-2xl font-semibold">MiddleName </label>
            <input
              type="text"
              className="border-2 border-blue-800 outline-8 mb-6 w-96 px-2 py-2 rounded-3xl text-xl text-blue-900  font-semibold"
              name="middleName"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label className="mr-20 text-2xl font-semibold">LastName </label>
            <input
              type="text"
              className="border-2 border-blue-800 outline-8 mb-6 w-96 px-2 py-2 rounded-3xl text-xl text-blue-900  font-semibold"
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <br />
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
            <p className="ml-[200px] text-red-500 font-semibold text-xl">
              {genderErr}
            </p>
          </div>
          <br />
          <div>
            <label className="mr-20 text-2xl font-semibold">Phone No </label>
            <input
              type="number"
              className="border-2 border-blue-800 outline-8 mb-6 w-96 px-2 py-2 rounded-3xl text-xl text-blue-900  font-semibold"
              name="number"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label className="mr-[28px] text-2xl font-semibold">
              Mode of Contact
            </label>
            <input
              type="checkbox"
              value="E-mail"
              checked={data.contact.includes("E-mail")}
              className="border border-black w-5 h-5"
              name="contact"
              onChange={(e) =>
                e.target.checked
                  ? setData({ ...data, contact: [...contact, e.target.value] })
                  : setData({
                      ...data,
                      contact: contact.filter((v) => v !== e.target.value),
                    })
              }
            />{" "}
            E-mail
            <input
              type="checkbox"
              value="Phone"
              checked={data.contact.includes("Phone")}
              className="border border-black ml-5 w-5 h-5"
              name="contact1"
              onChange={(e) =>
                e.target.checked
                  ? setData({ ...data, contact: [...contact, e.target.value] })
                  : setData({
                      ...data,
                      contact: contact.filter((v) => v !== e.target.value),
                    })
              }
            />{" "}
            Phone
          </div>
          <br />
          <div>
            <label className="text-2xl font-semibold mr-[40px]">
              Marital Status{" "}
            </label>
            <select
              name="marital"
              onChange={handleChange}
              className="ml-2 border-2 text-xl border-blue-800 outline-8 mb-6 w-96 px-2 py-2 rounded-3xl text-blue-900 font-semibold"
            >
              <option value="">Select your marital status</option>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </select>
          </div>
          <br />
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
            <p className="ml-[200px] text-red-500 font-semibold text-xl">
              {joinErr}
            </p>
          </div>
          <br />
          <div>
            {/* <button onClick={() => resetTask()} className='float-right bg-red-600 ml-5 px-3 py-1 text-white rounded-lg'>RESET</button> */}
            <button
              onClick={() => addTask()}
              className="float-right ml-5 bg-green-500 px-3 py-1 text-white rounded-lg"
            >
              SAVE
            </button>
          </div>
          <br />
        </div>
        <div className="ml-60 mt-9 mb-96">
          <p className="ml-[320px] text-red-500 font-semibold text-2xl">
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
              {/* <button className=' bg-red-600 ml-5 h-8px-3 py-1 px-3 text-white rounded-lg' onClick={() => search(searchValue)}>SEARCH</button> */}
              {fList.length ? (
                <table className="border-separate border-spacing-2 border-4 p-3 border-blue-700 bg-green-200 rounded-lg">
                  <thead>
                    <tr>
                      <th className="border border-slate-900">FIRST_NAME</th>
                      <th className="border border-slate-900">MIDDLE_NAME</th>
                      <th className="border border-slate-900">LAST_NAME</th>
                      <th className="border border-slate-900">GENDER</th>
                      <th className="border border-slate-900">PHONE_NUMBER</th>
                      <th className="border border-slate-900">
                        MODE_OF_CONTACT
                      </th>
                      {/* <th className='border border-slate-900'>MODE_OF_CONTACT</th> */}
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
                          {/* <td className='border border-slate-300 bg-blue-700 text-white font-semibold'>{l.contact.length === 1 ? l.contact : l.contact[0] + ", "+ l.contact[1]}</td> */}
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
                          {/* <td className='border border-slate-300 bg-green-600 text-white font-semibold cursor-pointer rounded-lg px-3' onClick={() => editTask(l)}>Edit</td> */}
                          {/* <td className='border border-slate-300 bg-red-700 text-white font-semibold cursor-pointer rounded-lg px-3' onClick={() => deleteUser(l.id)}>Delete</td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <h1 className="ml-64 text-3xl text-red-600 font-bold">
                  Can't find any user in this name
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
