import { connectDB } from "@/lib/db";
import Message from "@/models/Message";

export async function GET() {
  await connectDB();
  const messages = await Message.find().sort({ createdAt: -1 }).limit(50).lean();
  return Response.json(messages);
}

export async function POST(request) {
  await connectDB();
  const { author, text } = await request.json();
  try {
    const message = await Message.create({ author, text });
    return Response.json(message, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 400 });
  }
}
