import "./IntroductionArea.css";

const NoPage: React.FC = () => {
  return (
    <div className="introduction-container">
      <div className="spacing" />
      <h3>Page not found</h3>
      <h1>
        <strong>404</strong>
      </h1>
      <h2>
        Please use navigation menu to return <a href="/">home</a>.
      </h2>
    </div>
  );
};

export default NoPage;
