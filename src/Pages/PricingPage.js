import React, { useState } from "react";
import PricingCard from "./PricingCard";
import "../Styles/pricingpage.css";
import image2 from "../assets/image 2.png";

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="container pricing-parent">
      <h1 className="primaryheading">The Perfect Plan for Your Needs</h1>
      <p className="primarytitle">
        Our financial pricing makes it easy to find a plan that works with your
        financial constraints
      </p>
      <div className="container pricingcard">
        <PricingCard
          plan="Basic"
          price="$4/month/user"
          features={["Up to 10 graphs", "Up to 500 chatbot queries"]}
          onSelect={handleSelectPlan}
          selected={selectedPlan === "Basic"}
        />
        <PricingCard
          plan="Pro"
          price="$8/month/user"
          features={[
            "Up to 50 graphs",
            "Up to 1000 chatbot queries",
            "Email + live chat support",
          ]}
          onSelect={handleSelectPlan}
          selected={selectedPlan === "Pro"}
        />
        <PricingCard
          plan="Enterprise"
          price="Contact for price"
          features={[
            "Unlimited graphs",
            "Ability to upload custom PDFs",
            "24/7 phone + email support",
          ]}
          onSelect={handleSelectPlan}
          selected={selectedPlan === "Enterprise"}
        />
      </div>
      {selectedPlan && (
        <button
          type="button"
          className="subscribe"
        >
          Selected Plan: {selectedPlan}
          {/* Display details of the selected plan */}
        </button>
      )}
      <img src={image2} alt="" className="down" />
    </div>
  );
};

export default PricingPage;
