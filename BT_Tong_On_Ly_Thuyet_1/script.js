let musics = JSON.parse(localStorage.getItem("songs")) || [
  { id: 1, nameMusic: "Nắng còn cho", singer: "Hien Sky" },
];
let editId = null;
const titleInput = document.querySelector("#title");
const artistInput = document.querySelector("#artist");
const searchInput = document.querySelector("#search");
const tbody = document.querySelector("#songTable");
const submitBtn = document.querySelector("#submitBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const formTitle = document.querySelector("#formTitle");
const saveToLocal = () => {
  localStorage.setItem("songs", JSON.stringify(musics));
};
const render = (data = musics) => {
  let html = "";
  data.forEach((music, index) => {
    html += `
    <tr>
      <td>${index + 1}</td>
      <td>${music.nameMusic}</td>
      <td>${music.singer}</td>
      <td>
        <div class="action-buttons">
          <button class="btn-edit" onclick="editMusic(${music.id})">Sửa</button>
          <button class="btn-delete" onclick="deleteMusic(${music.id})">Xóa</button>
        </div>
      </td>
    </tr>`;
  });
  tbody.innerHTML = html;
};
const handleSubmit = () => {
  const name = titleInput.value.trim();
  const artist = artistInput.value.trim();

  if (name === "" || artist === "") {
    Swal.fire({ icon: "error", title: "Lỗi", text: "Vui lòng nhập đầy đủ!" });
    return;
  }

  if (editId) {
    const index = musics.findIndex((music) => music.id === editId);
    if (index !== -1) {
      musics[index] = { ...musics[index], nameMusic: name, singer: artist };
    }
    editId = null;
    submitBtn.innerText = "Thêm";
    if (formTitle) formTitle.innerText = "🎵 Thêm bài hát";
    if (cancelBtn) cancelBtn.style.display = "none";
  } else {
    const newMusic = {
      id: Date().now,
      nameMusic: name,
      singer: artist,
    };
    musics.push(newMusic);
  }

  saveToLocal();
  titleInput.value = "";
  artistInput.value = "";
  render();
};
window.editMusic = (id) => {
  const song = musics.find((music) => music.id === id);
  if (song) {
    titleInput.value = song.nameMusic;
    artistInput.value = song.singer;
    submitBtn.innerText = "Cập nhật";
    formTitle.innerText = "📝 Sửa bài hát";
    cancelBtn.style.display = "inline";
    editId = id;
    titleInput.focus();
  }
};
window.deleteMusic = (id) => {
  musics = musics.filter((music) => music.id !== id);
  saveToLocal();
  render();
};
if (cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    editId = null;
    titleInput.value = "";
    artistInput.value = "";
    submitBtn.innerText = "Thêm";
    if (formTitle) {
      formTitle.innerText = "🎵 Thêm bài hát";
    }
    cancelBtn.style.display = "none";
  });
}
window.searchSong = () => {
  const value = searchInput.value.toLowerCase();
  const filtered = musics.filter(
    (music) =>
      music.nameMusic.toLowerCase().includes(value) ||
      music.singer.toLowerCase().includes(value),
  );
  render(filtered);
};
submitBtn.addEventListener("click", handleSubmit);
render();
