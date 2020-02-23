function renderPhoto(photo) {
    console.log('photo', photo);

    // create HTMLImageElement
    const $photo = document.createElement('img');
    $photo.src = photo;
    // równoznaczne z linijka wyżej:  $photo.setAttribute('src', photo)

    // Render
    const $photos = document.querySelector("#photos");
    $photos.append($photo);
}

function renderPhotos(photos) {
    photos.forEach(function (photo) {
        renderPhoto(photo);

    });
}




function main() {
    console.log("main function file works ");
    const photos = [
        "https://i.picsum.photos/id/1036/200/300.jpg",
        "https://i.picsum.photos/id/1035/200/300.jpg",
        "https://i.picsum.photos/id/1033/200/300.jpg"
    ];
    renderPhotos(photos);  // <- jako argument wchodzi kolekcja
};
main();

