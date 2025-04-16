const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close-button");

const updates = [
  {
    title: "Code Academy: Front-End Developer Career Path",
    desc: "Details about the Code Academy course, projects, skills learned, and experience."
  },
  {
    title: "Kenvue",
    desc: "Experience at Kenvue, tasks, technologies used, and impact of the role."
  },
  {
    title: "Graduation",
    desc: "Information about the graduation, degree earned, and relevant coursework."
  }
];

document.querySelectorAll(".updates img").forEach((img, index) => {
  img.addEventListener("click", () => {
    modalTitle.textContent = updates[index].title;
    modalDesc.textContent = updates[index].desc;
    modal.style.display = "block";
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};