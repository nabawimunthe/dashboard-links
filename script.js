function searchGoogle() {
    const query = document.getElementById("searchInput").value; // Mengambil input pencarian
    if (query.trim() !== "") { // Memastikan input tidak kosong
        const googleSearchURL = https://www.google.com/search?q=${encodeURIComponent(query)};
        window.open(googleSearchURL, "_blank"); // Membuka Google di tab baru
    } else {
        alert("Please enter a search query!"); // Memberikan notifikasi jika input kosong
    }
}