// export const Hello = () => {
//   return <div>Hello from react</div>;
// };

// function Hello(props) {
//   //passing in props as argument

//   return (
//     <div>
//       <h1>hello {props.name}</h1>
//       <h1>
//         {props.greeting}, {props.name}
//       </h1>
//     </div>
//   );
// }

// function Hello(props) {
//   const { name, greeting } = props; //destructuring of props
//   return (
//     <div>
//       <h1>
//         {greeting}, {name}
//       </h1>
//     </div>
//   );
// }
// function Hello({ name, greeting, emoji }) {
//   //destructing the prop at the argument level
//   return (
//     <div>
//       <h1>
//         {greeting},{emoji} {name}
//       </h1>
//     </div>
//   );
// }
//   // props are immuutable, meaning, you cant change the value here unless at the palce where you are rendering the component

// function Hello({ greeting, name, seatNumbers }) {
//   return (
//     <div>
//       <h1>
//         {greeting}, {name}, {seatNumbers}
//       </h1>
//     </div>
//   );
// }
function Hello({ person }) {
  // destructuring the object at the argument level
  const { greeting, name, seatNumber } = person; // destructuring the prop at the argument level
  return (
    <div>
      <h1>
        {greeting}, {name} {seatNumber}
      </h1>
    </div>
  );
}
export default Hello;
