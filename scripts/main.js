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


function displayMessage() {
    const $photos = document.querySelector('#photos');
    const $message = document.createElement('div');

    $message.classList.add('message');  // adding class
    //  $message.id = 'message';   // adding id

    const $header = document.createElement('div');
    $header.classList.add('message-header');
    $header.textContent = "Message to the user";

    const $body = document.createElement('div');
    $body.classList.add('message-body');
    $body.textContent = 'Gallery is empty. There are no photos.';
    
    $message.append($header);
    $message.append($body);
    $photos.append($message);
    // $message.textContent = "Gallery is empty";

    // <div class="message">
    //     <div class="message-header">
    //         message header

    //      </div>
    //      <div class="message-body">
    //         message body
    //      </div>
    //  </div>


}

function main() {
    console.log("main function file works ");
    const photos = [
        "https://i.picsum.photos/id/1036/200/300.jpg",
        "https://i.picsum.photos/id/1035/200/300.jpg",
        "https://i.picsum.photos/id/1033/200/300.jpg"
    ];
    // renderPhotos(photos);  // <- jako argument wchodzi kolekcja
    displayMessage();
};
main();

