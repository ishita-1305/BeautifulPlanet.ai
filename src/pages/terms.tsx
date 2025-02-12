import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl bg-gradient-to-b from-gray-100 to-white shadow-2xl rounded-2xl border border-gray-200">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-900">
        Terms and Conditions
      </h1>
      <p className="mb-4 text-gray-600 text-center text-lg">
        Last updated: February 11, 2025
      </p>

      <div className="border-b-2 border-gray-300 mb-4"></div>

      <section className="mb-5 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">
          1. Introduction
        </h2>
        <p className="text-gray-600">
          Welcome to our platform. By accessing our website, you agree to be
          bound by these Terms and Conditions.
        </p>
      </section>

      <section className="mb-5 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">
          2. Use of Our Service
        </h2>
        <p className="text-gray-600">
          You agree to use our service in compliance with all applicable laws
          and regulations.
        </p>
      </section>

      <section className="mb-5 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">
          3. Account Responsibilities
        </h2>
        <p className="text-gray-600">
          You are responsible for maintaining the security of your account and
          all activities associated with it.
        </p>
      </section>

      <section className="mb-5 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">
          4. Modifications
        </h2>
        <p className="text-gray-600">
          We reserve the right to modify or replace these Terms at any time. We
          will notify users of significant changes.
        </p>
      </section>

      <section className="mb-5 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">5. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about these Terms, please contact us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-600 hover:underline font-medium"
          >
            support@example.com
          </a>
          .
        </p>
      </section>

      <div className="border-t-2 border-gray-300 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; 2025 YourCompany. All rights reserved.
      </div>
    </div>
  );
};

export default TermsAndConditions;
