import "./Error.css";

function Error() {
  return (
    <div className="error">
      <div className="error-code">
        <span>404</span>
      </div>
      <div className="error-blurb">
        <span>Oups! La page que vous demandez n&apos;existe pas.</span>
      </div>
      <div className="error-link">
        <a href="/">Retourner sur la page d’accueil</a>
      </div>
    </div>
  );
}

export default Error;
