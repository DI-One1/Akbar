function calling(nickname, language) {
    if(language === "Sundanese") {
        console.log(`Kumaha Damang ${nickname}!`);
    } else if (language === "Javanese") {
        console.log(`Piye Kabare ${nickname}!`);
    } else {
        console.log(`Bagaimana Kabarnya ${nickname}!`);
    }
}

calling("Agoezz", "Javanese")