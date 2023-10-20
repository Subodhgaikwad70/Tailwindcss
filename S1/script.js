const room = document.querySelector(".room");
const image = document.getElementById("image");
const imageUpload = document.getElementById("imageUpload");
const palette = document.querySelector(".palette");
const backgrounds = document.querySelector(".backgrounds");
const roomImageUpload = document.getElementById("roomImageUpload");


// Function to change room color
function changeRoomColor(color) {
    room.style.backgroundColor = color;
    room.style.backgroundImage = 'none';
    // console.log(room.style.backgroundImage);
}

function changeRoom(roomImageURL) {
    room.style.backgroundImage = `url(${roomImageURL})`;
    room.style.backgroundColor = 'none';
    // console.log(room.style.backgroundImage);
}



// Event listener for image upload
imageUpload.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const imageURL = URL.createObjectURL(file);
        image.src = imageURL;
    }
});

// Event listener for room image upload
roomImageUpload.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const roomImageURL = URL.createObjectURL(file);
        room.style.backgroundImage = `url(${roomImageURL})`;
    }
});


const rooms = ["./res/room_1.jpg", "./res/room_2.webp", "./res/room_3.webp", "./res/room_4.webp", "./res/room_5.webp", "./res/room_6.webp"]
rooms.forEach((room) => {
    const roomOption = document.createElement("div");
    roomOption.className = "room-option";
    roomOption.style.backgroundImage = `url(${room})`;
    roomOption.style.backgroundSize = "cover";
    roomOption.addEventListener("click", () => changeRoom(room));
    backgrounds.appendChild(roomOption);
});



// Create color palette options
const colors = ["#ffffff", "#f0f0f0", "#cccccc", "#999999", "#666666"];
colors.forEach((color) => {
    const colorOption = document.createElement("div");
    colorOption.className = "color-option";
    colorOption.style.backgroundColor = color;
    colorOption.addEventListener("click", () => changeRoomColor(color));
    palette.appendChild(colorOption);
});


function reset() {    
    image.src = "./res/img4.jpg";
    room.style.backgroundImage = "url('./res/room_1.jpg')";
}

reset()