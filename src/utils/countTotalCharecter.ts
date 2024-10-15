
export const countTotalCharecter = (htmlContent: string) => {
     // Create a temporary DOM element to strip out HTML tags
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlContent;

  // Extract text content
  const textContent = tempElement.textContent || tempElement.innerText || "";

  // Return the number of characters in the text content
  return textContent.length;
    
  };