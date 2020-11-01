import React, { useEffect, useState } from "react";
import _ from "underscore";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginFileEncode,
  FilePondPluginImagePreview,
  FilePondPluginFilePoster
);

export const FeaturedImage = ({
  handleSetImage,
  initialImage,
  isEdit = false,
}) => {
  const [file, setFile] = useState([]);
  const [isRemoveAllowed, setRemoved] = useState(false);

  useEffect(() => setRemoved(isEdit), [isEdit]);
  useEffect(() => {
    _.each([initialImage], (file, i) => {
      setFile([
        {
          source: file.url,
          options: {
            type: "local",
            file: {
              name: file.name,
              size: file.size,
              type: file.type,
            },
            metadata: {
              poster: file.url,
            },
          },
        },
      ]);
    });
  }, []);
  return (
    <FilePond
      files={file}
      onupdatefiles={(fileItems) => {
        handleSetImage(fileItems.map((fileItem) => fileItem.file));
        setFile(fileItems.map((fileItem) => fileItem.file));
      }}
      onremovefile={(files) => {
        if (file) {
          handleSetImage([]);
          setFile([]);
        }
      }}
      allowMultiple={false}
      maxFiles={1}
      allowRemove={isRemoveAllowed}
      imageEditInstantEdit={false}
      stylePanelLayout="compact"
      styleButtonRemoveItemPosition="top right"
      name="files"
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      // imageCropAspectRatio="16:1"
      // stylePanelAspectRatio={1:2}
    />
  );
};

export default FeaturedImage;
