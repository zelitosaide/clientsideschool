// import postgres from "postgres";
import { sql } from "@vercel/postgres";
import Link from "next/link";
import Footer from "./footer";
import QuizForm from "./quiz-form";
import Header from "./header";

// const sql = postgres(process.env.DATABASE_URL!);

async function Quizzes() {
  const quizzes = await sql`SELECT * FROM quizzes`;
  return (
    <ul>
      {/* {quizzes.map((quiz) => ( */}
      {quizzes.rows.map((quiz) => (
        <li key={quiz.id} className="underline">
          <Link href={`/quiz/${quiz.id}`}>{quiz.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <section>
      <Header />
      <h1>All Quizzes</h1>
      <Quizzes />
      <QuizForm />
      <Footer />
    </section>
  );
}
