import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAC_T-k6r-1LQCqroyaSXAy2bMwYL_LxQI",
  authDomain: "mulheres-conectadas-4da2a.firebaseapp.com",
  projectId: "mulheres-conectadas-4da2a",
  storageBucket: "mulheres-conectadas-4da2a.appspot.com",
  messagingSenderId: "141842665376",
  appId: "1:141842665376:web:582686da1e28303f161ec5",
  measurementId: "G-ZGCDZPRQY7"
};

initializeApp(firebaseConfig);
const firestore = getFirestore();
const storage = getStorage();

const Posts = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = firestore.collection('posts');
        const snapshot = await postsCollection.get();

        const postsData = {};
        snapshot.forEach((doc) => {
          postsData[doc.id] = doc.data();
        });

        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {Object.keys(posts).map((postId) => (
        <div key={postId}>
          <h2>{posts[postId].title}</h2>
          <p>{posts[postId].content}</p>
          {/* Other post data */}
        </div>
      ))}
    </div>
  );
};

export default Posts;
