import React from "react";
import Card from "../components/common/Card";

const HomePage = () => {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      <Card
        title="Featured Property"
        content="Explore our most popular luxury listings available now."
      />

      <Card
        title="Special Offers"
        content="Check out exclusive deals for first-time customers."
      />
    </main>
  );
};

export default HomePage;
