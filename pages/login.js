import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const LogIn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.email}</p>
        <button onClick={() => signOut()}></button>
      </div>
    );
  } else {
    return (
      <div>
        {/* <p>you are signed in</p> */}
        <button
          onClick={() => signIn()}
          className="bg-blue-500 hover:bg-blue-700 text-black border border-grey-200 font-bold py-2 px-4 rounded-full"
        >
          <FaGoogle />
        </button>
      </div>
    );
  }
};
export default LogIn;
