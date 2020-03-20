# Purpose
Use this repository to reprocedure error with union type when building two schemas.

# How to run
- `yarn install`
- `tsc && node dist/index.js`
- Open playground then run the following query on two graphql servers: http://localhost:5002/graphql and http://localhost:5002/admin-graphql
```
query {
  notificationObjects {
    id
    content 
    entity {
      ... on Post {
        id
        content
      }
      
      ... on PostComment {
        id
        content
      }
    }
  }
}
```

Admin server is built first, the `entity` fields of the query are empty.
Mobile server is built later, the query returns `entity` fields exactly as I expected.