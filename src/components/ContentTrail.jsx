// PostList.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      subtitle
      image
    }
  }
`;

function ContentTrail() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
        <h1>Trilha de Cursos</h1>
      <List>
        {data.posts.map((post) => (
          <ListItem key={post.id} component={Link} to={`/posts/${post.id}`}>
            <ListItemText primary={post.title} />
            <ListItemText secondary={post.subtitle} />
            <ListItemText secondary={post.image} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ContentTrail;
