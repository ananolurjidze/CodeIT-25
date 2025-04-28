"use client";
import { useState } from "react";
import styles from "./Input.module.css";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

const Input = () => {
  const [value, setValue] = useState("");
  const { push } = useRouter();

  //ერთი და იგივეა
  // const back = useRouter().back;
  // const forward = useRouter().forward;
  // const prefetch = useRouter().prefetch;
  // const push = useRouter().push;

  const handleSubmit = () => {
    push(`/prediction/${value}`);
  };

  return (
    <>
      <input
        value={value}
        onChange={(event) => {
          return setValue(event.target.value);
        }}
        className={styles.input}
        placeholder="Type Something..."
      />
      <Button handleSubmit={handleSubmit} />
    </>
  );
};

export default Input;