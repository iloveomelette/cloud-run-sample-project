import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { JokeContent } from "@/components/joke-content";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="grid place-content-center h-[100vh]">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Cloud Run Sample Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Press below button to get joke!</p>
            <JokeContent />
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-400">
              Powered by {/*
              white space */}<Link
                href={'https://icanhazdadjoke.com/'}
                className="hover:cursor-pointer hover:text-blue-600"
              >
                https://icanhazdadjoke.com/
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
