let data = [];
const nama = document.getElementById("nama");
const umur = document.getElementById("umur");
const donasi = document.getElementById("donasi");
const errorElement = document.getElementById("error");

//                          VALIDASI GAGAL
// form.addEventListener("submit", (e) => {
//   let messages = [];
//   if (nama.value === "" || nama.value == null) {
//     messages.push("Mohon isi nama");
//   }

//   if (nama.value.length < 10) {
//     messages.push("Nama terlalu pendek!!");
//   }

//   if (umur.value < 25) {
//     messages.push("Belum cukup umur!!");
//   }

//   if (donasi.value < 100000 && donasi.value > 1000000) {
//     messages.push("Donasi minimal 100 ribu dan maksimal 1 juta!!");
//   }

//   if (messages.length > 0) {
//     e.preventDefault();
//     errorElement.innerText = messages.join(" || ");
//   }
// });

function submit() {
  data.push(nama.value);
  data.push(umur.value);
  data.push(donasi.value);
  console.log(data);
  //
  const table = document.getElementById("tabel");
  const row = table.insertRow(-1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  cell1.innerHTML = nama.value;
  cell2.innerHTML = umur.value;
  cell3.innerHTML = donasi.value;
}

// function submit() {
//   const nama = document.getElementById("nama");
//   const umur = document.getElementById("umur");
//   const donasi = document.getElementById("donasi");
//   data.push(nama.value);
//   data.push(umur.value);
//   data.push(donasi.value);
//   console.log(data);

//   const node = document.createElement("p");
//   const submitNama = document.createTextNode(nama.value);
//   const submitUmur = document.createTextNode(umur.value);
//   const submitDonasi = document.createTextNode(donasi.value);
//   node.appendChild(submitNama);
//   document.getElementById("submitNama").appendChild(node);
//   node.appendChild(submitUmur);
//   document.getElementById("submitUmur").appendChild(node);
//   node.appendChild(submitDonasi);
//   document.getElementById("submitDonasi").appendChild(node);
// }

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
