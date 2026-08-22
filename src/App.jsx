import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    image: "",

    firstname: "",

    email: "",

    phone: "",

    enrollNumber: "",

    date: "",
  });

  const [students, setStudents] = useState([]);

  const inputDatas = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user ,
      [name]: value,
    });
  };

  const addStudent = (e) => {
    e.preventDefault();

    setStudents([
      ...students,
      {
        ...user,
        id: Date.now(),
      },
    ]);

    setUser({
      image: "",

      firstname: "",

      email: "",

      phone: "",

      enrollNumber: "",

      date: "",
    });
  };

  return (
    <div className="flex justify-between px-[100px] w-[100%] min-h-[100vh] py-[20px]">
     

      <div>
        <form
          onSubmit={addStudent}
          className="flex items-center justify-center flex-col gap-[30px] bg-blue-400 w-[500px] h-[500px] rounded-2xl outline-0"
        >
          <h1 className="font-bold text-4xl">Add users</h1>

          <input
            type="url"
            name="image"
            value={user.image}
            onChange={inputDatas}
            placeholder="Image Link"
            className="w-[300px] h-[40px] bg-white rounded-2xl  outline-0"
          />

          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={inputDatas}
            placeholder="Firstname"
            className="w-[300px] h-[40px] bg-white rounded-2xl  outline-0"
          />

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={inputDatas}
            placeholder="Email"
            className="w-[300px] h-[40px] bg-white rounded-2xl  outline-0"
          />

          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={inputDatas}
            placeholder="Phone number"
            className="w-[300px] h-[40px] bg-white rounded-2xl  outline-0"
          />

          <input
            type="text"
            name="enrollNumber"
            value={user.enrollNumber}
            onChange={inputDatas}
            placeholder="Enroll number"
            className="w-[300px] h-[40px] bg-white rounded-2xl  outline-0"
          />

          <input
            type="date"
            name="date"
            value={user.date}
            onChange={inputDatas}
            className="w-[300px] h-[40px] bg-white rounded-2xl  outline-0"
          />

          <button
            type="submit"
            className="text-2xl bg-white w-[300px] h-[40px] rounded-2xl mb-[20px]"
          >
            Add
          </button>
        </form>
      </div>

      

      <div className="flex flex-wrap gap-[20px] w-[600px]">
        {students.map((student) => (
          <div
            key={student.id}
            className="w-[350px] h-[350px] bg-blue-400  rounded-2xl p-[20px] flex flex-col items-center gap-[10px]"
          >
            {(
              <img
                src={student.image}
                alt=""
                className="w-[100px] h-[100px] rounded-full "
              />
            )}

            <h2 className="text-2xl font-bold">{student.firstname}</h2>

            <p>{student.email}</p>

            <p>{student.phone}</p>

            <p> {student.enrollNumber}</p>

            <p>{student.date}</p>
            
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default App;
  