import Button from '../shared/button/Button';

const CategoryItem = ({ item, goToEdit }) => {
  const { id, date, total, currency } = item;
  const onEditClick = () => {
    goToEdit(id);
    console.log('id', id);
  };
  return (
    <li>
      <span>{date}</span>
      <span>Comment</span>
      <span>{`${total} ${currency}`}</span>
      <Button title="Edit" onClick={onEditClick} />
    </li>
  );
};

export default CategoryItem;
