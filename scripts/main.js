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


function displayMessage(message) {
    const $photos = document.querySelector('#photos');
    const $message = document.createElement('div');

    $message.classList.add('message');  // adding class
    //  $message.id = 'message';   // adding id

    // const $header = document.createElement('div');
    // $header.classList.add('message-header');
    // $header.textContent = "Message to user";  // textContent jest szybsze od innerHTML i dużo szybsze od innerText

    // const $body = document.createElement('div');
    // $body.classList.add('message-body');
    // $body.textContent = 'Gallery is empty. There are no photos.';
    
    // $message.append($header);
    // $message.append($body);
    $photos.append($message);
    // $message.textContent = "Gallery is empty";

    $message.innerHTML = `
    <div class="message">
        <div class="message-header">
            Message to user
         </div>
         <div class="message-body">
            ${message}
         </div>
     </div>
`;
}

function displayEmptyGalleryMessage() {
    displayMessage("Gallery is empty. There are no photos.");

}

function main() {
    console.log("main function file works ");
    const photos = [
        "https://i.picsum.photos/id/1036/200/300.jpg",
        "https://i.picsum.photos/id/1035/200/300.jpg",
        "https://i.picsum.photos/id/1033/200/300.jpg"
    ];

    const isGalleryEmpty = (photos.length === 0)

    if (isGalleryEmpty) {
        renderPhotos(photos);  // <- jako argument wchodzi kolekcja
    } else {
        displayEmptyGalleryMessage();  // <- tylko wewnątrz tej funkcji zmieniamy tekst wiadomości (parametr funkcji displayMessage() i możemy ją wywołać wiele razy z tym samym tekstem )
    }
};
main();

