import React from "react";
import Card from "../components/common/Card";

const HomePage = () => {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          title="Luxury Apartments"
          content="Explore our range of premium apartments in top locations."
        />

        <Card
          title="Beachside Villas"
          content="Find beautiful villas with stunning ocean views."
        />

        <Card
          title="City Penthouses"
          content="Discover modern penthouses in the heart of the city."
        />
      </div>
    </main>
  );
};

export default HomePage;
