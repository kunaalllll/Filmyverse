import React from "react";
import ReactStars from "react-stars";
import { useState } from "react";
import { reviewsRef } from "../firebase/firebase";
import { addDoc } from "firebase/firestore";
import { TailSpin } from "react-loader-spinner";
import swal from "sweetalert";

const Reviews = (id) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState("");

  const sendReview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewsRef, {
        movieid: id,
        name: "kunal mathur",
        rating: rating,
        thought: form,
        timestamp: new Date().getTime(),
      });
      setRating(0);
      setForm("");
      swal({
        title: "Review Sent",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };
  return (
    <div className="mt-4 border-t-2 border-gray-700 w-full">
      <ReactStars
        size={30}
        half={true}
        value={rating}
        onChange={(rate) => setRating(rate)}
      />
      <input
        placeholder="Share Your Thoughts..."
        className="w-full p-2 outline-none header"
        value={form}
        onChange={(e) => setForm(e.target.value)}
      />
      <button
        onClick={sendReview}
        className="bg-green-500 flex justify-center w-full p-2"
      >
        {loading ? <TailSpin height={20} color="white" /> : "Share"}
      </button>
    </div>
  );
};

export default Reviews;
