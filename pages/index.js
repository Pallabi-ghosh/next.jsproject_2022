import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaFacebookF, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import LogIn from "./login";

class Home extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.useState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-50">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-green-50 rounded-2xl shadow-2lx flex w-2/3 max-w-5xxl">
            <div className="w-3/5 p-5">
              <h1 className="font-bold text-green-700 text-3xxl">Keep-fit</h1>
              <p className="mb-10 font-normal text-green-500 text-2l md:text-center">
                Don’t exercise just feel it. Come and join our community,{" "}
                <br></br>
                we can make your daily routine more fun and perfectly organized
                !!
              </p>
              <Image
                src="/Fitness img1.png"
                alt="Fitness Logo"
                width={400}
                height={400}
              ></Image>
            </div>
            <div className="w-2/5 py-36">
              <h3 className="font-normal font-sans text-green-400 text-2xl py-6">
                Sign up to keep-fit
              </h3>
              <p className=" font-normal text-gray-300 md:text-center">
                Alerady a member? {""}
                <a
                  href="/docs/responsive-design"
                  className=" font-normal text-green-400 md:text-center hover:text-black"
                >
                  Log in
                </a>
              </p>
              <div className="flex justify-center my-2">
                {/* <a
                  href="#"
                  className="border border-grey-200 rounded-full p-3 m-1"
                >
                  <FaFacebookF className="text-sm" />
                </a> */}
                <a
                  href="#"
                >
                  <LogIn />
                </a>
              </div>
              <p className="ont-normal text-gray-300 md:text-center">
                Or Sign up with your e-mail
              </p>
              <form
                className="flex flex-col items-center"
                onChange={this.handleSubmit}
              >
                <div className="border border-grey-200 w-60 p-3 m-6 rounded-md flex items-center mb-3">
                  <FaRegEnvelope className="mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-green-50 outline-none text-sm flex-1"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="border border-grey-200 w-60 p-3 m-6 rounded-md flex items-center">
                  <MdLockOutline className="mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-green-50 outline-none text-sm flex-1"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="flex w-64 mb-4 justify-between">
                  <label className="flex items-center text-xs pl-3">
                    <input type="checkbox" name="remember" className="mr-2" />
                    Rember me
                  </label>
                  <a href="#" className="un">
                    Forgot password?
                  </a>
                </div>
                <a
                  href="#"
                  type="submit"
                  className="bg-green-500 w-60 p-3 m-6 rounded-md flex-1 items-center hover:bg-white border border-grey-200 text-green-900 font-medium"
                >
                  Create account
                </a>
              </form>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    );
  }
}
export default Home;
