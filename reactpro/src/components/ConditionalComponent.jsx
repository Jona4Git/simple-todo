import Welcome from './Welcome';
import Code from './Code';
// const ConditionalComponent = () => {
//   const display = false;
//   if (display) {
//     return <Code />;
//   } else {
//     return <Welcome />;
//   }
// };

// const ConditionalComponent = () => {
//   const display = true;
//   let message;
//   if (display) {
//     message = <h1>This is message one</h1>;
//   } else {
//     message = <h2>message two</h2>;
//   }
//   return <div>{message}</div>;
// };
// export default ConditionalComponent;

// using ternary operator to conditionally render component
// const ConditionalComponent = () => {
//   const display = true;
//   return display ? <h2>Hello, its true</h2> : <h4>No, its false</h4>;
// };

const ConditionalComponent = () => {
  const display = true;
  return display ? <Code /> : <Welcome />;
};
export default ConditionalComponent;
