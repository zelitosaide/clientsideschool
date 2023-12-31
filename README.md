This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```sql
CREATE TABLE IF NOT EXISTS quizzes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  question_text TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS answers (
  id SERIAL PRIMARY KEY,
  quiz_id INT REFERENCES quizzes(id) ON DELETE CASCADE,
  answer_text TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL
);


-- INSERTION OF QUIZZES
INSERT INTO quizzes(title, description, question_text)
VALUES
  ('Algorithm Complexity', 'Test your understanding of algorithm time and space complexity', 'What is the time complexity of a merge sort algorithm?'),
  ('Data Structures - Stacks and Queues', 'Explore concepts of stacks and queues in computer science', 'Explain the difference between a stack and a queue.'),
  ('Searching Algorithms', 'Test your knowledge of searching algorithms used in programming', 'In binary search, what is the key comparison at each step?'),
  (
    'Recursion', 
    'Explore the concept of recursion in programming''Explore the concept of recursion in programming', 'What is the base case in a recursive function?'
  ),
  ('Graph Theory', 'Test your knowledge of basic graph theory concepts', 'What is a cycle in a directed graph?'),
  ('Dynamic Programming', 'Explore dynamic programming concepts in algorithm design', 'Give an example where dynamic programming is applicable.'),
  ('Hashing', 'Test your knowledge of hashing techniques in programming', 'Explain how a hash table resolves collisions.'),
  ('Greedy Algorithms', 'Explore the concept of greedy algorithms in algorithmic design', 'What is the main principle behind greedy algorithms?'),
  ('Tree Traversal', 'Test your knowledge of tree traversal algorithms', 'What is the difference between in-order and pre-order tree traversal?'),
  (
    'Dynamic Programming - Longest Common Subsequence', 
    'Solve a problem related to the longest common subsequence using dynamic programming', 
    'Describe the dynamic programming approach to finding the longest common subsequence of two sequences.'
  )


-- INSERTION OF ANSWERS
INSERT INTO answers(quiz_id, answer_text, is_correct)
VALUES
  (1, 'O(n log n)', true),
  (1, 'O(n^2)', false),
  (1, 'O(log n)', false),
  (2, 'A stack follows LIFO (Last In, First Out) order, while a queue follows FIFO (First In, First Out) order.', true),
  (2, 'A stack follows FIFO (First In, First Out) order, while a queue follows LIFO (Last In, First Out) order.', false),
  (2, 'A stack and a queue are essentially the same data structure.', false),
  (3, 'The key comparison is between the middle element and the target element.', true),
  (3, 'The key comparison is between adjacent elements.', false),
  (3, 'The key comparison is between the first and last elements.', false),
  (4, 'The input to the recursive function that stops the recursion.', true),
  (4, 'The output of the recursive function.', false),
  (4, 'The maximum number of recursive calls allowed.', false),
  (5, 'A cycle is a path that visits each node exactly once.', false),
  (5, 'A cycle is a path that visits a node more than once.', true),
  (5, 'A cycle is a path that visits only leaf nodes.', false),
  (6, 'Identify subproblems and solve them independently.', true),
  (6, 'Identify the largest subproblem and solve it first.', false),
  (6, 'Identify subproblems and solve them in random order.', false),
  (7, 'Use separate chaining to handle collisions.', true),
  (7, 'Ignore collisions and overwrite existing values.', false),
  (7, 'Use linear probing to handle collisions.', false),
  (8, 'Always choose the path that looks immediately promising.', true),
  (8, 'Always choose the longest path.', false),
  (8, 'Always choose the path with the fewest edges.', false),
  (9, 'In-order traversal processes nodes in the order left, root, right.', true),
  (9, 'Pre-order traversal processes nodes in the order root, left, right.', false),
  (9, 'Post-order traversal processes nodes in the order left, right, root.', false),
  (10, 'Dynamic programming is applicable to problems with optimal substructure and overlapping subproblems.', true),
  (10, 'Dynamic programming is applicable only to problems with optimal substructure.', false),
  (10, 'Dynamic programming is applicable only to problems with overlapping subproblems.', false)
```