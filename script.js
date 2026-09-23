function openModal(name){
  const modal = document.getElementById("modal");
  const title = document.getElementById("modalTitle");

  if(!modal || !title) return;

  title.textContent = name + " — Request";
  modal.classList.add("show");
}

function closeModal(){
  const modal = document.getElementById("modal");

  if(!modal) return;

  modal.classList.remove("show");
}

function toast(msg){
  const el = document.getElementById("toast");

  if(!el) return;

  el.textContent = msg;
  el.classList.add("show");

  setTimeout(() => {
    el.classList.remove("show");
  }, 2800);
}

function submitForm(e){
  e.preventDefault();

  closeModal();

  toast(
    "Request gespeichert. Für echte Übermittlung später Discord/API verbinden."
  );

  e.target.reset();
}

function filterShop(category, button){
  document
    .querySelectorAll(".shop-filter")
    .forEach(btn => btn.classList.remove("active"));

  if(button){
    button.classList.add("active");
  }

  document
    .querySelectorAll("#shopGrid .product")
    .forEach(card => {
      if(
        category === "all" ||
        card.dataset.category === category
      ){
        card.style.display = "block";
      }else{
        card.style.display = "none";
      }
    });
}

document.addEventListener("keydown", event => {
  if(event.key === "Escape"){
    closeModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("modal");

  if(modal){
    modal.addEventListener("click", event => {
      if(event.target === modal){
        closeModal();
      }
    });
  }

});