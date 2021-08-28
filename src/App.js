import './App.css';
import Post from './components/post';
import { useSelector } from 'react-redux';
import AddPost from './components/addPost';

function App() {
	const posts = useSelector((state) => state.posts);
	return (
		<div className="App">
			<AddPost />
			{posts.map((post) => (
				<Post {...post} key={post.id} />
			))}
		</div>
	);
}

export default App;
