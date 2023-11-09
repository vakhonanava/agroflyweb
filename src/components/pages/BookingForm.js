// import React, { useState } from "react";
// import "../BookingForm.css";

// function BookingForm() {
//   const [formData, setFormData] = useState({
//     Name: "",
//     email: "",
//     date: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({
//         Name: formData.Name,
//         email: formData.email,
//         date: formData.date,
//       }),
//     };

//     const res = await fetch(
//       "https://agrofly-c08c5-default-rtdb.europe-west1.firebasedatabase.app/",
//       options
//     );
//     console.log(res);

//     // Here, you can handle form submission and send data to the server.
//     console.log("Form Data:", formData);
//   };
//   return (
//     <div className="booking-wholecontainer">
//       <h1>Appointment Booking</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="input-text">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-text">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-text">
//           <label>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-text">
//           <label>Time:</label>
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Book Appointment</button>
//       </form>
//     </div>
//   );
// }

// export default BookingForm;
import React, { useState } from "react";
import "../BookingForm.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    date: "",
    time: "", // Added 'time' to formData
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: formData.Name,
        email: formData.email,
        date: formData.date,
        time: formData.time,
      }),
    };

    // try {
    //   const res = await fetch(
    //     "https://agrofly-c08c5-default-rtdb.europe-west1.firebasedatabase.app/your_collection",
    //     options
    //   );
    //   console.log(res);
    // } catch (error) {
    //   console.error("Fetch error:", error);
    // }

    // Additional logic or handling can be added here

    // console.log("Form Data:", formData);
  };

  return (
    <div className="booking-wholecontainer">
       <h1>Appointment Booking</h1>
       <form onSubmit={handleSubmit}>
         <div className="input-text">
           <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-text">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-text">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-text">
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookingForm;