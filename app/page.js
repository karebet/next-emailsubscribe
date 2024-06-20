"use client";
import styles from "./page.module.css";
import React,{ useState,useEffect,FormEvent  } from 'react';
import Swal from 'sweetalert2';
import Link from "next/link";
export default function Home() {
  const [isSubcribe,setSubcribe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errorText, setErrorText] = useState(null);

  async function onSubscribe(event) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json();

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        throw new Error('Failed to submit the data. Please try again.')
      }else{
        
      }
      
      
      window.document.getElementById('subscribeemail').value = '';
      Swal.fire(data.message);
      setSubcribe(true);
      setErrorText(data.message);
    } catch (error) {
      setError("Gagal")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <main className={styles.main + 'container py-5'}>
      <div className="row justify-content-center">
        <div className="col-md-4">
        <Link href={"/testpage"}>Testpage</Link>
          <div className="card" >
            <div className="card-body">
              <form onSubmit={onSubscribe} className="row g-3 needs-validation" novalidate>
                <div className="col-md-8">
                  <input type="email" name="email"  className="form-control" id="subscribeemail" placeholder="email address" />
                </div>
                <div className="col-md-4">
                  <button className="btn btn-primary w-100" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
