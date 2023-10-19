const room = document.querySelector(".room");
const image = document.getElementById("image");
const imageUpload = document.getElementById("imageUpload");
const palette = document.querySelector(".palette");
const roomImageUpload = document.getElementById("roomImageUpload");

// Function to change room color
function changeRoomColor(color) {
    room.style.backgroundColor = color;
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

// Create color palette options
const colors = ["#ffffff", "#f0f0f0", "#cccccc", "#999999", "#666666"];
colors.forEach((color) => {
    const colorOption = document.createElement("div");
    colorOption.className = "color-option";
    colorOption.style.backgroundColor = color;
    colorOption.addEventListener("click", () => changeRoomColor(color));
    palette.appendChild(colorOption);
});
