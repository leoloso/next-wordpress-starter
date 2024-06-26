import { gql } from '@apollo/client';

export const QUERY_ALL_MENUS = gql`
  query AllMenus {
    id
    menus: self {
      id
      edges: menus {
        node: self {
          id
          menuItems: self {
            edges: items {
              node: self {
                cssClasses: classes
                id
                parentId: parentID
                label
                title
                target
                path: localURLPath
              }
            }
          }
          name
          slug
          locations
        }
      }
    }
  }
`;
