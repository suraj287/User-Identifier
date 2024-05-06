
'use client'
import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css'
import { auth } from '@clerk/nextjs/server';
const page = () => {
  
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [country, setCountry] = useState(null);

  const handleSubmit = async (e: {preventDefault():void}) => {
    e.preventDefault()
    try {
      const [ageResponse, genderResponse, countryResponse] = await Promise.all([
        axios.get(`https://api.agify.io?name=${name}`),
        axios.get(`https://api.genderize.io?name=${name}`),
        axios.get(`https://api.nationalize.io?name=${name}`)
      ]);

      setAge(ageResponse.data.age);
      setGender(genderResponse.data.gender);
      setCountry(countryResponse.data.country[0].country_id);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1 className='flex justify-center items-center'>Enter the name to fetch indentity</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center mt-10'>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          className={styles.inputField}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className={styles.button}>Submit</button>

        </div>
      </form>
     
        <div  >
          <h2>Results:</h2>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
          <p>Country: {country}</p>
        </div>
   
    </div>
  );
};

export default page;
