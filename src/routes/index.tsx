import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/maison/portfolio";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Portfolio />;
}
