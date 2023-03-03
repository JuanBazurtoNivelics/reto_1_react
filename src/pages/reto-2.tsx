import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Reto2() {
  const [poke, setPoke] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  );
  const [time, setTime] = useState(0);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const intervalPoke = setInterval(() => {
      setPoke(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(
          Math.random() * 1000
        )}.png`
      );
    }, 5000);

    const intervalTime = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(intervalPoke);
      clearInterval(intervalTime);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Poke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Link href={"/"}>
            <Button
              variant="contained"
              color="success"
              style={{ marginBottom: "10px" }}
            >
              RETO 1
            </Button>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={poke} alt="pokemon" width={200} height={200} priority />
          <p>{formatTime(time)}</p>
        </div>
      </main>
    </>
  );
}
