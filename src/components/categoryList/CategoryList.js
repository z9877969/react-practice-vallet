import { useLocation, useRouteMatch } from 'react-router-dom';
import { searchCategoryName } from '../../utils/helpers';
import selectOptions from '../../utils/selectOptions';
import CategoryItem from '../categoryItem/CategoryItem';
import List from '../shared/list/List';
import Section from '../shared/section/Section';
import Title from '../shared/title/Title';

const CategoryList = () => {
  const match = useRouteMatch();
  const location = useLocation();

  searchCategoryName('outlay', 'clothes', selectOptions);
  console.log(match);
  return (
    <Section>
      <Title title={location.state.category} />
      <List>
        <CategoryItem />
      </List>
    </Section>
  );
};

export default CategoryList;
