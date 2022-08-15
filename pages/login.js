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
        <label className="border border-grey-200 rounded-full p-3 m-1" 
          onClick={() => signIn()}
          
        >
          <FaGoogle />
        </label>
      </div>
    );
  }
};
export default LogIn;
