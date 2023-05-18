import { useRouteError } from 'react-router-dom'
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return(
    <div>
      <h1 className="error">Opps!! something went error......</h1>
      <h4>Error status: {err.status},  error Status text: {err.statusText}</h4>
    </div>
  )
}

export default Error;