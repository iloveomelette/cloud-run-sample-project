'use client';

import { useState } from "react";
import { FaceIcon, ReloadIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button"


export function JokeContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    setIsLoading(true);
    try {
      const headers = {
        'Accept': 'application/json',
      }
      const response = await fetch('https://icanhazdadjoke.com/', { headers });
      const data = await response.json();

      if (data.status !== 200) {
        throw new Error('Failed to fetch joke');
      }

      setJoke(data.joke);
      setIsLoading(false);
    } catch (error) {
      console.warn(error);
      setIsLoading(false);
    }
  };

  return (
    isLoading ? (
      <div className="mt-6">
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Getting Joke...
        </Button>
      </div>
    ) : (
      <div className="mt-6">
        <Button onClick={fetchJoke}>
          <FaceIcon className="mr-2 h-4 w-4" /> Get Joke
        </Button>

        {joke && (
          <div className="mt-4">
            <p className="text-lg text-blue-600 font-bold">Joke:</p>
            <p className="mt-2">{joke}</p>
          </div>
        )}
      </div>
    )
  )
}
