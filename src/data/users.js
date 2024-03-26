import { WORDPRESS_GRAPHQL_PROVIDER_WPGRAPHQL, WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL } from 'providers/providers';

import {
  QUERY_ALL_USERS as WPGRAPHQL_QUERY_ALL_USERS,
  QUERY_ALL_USERS_SEO as WPGRAPHQL_QUERY_ALL_USERS_SEO,
} from './wpgraphql/users';

import {
  QUERY_ALL_USERS as GATOGRAPHQL_QUERY_ALL_USERS,
  QUERY_ALL_USERS_SEO as GATOGRAPHQL_QUERY_ALL_USERS_SEO,
} from './gatographql/users';

module.exports = function feed(nextConfig = {}) {
  const { env } = nextConfig;

  const { WORDPRESS_GRAPHQL_PROVIDER } = env;

  return Object.assign({}, nextConfig, {
    ...(WORDPRESS_GRAPHQL_PROVIDER === WORDPRESS_GRAPHQL_PROVIDER_WPGRAPHQL
      ? {
          WPGRAPHQL_QUERY_ALL_USERS,
          WPGRAPHQL_QUERY_ALL_USERS_SEO,
        }
      : {}),
    ...(WORDPRESS_GRAPHQL_PROVIDER === WORDPRESS_GRAPHQL_PROVIDER_GATOGRAPHQL
      ? {
          GATOGRAPHQL_QUERY_ALL_USERS,
          GATOGRAPHQL_QUERY_ALL_USERS_SEO,
        }
      : {}),
  });
};
