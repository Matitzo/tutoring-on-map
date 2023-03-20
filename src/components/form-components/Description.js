import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { StyledSubmitButton } from "../../styles/Button.styled";

export default function Description({ handleDescription }) {
  const editorRef = useRef(null);
  const log = (e) => {
    e.preventDefault();
    if (editorRef.current) {
      handleDescription(editorRef.current.getContent());
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="4ab2vb8gat5lyoyxwmp1w6t1t4w23lbh3kbhfkfok774x5ix"
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          selector: "textarea",
          plugins:
            "save lists image advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount",
          toolbar:
            "save undo redo | numlist bullist | bold italic backcolor | alignleft aligncenter alignright alignjustify",
          /* without images_upload_url set, Upload tab won't show up*/
          images_upload_url: "postAcceptor.php",

          /* we override default upload handler to simulate successful upload*/
          images_upload_handler: function (blobInfo, success, failure) {
            setTimeout(function () {
              /* no matter what you upload, we will turn it into TinyMCE logo :)*/
              success("asd");
            }, 2000);
          },
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
        }}
      />

      <button onClick={(e) => log(e)}>Zapisz tekst.</button>

      <StyledSubmitButton variant="primary" type="submit">
        Stwórz ogłoszenie
      </StyledSubmitButton>
      {/* <Link to="/">
        <button onClick={() => onSubmit()}>Stwórz ogłoszenie</button>
      </Link> */}
    </>
  );
}
