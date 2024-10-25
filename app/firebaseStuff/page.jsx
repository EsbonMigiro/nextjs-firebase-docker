"use client";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";

async function addDataToFirebase(name, email, message) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
    });
    console.log("Doc written with Id: ", docRef.id);
    return true;
  } catch (e) {
    console.log("error while adding the document", e);
    return false;
  }
}
function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (name === "") return;

    const added = await addDataToFirebase(name, email, message);

    if (added) {
      setName("");
      setEmail("");
      setMessage("");
      alert("Message added to database successfullly");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl font-bold m-10">Add data to firebase</h1>

      <form
        onSubmit={submitHandler}
        className="max-w-md mx-auto p-4 shadow-md bg-white rounded-lg"
      >
        <div className="mb-4">
          <>
            <label
              htmlFor="name"
              className="block font-bold text-gray-700 mb-4"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full py-3 px-2 text-black border rounded-lg focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </>

          <>
            <label
              htmlFor="email"
              className="block font-bold text-gray-700 mb-4"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              className="w-full py-3 px-2 text-black border rounded-lg focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </>

          <>
            <label
              htmlFor="message"
              className="block font-bold text-gray-700 mb-4"
            >
              message:
            </label>
            <textarea
              rows={5}
              id="message"
              className="w-full py-3 px-2 border text-black rounded-lg focus:outline-none focus:border-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Add message
          </button>
        </div>
      </form>
    </main>
  );
}

export default page;
