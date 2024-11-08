
import { useState } from 'react';

import './URLShrinking.css';
const URLShrinking = () => {
    const [longUrl, setLongUrl] = useState("https://example.com");
    const [customCode, setCustomCode] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const handleLongUrlChange = (e)=>{
        console.log(longUrl)
        setLongUrl(e.target.vlue)
        }

    const handleShortUrl = (e)=>{
        if(customCode.length > 4){
            setShortUrl(`https://cpit405.co/${customCode}`)
        }
        else{
            setShortUrl(`https://cpit405.co/${Math.random().toString(36).substring(6)}`)
        }

        }
    
    return(
        <div className="shrink-url-form">
            <h1>Link Shrinker</h1>
            <div className="form-group">
                <label htmlFor='longURL'>Long URL: </label>
                <input type='text' id='longURL' 
                value={longUrl}
                onChange={handleLongUrlChange}/>
                <label htmlFor='customCode'>Enter short code: </label>
                <input type='text' id='customCode'
                 value={customCode} 
                 onChange={(e) => setCustomCode(e.target.value)}/>
            </div>

            <div className='result'>
                <button className='submit-btn'
                    onClick={handleShortUrl}>
                    Shorten URL
                </button>
                <label htmlFor='shirtURL'>Short URL: </label>
                <input type='text' id='shortURL' value= {shortUrl} readOnly/>
            </div>
        </div>
    )
}

export default URLShrinking;