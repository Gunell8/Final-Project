import React from "react";
import "./index.scss";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div id="error-page">
      <div className="container">
        <div className="error-page">
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
              <Button onClick={() => navigate("/")} type="primary">
                Back Home
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
