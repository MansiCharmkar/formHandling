import styles from "../styles/FormHandling.module.css";
import { useState } from "react";

function FormHandling() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Form information is Submitted Successfully");
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={styles.formStyle}>
        <div>
          <h3 className={styles.h3}>Form Handling</h3>
          <div className={styles.input}>
            Name :{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            Email :{" "}
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            Phone :{" "}
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            Address :{" "}
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button className={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormHandling;
