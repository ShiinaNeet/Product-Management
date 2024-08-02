import Sidebar from "@/components/sidebar";
import React, { Component } from "react";
// app/products/page.tsx
const ProductsPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <h1>Products Page</h1>
      </div>
      {/* Your content here */}
    </div>
  );
};

export default ProductsPage;
