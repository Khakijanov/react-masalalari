import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"


function ProductDetail() {
  const {id} = useParams()
  const {data} = useFetch('https://online-json-server-api.up.railway.app/project/66794a821d2cd3eb114409d0/articles/' + id)
  return (
    <div><h1>
      {data && data.title}
    </h1> </div>
  )
}

export default ProductDetail