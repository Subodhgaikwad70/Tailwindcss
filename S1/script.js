const room = document.querySelector(".room");
const image = document.getElementById("image");
const imageUpload = document.getElementById("imageUpload");
const palette = document.querySelector(".palette");
const backgrounds = document.querySelector(".backgrounds");
const roomImageUpload = document.getElementById("roomImageUpload");


function changeRoomColor(color) {
    room.style.backgroundColor = color;
    room.style.backgroundImage = 'none';
}

function changeRoom(roomImageURL) {
    room.style.backgroundImage = `url(${roomImageURL})`;
    room.style.backgroundColor = 'none';
}



imageUpload.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const imageURL = URL.createObjectURL(file);
        image.src = imageURL;
    }
});

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



const colors = ["#e7eaf6", "#a2a8d3", "#38598b", "#113f67", "#f95959"];
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