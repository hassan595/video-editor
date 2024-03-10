
export const UploadButton = (props) => {
  return (
    <label htmlFor="fileInput" className={props.className}>
      <input
        id="fileInput"
        type="file"
        accept={props.accept}
        className="hidden"
        onChange={props.onChange}
      />
      Upload
    </label>
  );
};
