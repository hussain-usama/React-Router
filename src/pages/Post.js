import { useNavigate, useParams } from "react-router-dom"
import { useFetch } from "../utils/useFetch"

const Post = (props) => {

    const { id } = useParams()
    const { data, loader, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const navigate = useNavigate()
    const navigateFunction = () => {
        localStorage.removeItem('token')
        navigate('/')
      }

    const checkComments=()=>{
      try {
        navigate(`/posts/${id}/comments`)
      } catch (error) {
        console.log(error)
      }
    }
    
    return (
        <>
            <h3>Post {id} Details</h3>
            {loader ?
                <h3>loading...</h3> :
                <>
                    <p><strong>TITLE : </strong> {data?.title ?? ""}</p>
                    <p><strong>BODY : </strong>{data?.body ?? ""}</p>
                    <button onClick={checkComments}>View Comments to this post</button><br/>
                </>
            }
      <button onClick={navigateFunction}>Logout</button>

        </>
    )
}
export default Post