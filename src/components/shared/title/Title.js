const Title = ({ title = '', style = {} }) => {
  return title && <h2 style={style}>{title}</h2>;
};

export default Title;
