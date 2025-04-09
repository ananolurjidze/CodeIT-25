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
  );
}
