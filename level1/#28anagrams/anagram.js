"use strict";

export const findAnagrams = (target, candidates) => {
  function isAnagram(target, data) {
    if (
      target.toLowerCase().split("").sort().join("") ===
        data.toLowerCase().split("").sort().join("") &&
      target.toLowerCase() !== data.toLowerCase()
    )
      return true;
    else return false;
  }

  return candidates.filter((i) => isAnagram(target, i));
};
