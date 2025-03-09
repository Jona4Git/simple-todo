const Fruit = ({ name, price, emoji, sold }) => {
  return price >= 10 ? (
    <div>
      {emoji} {name} {price} {sold ? 'soldout' : ''}
    </div>
  ) : (
    ''
  );
};
export default Fruit;
