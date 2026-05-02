// export const dynamic = "force-dynamic";

// export async function GET() {
//   return Response.json({
//     message: "Hello from Next API",
//     ok: true,
//   });
// }


export async function GET() {
  const res = await fetch("http://backend:3001/hello", {
    cache: "no-store",
  });

  const text = await res.text();

  if (!res.ok) {
    return Response.json(
      {
        error: "Backend API error",
        status: res.status,
        body: text,
      },
      { status: 500 }
    );
  }

  const data = JSON.parse(text);

  return Response.json(data);
}