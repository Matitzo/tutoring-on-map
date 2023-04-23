import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";
import { StyledSubmitButton } from "../../styles/Button.styled";
import { StyledBackArrowForm } from "../../styles/BackArrow.styled";
import { StyledFormHeader } from "../../styles/CreateAnnouncement.styled";

export default function Description({ description, handleDescription }) {
  const editorRef = useRef(null);
  const log = (e) => {
    e.preventDefault();
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Link to="/stworz-ogloszenie/lokalizacja">
        <StyledBackArrowForm>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-left-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
          </svg>
        </StyledBackArrowForm>
      </Link>
      <StyledFormHeader>Stwórz opis</StyledFormHeader>
      <Editor
        apiKey="4ab2vb8gat5lyoyxwmp1w6t1t4w23lbh3kbhfkfok774x5ix"
        onInit={(evt, editor) => {
          editorRef.current = editor;
        }}
        init={{
          selector: "textarea",
          toolbar_mode: "wrap",
          plugins:
            " lists image advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount",
          toolbar:
            " undo redo | numlist bullist | bold italic backcolor | alignleft aligncenter alignright alignjustify",
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
        value={description}
        onEditorChange={() => handleDescription(editorRef.current.getContent())}
        //onEditorChange={this.handleEditorChange}
      />

      <StyledSubmitButton variant="primary" type="submit">
        Stwórz ogłoszenie
      </StyledSubmitButton>
      {/* <Link to="/">
        <button onClick={() => onSubmit()}>Stwórz ogłoszenie</button>
      </Link> */}
    </>
  );
}
