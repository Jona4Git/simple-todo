import Fruit from './Fruit';

function Fruits() {
  const fruits = [
    { name: 'apple', price: 10, emoji: '🍏' },
    { name: 'pineapple', price: 12, emoji: '🍍' },
    { name: 'orange', price: 8, emoji: '🍊' },
    { name: 'mango', price: 4, emoji: '🥭' },
    { name: 'banana', price: 17, emoji: '🍌' },
  ];
  return (
    <div>
      {fruits.map((eachFruit) => {
        return (
          <div>
            {/* {eachFruit.emoji} {eachFruit.name} ${eachFruit.price} */}
            <Fruit
              emoji={eachFruit.emoji}
              name={eachFruit.name}
              price={eachFruit.price}
            />
          </div>
        );
      })}
    </div>
  );
}
export default Fruits;
