function Error({ statusCode }) {
  return (
    <p className="max-w-1440 mx-auto px-20">
      {statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
