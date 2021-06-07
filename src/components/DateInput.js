export default function DateInput({
  id = "date_input",
  labelDescription = "Label default",
  inputDefaultValue = "",
  onInputChange = null,
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="flex flex-col my-4">
      <label htmlFor={id}>{labelDescription}</label>
      <input
        autoFocus={autoFocus}
        className="border"
        id={id}
        type="date"
        value={inputDefaultValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
