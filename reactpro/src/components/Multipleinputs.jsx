import { useState } from 'react';

export default function MultipleInputs() {
  // create the state value
  const [name, setName] = useState({ firstname: '', lastname: '' });
  //   const handleChange = (e) => e;
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log('name:', name);
  //   };
  return (
    <div>
      <form>
        <input
          onChange={
            (e) => setName({ ...name, firstname: e.target.value })
            // (e) => setName({ firstname: e.target.value, lastname: '' })
            //   handleChange(setName({ firstname: e.target.value, lastname: '' }))
          }
          type="text"
          value={name.firstname}
        />
        <br />
        <br />
        <input
          onChange={
            (e) => setName({ ...name, lastname: e.target.value })
            // (e) => setName({ firstname: '', lastname: e.target.value })
            //   handleChange(setName({ firstname: '', lastname: e.target.value }))
          }
          type="text"
          value={name.lastname}
        />
        <br />
        <br />
        <button type="button">Add btn</button>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
