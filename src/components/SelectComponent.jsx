import PropTypes from 'prop-types';
/**
 *
 * @param {*} data must be an Array 1 dimension
 * @param {*} onChangeHandler must be a function to get value choosen
 * @returns
 */
export const SelectComponent = ({ data, onChangeHandler }) => {
  const optionChangeHandler = (event) => {
    onChangeHandler(event.target.value)
  } 

  return (
    <select onChange={optionChangeHandler}>
      <option>0</option>
      {typeof data === 'object' && data.length > 0 && data.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
};

SelectComponent.propTypes = {
  data: PropTypes.array,
  onChangeHandler: PropTypes.func,
}

SelectComponent.defaultProps = {
  data: [],
  onChangeHandler: () => {},
}