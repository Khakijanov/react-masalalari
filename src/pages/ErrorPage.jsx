import { useRouteError } from "react-router-dom"
function ErrorPage() {
    const errorContent = useRouteError()
    if(errorContent.status === 404 ){
        return <h1>Page Not Found</h1>
    }
  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage