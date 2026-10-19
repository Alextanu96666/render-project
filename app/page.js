import { connection } from "next/server";
import { getWelcomeMessage } from "@/lib/welcome";
import Guestbook from "./Guestbook";

export default async function Home() {
  // Render on each request instead of at build time, so the env variable is read from the running container
  await connection();
  return <Guestbook welcome={getWelcomeMessage()} />;
}
