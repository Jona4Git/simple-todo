import { useState } from 'react';

export default function Forms() {
  //   const [name, setName] = useState('You must set a default state value otherwise you will keep having errors on your console even if the code works fine');
  const [name, setName] = useState('');
  //   const handleChange = (e) => {
  //     //  = e.target.value;
  //     setName(e.target.value);
  //   };
  const handleChange = (e) => setName(e.target.value);
  return (
    <div>
      <form>
        <input
          //   onChange={function demo(e) {
          //     return handleChange(e);
          //   }}
          onChange={(e) => handleChange(e)}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
}
