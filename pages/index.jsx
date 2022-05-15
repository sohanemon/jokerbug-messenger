import Head from "next/head";
import { useState, useEffect } from "react";
import Input from "../components/input";
import Messeges from "../components/messeges";
import { firebaseConfig } from "../config";
import { initializeApp } from "firebase/app";
import {
  collection,
  onSnapshot,
  getFirestore,
  query,
  orderBy,
} from "firebase/firestore";

/* Writing firebase operations here */
/* Firebase app init */
initializeApp(firebaseConfig);
/* Database service init */
const db = getFirestore();
/* Collection Reference */
export let collectionRef = collection(db, "messeges");
/* Doing query on the collection */
let q = query(collectionRef, orderBy("timestamp"));
const Index = () => {
  const [input, setInput] = useState();
  const [messeges, setMesseges] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(prompt("Enter username: "));
    /* Collecting Data */
    onSnapshot(q, (snapshot) =>
      setMesseges(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <>
      <Head>
        <title>JokerBug Chat</title>
      </Head>
      <main className='relative'>
        <p className='text-3xl font-bold text-center'>Hello, {user}</p>{" "}
        <Messeges messeges={messeges} user={user} />
        <Input
          input={input}
          setInput={setInput}
          setMesseges={setMesseges}
          messeges={messeges}
          user={user}
        />
        <hr />
      </main>
    </>
  );
};

export default Index;
