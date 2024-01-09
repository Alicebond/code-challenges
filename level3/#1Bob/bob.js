/*

Introduction

Bob is a lackadaisical teenager. He likes to think that he's very cool. And he definitely doesn't get excited about things. That wouldn't be cool.

When people talk to him, his responses are pretty limited.


Instructions

Your task is to determine what Bob will reply to someone when they say something to him or ask him a question.

Bob only ever answers one of five things:

    "Sure." This is his response if you ask him a question, such as "How are you?" The convention used for questions is that it ends with a question mark.
    "Whoa, chill out!" This is his answer if you YELL AT HIM. The convention used for yelling is ALL CAPITAL LETTERS.
    "Calm down, I know what I'm doing!" This is what he says if you yell a question at him.
    "Fine. Be that way!" This is how he responds to silence. The convention used for silence is nothing, or various combinations of whitespace characters.
    "Whatever." This is what he answers to anything else.

 */

// First version
export const hey1 = (message) => {
  const letters = "abcdefghijklmnoqprstuvwxyz";

  const arr = message
    .split("")
    .map((i) => i.replace(/\s/g, ""))
    .join("")
    .split("");

  const newMsg = arr.join("");

  if (
    !arr.slice(0, -1).every((i) => letters.toUpperCase().includes(i)) &&
    newMsg.slice(-1) === "?"
  )
    return "Sure.";
  else if (
    newMsg === newMsg.toUpperCase() &&
    !arr.includes("?") &&
    arr.some((i) => letters.toUpperCase().includes(i))
  )
    return "Whoa, chill out!";
  else if (newMsg === newMsg.toUpperCase() && newMsg.includes("?"))
    return "Calm down, I know what I'm doing!";
  else if (newMsg === "") return "Fine. Be that way!";
  else return "Whatever.";
};

// Second version
export const hey = (message) => {
  const isQuestion = (message) => message.trim().endsWith("?");
  const isShouting = (message) =>
    /[a-z]/i.test(message) && message === message.toUpperCase();
  const isSilence = (message) => message.trim().length === 0;

  if (isShouting(message) && isQuestion(message))
    return "Calm down, I know what I'm doing!";
  if (isQuestion(message)) return "Sure.";
  if (isShouting(message)) return "Whoa, chill out!";
  if (isSilence(message)) return "Fine. Be that way!";
  return "Whatever.";
};
