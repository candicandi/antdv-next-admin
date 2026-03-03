/**
 * Route definitions aggregator
 *
 * Routes are organized into three categories:
 * - static: No authentication required (login, error pages, demo)
 * - basic: Authentication required, no permission filtering
 * - async: Permission-filtered routes based on user roles/permissions
 */

export { staticRoutes, demoRoutes, notFoundRoute } from './static'
export { basicRoutes } from './basic'
export { asyncRoutes } from './async'