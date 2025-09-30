import { useState } from 'react';
import { Outlet } from 'react-router';
import Footer from '~/components/footer';
import SwiftNavbar from '~/components/swift-route/navbar';

export default function SwiftRouteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <SwiftNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Outlet />
      <Footer />
    </div>
  );
}
