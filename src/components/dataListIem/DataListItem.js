import { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { searchCategoryName } from '../../utils/helpers';
import selectOptions from '../../utils/selectOptions';
import Button from '../shared/button/Button';

const DataListItem = ({ item, period }) => {
  const [cat, setCat] = useState('');
  const match = useRouteMatch();
  const history = useHistory();
  const { category, total } = item;
  const onOpenCategory = () => {
    history.push({
      pathname: `${match.url}/${category}`,
      state: {
        category: cat,
        parentCat: match.params.category,
        period,
        from: history.location.pathname,
      },
    });
  };
  const getGategory = () => {
    const result = searchCategoryName(match.params.category, category, selectOptions);
    setCat(result);
  };
  useEffect(() => {
    getGategory();

    // eslint-disable-next-line
  }, []);
  return (
    <li>
      <span>{cat}:</span> <span>{total}</span>
      <Button title="==>>" onClick={onOpenCategory} />
    </li>
  );
};

export default DataListItem;
