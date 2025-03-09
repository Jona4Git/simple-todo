export default function Message() {
  function displayMessage() {
    // alert('This is a message from a functional component!');
    console.log('Happy Learning Of React');
  }
  return (
    <div>
      <button type="button" onClick={displayMessage}>
        Click To See Message
      </button>
    </div>
  );
}
