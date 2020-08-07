import React from "react";
import { layout, sidebar as sidebarStyle, main } from "./SidebarLayout.treat";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

function SidebarLayout({ children, sidebar }: Props) {
  return (
    <div className={layout}>
      <header className={sidebarStyle}>{sidebar}</header>
      <main className={main}>{children}</main>
    </div>
  );
}

export default SidebarLayout;
