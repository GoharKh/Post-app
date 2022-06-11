import { useDispatch, useSelector } from "react-redux"
import { fetchPost } from "../redux/actions"
import Post from "./Post"
import { connect } from "react-redux"
import Loader from "./loader"
import Warning from "./Warning"

const FetchedPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts )
    const loader = useSelector(state => state.load.loaderCheck )
    const warning = useSelector(state => state.load.warning )
    if(warning) return <Warning />
    if(loader) return <Loader />
    if(!posts?.length ) {
        return(
            <>            
            <button onClick={() => dispatch(fetchPost())}>Load Posts</button>
            </>
        ) 
    }
    return (
        posts.map(post => <Post post={post} key={post.id}/>)
    )
     
}

export default connect()(FetchedPosts)


