# FINAL MORNING EXERCISE!

So bittersweet ....

I know a lot of you are intimidated at the thought of technical interviewing. It's scary! Let's do a last couple of coding challenges to help you get the feel.

**If you solve these both in one language (JS or Ruby), solve them in the other!**

Both of these challenges are from Project Euler(projecteuler.net), which is a great resource for (often very tough) coding challenges!

1. If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. **Find the sum of all the multiples of 3 or 5 below 1000.**  I will Slack the answer in a snippet so you can check if you're right. NO PEEKING!

2. The prime factors of 13195 are 5, 7, 13 and 29. **What is the largest prime factor of the number 600851475143?** Again, I'll Slack out the answer.

### TIPS
1. IF YOU'RE STUCK, PSEUDOCODE IT OUT!
2. As you're working on your answer, try simpler versions of the question.
  - E.g., for Problem 1, you know the sum of the multiples of 3 and 5 that are less than 10 is 23 (it's given to you). So maybe write your function/method so that it takes in some number *n* and figures out the sum of the multiples of 3 and 5 less than *n*. While you're developing, test your code with *n* = 10 since you know the answer. When you get the right answer, then change *n* to 1000 and solve the problem.
  - For problem 2: same thing. You know the largest prime factor of 13195 is 29. So solve the problem with *n* = 13195. When you get the right answer, change *n* to 600851475143 ....
3. For Problem 2, there are really two parts:
  - How do I find all the factors of some number *n*?
  - How do I find if a given factor is prime?
