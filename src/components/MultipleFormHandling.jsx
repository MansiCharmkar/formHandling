import { useState } from "react";

const MultipleFormHandling = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    gender: "",
    date: "",

    phone: "",
    contact: "",
    address: "",
    city: "",
    status: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitDataHandler = (e) => {
    e.preventDefault();
    alert("Multiple form is submitted.");
    console.log(formData);
    setFormData({
      name: "",
      age: "",
      email: "",
      gender: "",
      date: "",

      phone: "",
      contact: "",
      address: "",
      city: "",
      status: "",
    });
  };
  return (
    <div>
      <form>
        <h3>Multiple Form Handling</h3>
        <div>
          <div>
            Name :{" "}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormData}
            />
          </div>
          <div>
            Age :{" "}
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleFormData}
            />
          </div>
          <div>
            Email :{" "}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormData}
            />
          </div>
          <div>
            Gender :{" "}
            <input
              type="radio"
              name="gender"
              value={formData.gender}
              onChange={handleFormData}
            />
            Male
            <input
              type="radio"
              name="gender"
              value={formData.gender}
              onChange={handleFormData}
            />
            Female
          </div>
          <div>
            Date :{" "}
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleFormData}
            />
          </div>

          <div>
            phone :{" "}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormData}
            />
          </div>
          <div>
            Parent Contact :{" "}
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleFormData}
            />
          </div>
          <div>
            Address :{" "}
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleFormData}
            />
          </div>
          <div>
            City :{" "}
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleFormData}
            />
          </div>
          <div>
            Status :{" "}
            <input
              type="radio"
              name="status"
              value={formData.status}
              onChange={handleFormData}
            />
            Single
            <input
              type="radio"
              name="status"
              value={formData.status}
              onChange={handleFormData}
            />
            Married
          </div>
        </div>
        <button onClick={submitDataHandler}>Submit</button>
      </form>
    </div>
  );
};

export default MultipleFormHandling;
