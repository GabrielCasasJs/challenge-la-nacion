import React from 'react';
import './screen.css';

function Screen({
  headerComponent,
  footerComponent,
  children,
  full,
  backgroundColor,
  className,
}) {
  function HeaderComponent() {
    return (
      <div className="component-screen-header">
        {headerComponent}
      </div>
    );
  }

  function FooterComponent() {
    return (
      <div className="component-screen-footer">
        {footerComponent}
      </div>
    );
  }
  return (
    <section>
      <HeaderComponent />
      <div
        className={className || 'component-screen-children'}
        style={{
          height: full && '100vh',
          background: backgroundColor,
        }}
      >
        {children}
      </div>
      <FooterComponent />
    </section>
  );
}

export default Screen;
