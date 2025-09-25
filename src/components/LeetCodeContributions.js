"use client";
import React from "react";

const LeetCodeContributions = () => {
  const username = "mudigondahimanshu"; // replace with your actual LeetCode username
  const cardUrl = `https://leetcard.jacoblin.cool/${username}?ext=contest`;

  return (
    <div className="flex justify-center">
      <img
        src={cardUrl}
        alt="LeetCode Contributions"
        className="rounded-lg shadow-md w-full max-w-3xl"
        loading="lazy"
      />
    </div>
  );
};

export default LeetCodeContributions;
