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
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username"
          onClick={() => signIn()}
          
        >
          <FaGoogle />
        </label>
      </div>
    );
  }
};
export default LogIn;
