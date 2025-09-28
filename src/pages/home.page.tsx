import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/dashboard")}>GO TO DASHBOARD</Button>
    </div>
  );
};

export { HomePage };
