import React from 'react';

export default function About() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold mb-4">About Mamma's Recipes</h1>
      <p className="text-xl mb-6">
        Mamma's Recipes is your personal recipe book where you can create, manage, and browse through recipes. 
        Our platform aims to make recipe management easy and accessible.
      </p>
      <p className="text-xl mb-6">
        <a href="https://github.com/AlexMcBex" className="text-blue-500 underline">
          Check out my GitHub
        </a>
      </p>
    </div>
  );
}
