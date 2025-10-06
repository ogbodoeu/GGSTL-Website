import { index, layout, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('./pages/home.tsx'),
  layout('./pages/layout/swift-route.tsx', [
    route('/swift-route', './pages/swift-route.tsx'),
    route('/swift-route/money-transfer', './pages/money-transfer.tsx'),
    route('/swift-route/blog', './pages/blog.tsx'),
    route('/swift-route/contact', './pages/contact.tsx'),
  ]),
  route('/login', './pages/login.tsx'),
  route('/smart-medx', './pages/smart-medx.tsx'),
  route('/smart-connectivity-solutions', './pages/smart-connectivity-solutions.tsx'),
] satisfies RouteConfig;
