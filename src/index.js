import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './form.css';
import './bootstrap.min.css';

function MyForm() {
  const [lastname, setlastname] = useState("");
  const [firstname, setfirstname] = useState("");
  const [mobile, setmobile] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The values you entered was:\n ${firstname} \n  ${lastname} \n ${mobile}`)
  }

  return (

    <div className="border border-primary">
    <div className="container bg-info text-center ">
    <div className="form-group ">
      <h1>Class Registration</h1>
    <form onSubmit={handleSubmit}>
      <label>FirstName:<br/>
        <input className="form-control"
          type="text" 
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>LastName:
        <br/>
        <input className="form-control"
          type="text" 
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      
      <label>Mobile:<br/>
        <input className="form-control"
          type="tel" 
          value={mobile}
          onChange={(e) => setmobile(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <input className="btn-primary bg-dark"  type="submit" />
    </form>
    </div>
    </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
