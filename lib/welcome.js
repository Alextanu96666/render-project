const DEFAULT_WELCOME = "Welcome to the guestbook";

// Read at runtime, so the same Docker image can show different text per environment
export function getWelcomeMessage(env = process.env) {
  return env.WELCOME_MESSAGE?.trim() || DEFAULT_WELCOME;
}
