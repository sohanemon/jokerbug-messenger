import Head from "next/head";
import { useState, useEffect } from "react";
import Input from "../components/input";
import Messeges from "../components/messeges";
import { firebaseConfig } from "../config";
import { initializeApp } from "firebase/app";
import { collection, onSnapshot, getFirestore } from "firebase/firestore";

/* Writing firebase operations here */
/* Firebase app init */
initializeApp(firebaseConfig);
/* Database service init */
const db = getFirestore();
/* Collection Reference */
export let collectionRef = collection(db, "messeges");
const Index = () => {
  const [input, setInput] = useState();
  const [messeges, setMesseges] = useState([]);
  const [user, setUser] = useState("emon");

  useEffect(() => {
    // setUser(prompt("Enter username: "));
    /* Collecting Data */
    onSnapshot(collectionRef, (snapshot) =>
      setMesseges(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <>
      <Head>
        <title>JokerBug Chat</title>
      </Head>
      <main>
        <p className='text-3xl font-bold text-center'>Hello, {user}</p>
        <Input
          input={input}
          setInput={setInput}
          setMesseges={setMesseges}
          messeges={messeges}
          user={user}
        />
        <hr />
        <Messeges messeges={messeges} user={user} />
      </main>
    </>
  );
};

export default Index;
