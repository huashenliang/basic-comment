import './App.css';
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Comment = (props) => {
  const [currentComment, setCurrentComment] = useState('');
  const [commentArr, setCommentArr] = useState([]);

  const postComment = (currentComment) => {
    setCommentArr([...commentArr, currentComment])
  }

  return (
    <div className="container">
      {props.title ?
        <div>
          <h3>comment: {props.title}</h3>
          <input className="mr-3" type="text" placeholder="your comment" value={currentComment} onChange={e => setCurrentComment(e.target.value)} />
          <Button onClick={() => postComment(currentComment)}>Post Reply</Button>

          <Container>
            {commentArr.map(i =>
              <Comment title={i} />
            )}
          </Container>
        </div>
        : ""
      }
    </div>
  )
}

function App() {
  const [newComment, setNewComment] = useState('');
  const [commentArr, setCommentArr] = useState([]);

  const postComment = (newComment) => {
    setCommentArr([...commentArr, newComment])
  }

  return (
    <Container>
      <h1>Comments:</h1>
      {commentArr.map((i, index) =>
        <Comment title={i} key={index} />
      )
      }
      <div className="mt-5">
        <h2>Post new comment here:</h2>
        <input className="mr-3" type="text" placeholder="your comment" value={newComment} onChange={e => setNewComment(e.target.value)} />
        <Button onClick={() => postComment(newComment)}>Post new comment</Button>
      </div>
    </Container>
  );
}

export default App;
