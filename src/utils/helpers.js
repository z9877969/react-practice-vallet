export const categoryResult = (data, cat) => {
  const uniqueCategory = data.map(item => item[cat]).filter((el, index, array) => array.indexOf(el) === index);
  return uniqueCategory
    .map(category =>
      data
        .filter(el => el[cat] === category)
        .reduce((acc, obj) => {
          const total = Number(obj.total);
          return { category, total: acc.total ? acc.total + total : total };
        }, {}),
    )
    .filter(category => category.total > 0);
};
