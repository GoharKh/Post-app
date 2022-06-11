import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <div>
        <PostForm />
      </div>
      <div>
        <h1>Sync Posts</h1>
        <Posts />
      </div>
      <div>
        <h1>Async Posts</h1>
        <FetchedPosts />
      </div>
    </div>

  );
}

export default App;
