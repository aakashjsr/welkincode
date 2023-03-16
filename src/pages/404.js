import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function LostPage() {
  const navigate = useNavigate();
  return (
    <Row className="vh-100 vw-100 bg-primary text-white align-items-center">
      <div className="text-center">
        <span className="text-white fs-1">404</span>
        <h2 className="text-white fs-4">Page Not Found</h2>
        <Button
          className="text-white bg-secondary rounded-pill mt-4"
          onClick={(e) => navigate("/")}
        >
          Back To Home
        </Button>
      </div>
    </Row>
  );
}
