import Fruit from './Fruit';

function FruitComponent() {
  const fruits = [
    { name: 'apple', price: 10, emoji: '🍏', soldout: true },
    { name: 'pineapple', price: 12, emoji: '🍍', soldout: false },
    { name: 'orange', price: 8, emoji: '🍊', soldout: false },
    { name: 'mango', price: 4, emoji: '🥭', soldout: true },
    { name: 'banana', price: 17, emoji: '🍌', soldout: true },
  ];
  return (
    <div>
      {fruits.map((eachFruit) => {
        return (
          <div key={eachFruit.name}>
            {/* {eachFruit.emoji} {eachFruit.name} ${eachFruit.price} */}
            <Fruit
              emoji={eachFruit.emoji}
              name={eachFruit.name}
              price={eachFruit.price}
              sold={eachFruit.soldout}
            />
          </div>
        );
      })}
    </div>
  );
}
export default FruitComponent;
