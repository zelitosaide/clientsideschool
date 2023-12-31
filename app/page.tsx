import postgres from "postgres";
import Link from "next/link";
import Footer from "./footer";

const sql = postgres(process.env.DATABASE_URL!);

async function Quizzes() {
  const quizzes = await sql`SELECT * FROM quizzes`;
  return (
    <ul>
      {quizzes.map((quiz) => (
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
      <h1>All Quizzes</h1>
      <Quizzes />
      <Footer />
    </section>
  );
}
