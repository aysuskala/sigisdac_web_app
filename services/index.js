import { gql, request } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_SIGISDACCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query Assets {
        postsConnection (orderBy:datePublished_DESC) {
          edges {
            node {
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              slug
              title
              shortDesc
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
              datePublished
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
}

export const getPostDetails = async (slug) => {
    const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug } orderBy:datePublished_DESC) {
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          datePublished
          slug
          title
          shortDesc
          featuredImage {
            url
          }
          gallery {
            url
          }
          categories {
            name
            slug
          }
          content {
            raw
          }
        }    
      }
    `;

    const result = await request(graphqlAPI, query, { slug });
    return result.post;
}



// Get Recent Posts from CMS

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: datePublished_DESC
        first: 3
      ) {
        title
        featuredImage {
          url
        }
        datePublished
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
}


export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts ( 
        where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories }}}
        orderBy: datePublished_DESC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        datePublished
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { categories, slug });
  return result.posts;
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.categories;
}


export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}} orderBy:datePublished_DESC) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            datePublished
            slug
            title
            shortDesc
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};


export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  });

  return result.json();
}

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } } ) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.comments;
}

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}, orderBy:datePublished_DESC) {
        author {
          name
          photo {
            url
          }
        }
        shortDesc
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};
