import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, off } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAC_T-k6r-1LQCqroyaSXAy2bMwYL_LxQI",
  authDomain: "mulheres-conectadas-4da2a.firebaseapp.com",
  projectId: "mulheres-conectadas-4da2a",
  storageBucket: "mulheres-conectadas-4da2a.appspot.com",
  messagingSenderId: "141842665376",
  appId: "1:141842665376:web:582686da1e28303f161ec5",
  measurementId: "G-ZGCDZPRQY7"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const postsRef = ref(database, 'posts');

const ListarPosts = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const postsListener = onValue(postsRef, (snapshot) => {
      const postsData = snapshot.val();
      setPosts(postsData);
    });

    return () => {
      off(postsRef, 'value', postsListener);
    };
  }, []);

  return (
    <div>
      {Object.keys(posts).map((postId) => (
        <div key={postId}>
          <h2>{posts[postId].title}</h2>
          <p>{posts[postId].content}</p>
          {/* Outros dados do post */}
        </div>
      ))}
    </div>
  );
};

export default ListarPosts;
