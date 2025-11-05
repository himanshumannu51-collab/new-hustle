import React from "react";
import HustleCard from "../components/HustleCard";
import ToolCard from "../components/ToolCard";
import TestimonialCard from "../components/TestimonialCard";
import { hustles } from "../data/hustles";
import { tools } from "../data/tools";
import { testimonials } from "../data/testimonials";

const HomePage = () => {
  return (
    <div className="space-y-12 p-6">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Make $500-$5000/Mo with AI Side Hustles</h1>
        <p className="mt-4 text-gray-700">Proven methods with real earnings data.</p>
      </section>

      {/* Hustles Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Top Hustles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {hustles.map(h => <HustleCard key={h.id} hustle={h} />)}
        </div>
      </section>

      {/* Tools Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Recommended Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map(t => <ToolCard key={t.id} tool={t} />)}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(test => <TestimonialCard key={test.id} testimonial={test} />)}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

