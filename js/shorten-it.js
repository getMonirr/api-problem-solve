document.getElementById('shorten-btn').addEventListener('click', async () => {
    const linkInput = document.getElementById('link-input').value;
    try {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput}`);
        const data = await res.json();
        showShortenUI(data.result);
    } catch (error) {
        console.log(error);
    }
})

const showShortenUI = (data) => {
    // console.log(data);
    const { full_short_link } = data;
    const showShortenContainer = document.getElementById('show-shorten');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-96 bg-primary text-primary-content mx-auto">
        <div class="card-body text-center">
          <h3>Link generated!</h3>
          <h2 id="shorten-link" class="card-title underline text-green-400 cursor-pointer text-2xl"> ${full_short_link} </h2>
          <div class="card-actions justify-end">
            <button onclick="handleCopyLink()" class="btn">Copy Link</button>
          </div>
        </div>
      </div>
    `;
    showShortenContainer.appendChild(div);
}

// handle copy link
const handleCopyLink = () => {
    const shortenLink = document.getElementById('shorten-link');
    shortenLink.select();
    shortenLink.setSelectionRange(0,999999);
    navigator.clipboard.writeText(shortenLink.innerText);
    console.log(shortenLink.innerText);
}

// function myFunction() {
//     // Get the text field
//     var copyText = document.getElementById("myInput");
  
//     // Select the text field
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); // For mobile devices
  
//      // Copy the text inside the text field
//     navigator.clipboard.writeText(copyText.value);
  
//     // Alert the copied text
//     alert("Copied the text: " + copyText.value);
//   }