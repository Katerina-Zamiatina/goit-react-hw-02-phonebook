const Filter = ({ value, onChange }) => (
  <label>
    Filter by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter name for search"
    />
  </label>
);

export default Filter;
