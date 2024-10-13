
export const limitedCharecter = (htmlContent: string, wordLimit: number) => {
    
    // Create a temporary DOM element to strip out HTML tags
    const tempElement = document.createElement("div");
    tempElement.innerHTML = htmlContent;
  
    // Extract text content
    const textContent = tempElement.textContent || tempElement.innerText || "";
  let words
    // Split text into words and join back only the first `wordLimit` words
    if (wordLimit>999) {
        words=textContent; 
    }else{
        
        words=textContent.split(" ").slice(0, wordLimit).join(" ");
    }
   
  
    return words;
  };