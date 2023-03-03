import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [pokes, setPokes] = useState([
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
  ]);
  return (
    <>
      <Head>
        <title>Poke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Link href={"/reto-2"}>
            <Button
              variant="contained"
              color="success"
              style={{ marginBottom: "10px" }}
            >
              RETO 2
            </Button>
          </Link>
        </div>
        <div className={styles.description}>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              setPokes([
                ...pokes,
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(
                  Math.random() * 1000
                )}.png`,
              ]);
            }}
          >
            ADD
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setPokes([...pokes?.slice(0, -1)]);
            }}
          >
            DELETE
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setPokes([]);
            }}
          >
            CLEAR
          </Button>
        </div>
        <div>
          {pokes?.map((poke, idx) => {
            return (
              <Image
                key={idx}
                src={poke}
                alt="pokemon"
                width={200}
                height={200}
                priority
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
