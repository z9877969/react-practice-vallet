import Button from '../shared/button/Button';

const CategoryItem = () => {
  return (
    <li>
      <span>Date</span>
      <span>Comment</span>
      <span>Sum</span>
      <Button title="Edit" />
    </li>
  );
};

export default CategoryItem;
