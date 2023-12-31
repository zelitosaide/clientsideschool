import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
// import postgres from "postgres";

// const sql = postgres(process.env.DATABASE_URL!);

async function Quiz({ 
  id, 
  searchParams,
}: { 
  id: string;
  searchParams: { show?: string };
}) {
  // const answers = await sql`
  const { rows: answers } = await sql`
    SELECT
      q.id AS quiz_id,
      q.title AS quiz_title,
      q.description AS quiz_description,
      q.question_text AS quiz_question,
      a.id AS answer_id,
      a.answer_text,
      a.is_correct
    FROM quizzes AS q
    JOIN answers AS a ON q.id = a.quiz_id
    WHERE q.id = ${id}
  `;

  return (
    <div>
      <h1 className="bg-gray-200 p-1">{answers[0].quiz_title}</h1>
      <h1 className="bg-gray-200 p-1 my-2">{answers[0].quiz_description}</h1>
      <h1 className="bg-gray-200 p-1">{answers[0].quiz_question}</h1>
      <ul>
        {answers.map((answer) => (
          <li key={answer.answer_id}>
            <p>
              {answer.answer_text}
              {searchParams.show === "true" && answer.is_correct && " ✅"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function QuizPage({ 
  params,
  searchParams,
}: { 
  params: { id: string };
  searchParams: { show?: string };
}) {
  return (
    <section>
      <Quiz id={params.id} searchParams={searchParams} />
      <form 
        action={async () => {
          "use server";
          redirect(`/quiz/${params.id}?show=true`)
        }}
      >
        <button className="bg-gray-200 p-2 m-2 rounded hover:bg-gray-300 transition-all">
          Show Answer
        </button>
      </form>
    </section>
  );
}