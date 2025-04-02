import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <HomePage/>
      </SignedIn>
    </header>
  );
}