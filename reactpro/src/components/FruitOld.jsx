// export default function Fruit() {
//   const fruits = ['Apple', 'Mango', 'Orange', 'Pineapple', 'Banana'];
//   return (
//     <div>
//       <h1>
//         {fruits.map((eachFruit) => {
//           console.log(eachFruit);
//         })}
//       </h1>
//     </div>
//   );
// }

// mapping a simple array of items
// const Fruit = () => {
//   const fruits = ['Apple', 'Mango', 'Orange', 'Pineapple', 'Banana', '🍏'];
//   return (
//     <div>
//       {fruits.map((eachFruit) => (
//         <ul>
//           <li>{eachFruit}</li>
//         </ul>
//       ))}
//     </div>
//   );
// };
// export default Fruit;

// mapping an array of objects
// const Fruit = () => {
//   const fruits = [
//     { name: 'apple', price: 10, emoji: '🍏' },
//     { name: 'pineapple', price: 12, emoji: '🍍' },
//     { name: 'orange', price: 8, emoji: '🍊' },
//     { name: 'mango', price: 4, emoji: '🥭' },
//     { name: 'banana', price: 17, emoji: '🍌' },
//   ];
//   return (
//     <div>
//       {fruits.map((eachFruit, index) => (
//         <ul>
//           <li>
//             {eachFruit.emoji} {eachFruit.name} ${eachFruit.price}{' '}
//             {eachFruit.lenght}
//             {console.log(
//               eachFruit.emoji,
//               eachFruit.name,
//               '$' + eachFruit.price
//             )}
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// };
// export default Fruit;
