export default function CheckboxInput({
  id = "text_input",
  labelDescription = "Label default",
  inputDefaultValue = "",
  onInputChange = null,
  autoFocus = false,
  checked = false,
}) {
  return (
    <div className="flex flex-row items-center space-x-2 my-4">
      <input
        className="border"
        autoFocus={autoFocus}
        id={id}
        type="checkbox"
        checked={checked}
        value={inputDefaultValue}
        onChange={onInputChange}
      />
      <label htmlFor={id}>{labelDescription}</label>
    </div>
  );
}
