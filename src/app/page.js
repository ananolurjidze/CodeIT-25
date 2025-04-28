<<<<<<< HEAD
"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLoginChange = () => {
    return setLogin(!login);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: "m38rmF$",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            router.replace("/products", {path: 'products'});
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.container} onSubmit={handleSubmit}>
        {login ? (
          <>
            <h3 className={styles.signin}>Sign In</h3>
            <p className={styles.desc}>please sign in to access market.</p>
            <input
              onChange={(event) => {
                return setUsername(event.target.value);
              }}
              className={styles.input}
              placeholder="username"
            />
            <input
              onChange={(event) => {
                return setPassword(event.target.value);
              }}
              className={styles.input}
              type="password"
              placeholder="password"
            />
            <button className={styles.button} type="submit">
              Sign In
            </button>
            <button
              onClick={handleLoginChange}
              className={styles.notResgitered}
            >
              Not Registered? sign up
            </button>
          </>
        ) : (
          <>
            <h3 className={styles.signin}>Sign Up</h3>
            <button
              onClick={handleLoginChange}
              className={styles.notResgitered}
            >
              Already Registered? sign in
            </button>
          </>
        )}
      </form>
    </main>
=======
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Title from "@/components/Title/Title";

export default function Home() {
  return (
    <div className={styles.container}>
     <section className={styles.section}> 
     <Title title={'Enter your name'}/>
     <Title title={'shemogevle'}/>
      <Input/>
     </section>
    </div>
>>>>>>> fabc3e93820bfdcae368aca1129b6a904489a36c
  );
}
