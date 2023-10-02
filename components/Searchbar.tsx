"use client"

import { FormEvent, useState, ChangeEvent } from "react";  // Added ChangeEvent import

const isValidAmazonProductURL = (url: string) => {
    try {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;

        if (
            hostname.includes('amazon.com') ||
            hostname.includes('amzn.to') ||
            hostname.includes('amazon.co.uk') ||
            hostname.includes('amazon.in') ||
            hostname.includes('amazon.de') ||
            hostname.includes('amazon.fr') ||
            hostname.includes('amazon.it') ||
            hostname.includes('amazon.es') ||
            hostname.includes('amazon.ca') ||
            hostname.includes('amazon.com.mx') ||
            hostname.includes('amazon.com.br') ||
            hostname.includes('amazon.com.au') ||
            hostname.includes('amazon.cn') ||
            hostname.includes('amazon.nl') ||
            hostname.includes('amazon.be') ||
            hostname.includes('amazon.se') ||
            hostname.includes('amazon.sg') ||
            hostname.includes('amazon.com.tr') ||
            hostname.includes('amazon.com.sa') ||
            hostname.includes('amazon.com.sg') ||
            hostname.includes('amazon.com.ph') ||
            hostname.includes('amazon.com.my') ||
            hostname.includes('amazon.com.eg') ||
            hostname.includes('amazon.com.qa') ||
            hostname.includes('amazon.com.bd') ||
            hostname.includes('amazon.com.hk') ||
            hostname.includes('amazon.com.tw') ||
            hostname.includes('amazon.com.vn') ||
            hostname.includes('amazon.com.ph') ||
            hostname.includes('amazon.com.sg') ||
            hostname.includes('amazon.com.ph') ||
            hostname.includes('amazon.com.my') ||
            hostname.includes('amazon.com.eg') ||
            hostname.includes('amazon.com.qa') ||
            hostname.includes('amazon.com.bd') ||
            hostname.includes('amazon.com.hk') ||
            hostname.includes('amazon.com.tw') ||
            hostname.includes('amazon.com.vn') ||
            hostname.includes('amazon.com.ph') ||
            hostname.includes('amazon.com.sg') ||
            hostname.includes('amazon.com.ph') ||
            hostname.includes('amazon.com.my') ||
            hostname.includes('amazon.com.eg') ||
            hostname.includes('amazon.com.qa') ||
            hostname.includes('amazon.com.bd') ||
            hostname.includes('amazon.com.hk') ||
            hostname.includes('amazon.com.tw') ||
            hostname.endsWith('amazon.com')
        ) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
};

const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidLink = isValidAmazonProductURL(searchPrompt);

        if (!isValidLink) {
            alert('Please provide a valid Amazon product link');
            return;  // Return early to exit the function
        }

        try {
            setIsLoading(true); // Your try block logic here

        } catch (error) {
            console.error(error);  // Log the error to the console or handle it accordingly
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            className="flex flex-wrap gap-4 mt-12"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={searchPrompt}  // Fixed the missing closing parenthesis
                onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchPrompt(event.target.value)}  // Fixed the onChange syntax
                placeholder="Enter Product Link Here"
                className="searchbar-input"
            />
            <button
                type="submit"
                className="searchbar-btn"
                disabled={searchPrompt === ''}
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    borderRadius: '4px'  /* Optional: for rounded corners */
                }}
            >
                {isLoading ? 'Searching...' : 'Search'}
            </button>
        </form>
    );
};

export default Searchbar;
