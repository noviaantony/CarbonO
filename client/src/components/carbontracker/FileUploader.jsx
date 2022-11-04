import React, {useRef} from 'react'


const FileUploader = ({onFileSelect,onFileSelectError,onFileSelectSuccess,}) => {

  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    onFileSelectSuccess(file);
  };

  return (
    <div className="file-uploader font-default">
      <input
        type="file"
        onChange={handleFileInput}
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      />
      <p
        class="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        JPG or PNG (MAX. 800x400px).
      </p>
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      />
    </div>
  );
};

export default FileUploader;
