// const article = document.querySelector("article");

function changeFont(element){
    element.style.fontFamily="Wingdings";
    for(var i=0; i < element.children.length; i++){
        changeFont(element.children[i]);
    }
}
changeFont(document.getElementsByTagName("html")[0]);

/* for(const a = 0; a < article.length; a++){
      article[a].style.fontFamily = "Wingdings";
  } */
//article.getElementById("article").style.fontFamily = "Impact,Charcoal,sans-serif";

// `document.querySelector` may return null if the selector doesn't match anything.
/*if (article) {
  //document.getElementById("h1").innerHTML = "Hello!";
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;
  badge.style.fontFamily = "Wingdings";

  // Support for API reference docs
  const heading = article.querySelector("h1");
  //heading.style.fontFamily = "Wingdings";
  // Support for article docs with date
  const paragraph = article.querySelectorAll("p");
  for(var i = 0; i < paragraph.length; i++) {
    paragraph[i].style.fontFamily = "Wingdings";
  }
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);*/

//}
