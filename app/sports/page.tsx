'use client'
import { useEffect, useState } from 'react';

export default function HomePage() {
 const [data1, setData1] = useState(null);
 const [data2, setData2] = useState(null);

 useEffect(() => {
  const fetchData = async () => {
    const url1 = 'https://api-football-beta.p.rapidapi.com/timezone';
    const options1 = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ec581e759cmshb4113c418a8051fp1a6205jsna82733fe64ff',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    };

    const url2 = 'https://api-football-beta.p.rapidapi.com/standings?season=2023&league=39';
    const options2 = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ec581e759cmshb4113c418a8051fp1a6205jsna82733fe64ff',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    };

    try {
      const response1 = await fetch(url1, options1);
      const result1 = await response1.json(); // Use .json() instead of .text() if the API returns JSON
      setData1(result1);

      const response2 = await fetch(url2, options2);
      const result2 = await response2.json(); // Use .json() instead of .text() if the API returns JSON
      setData2(result2);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
 }, []);

 return (
  <div className='text-white'>
    {/* Render your data here */}
    {data1 && <pre>{JSON.stringify(data1, null, 2)}</pre>}
    {data2 && <pre>{JSON.stringify(data2, null, 2)}</pre>}
    
  </div>
 );
}
