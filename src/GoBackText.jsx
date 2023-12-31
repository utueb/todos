import { useNavigate } from "react-router-dom";
export default function GoBackText() {
  const navigate = useNavigate();
  return (
    <span
      className="text-center mt-5 d-flex flex-column align-items-center"
      id="go-back-text"
      onClick={() => {
        navigate("/");
      }}
    >
      <small className="fs-5 mb-2">this url doesnt exist</small>

      <h1 className="display-3 lh-1">
        click here to go back <br />
        to todos list.
      </h1>
    </span>
  );
}
