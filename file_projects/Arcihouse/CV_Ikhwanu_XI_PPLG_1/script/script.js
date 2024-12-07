let pageNumber = 0;

const PAGE_CONTENT = [
  [
    `<h1>HTML CSS JAVASCRIPT</h1>
          <p>
            Tiga bahasa utama untuk membuat website. Di zaman sekarang, frameworknya lebih sering digunakan
          </p>
          <h2 class="info-h2">
            3 PROJECT <br />
            18 MONTHS EXP
          </h2>
          <div id="progress">
            <div id="bar" class="bar">
              <div id="fill-bar" class="fill-bar"></div>
            </div>
            <span>16%</span>
          </div>
          <div>
            <img src="images/transparent.png" alt="skill-logo" />
            <img src="images/6.png" alt="skill-logo" />
            <img src="images/5.png" alt="skill-logo" />
            <img src="images/1.png" alt="skill-logo" />
            <img src="images/4.png" alt="skill-logo" />
            <img src="images/3.png" alt="skill-logo" />
          </div>`,
    `<h1><span class="orange-text" >PROUDEST PROJECT</span></h1>
          <a href="https://ikhwanu-robik.github.io/" target="_blank" class="details-inside-a"><img src="images/zelda.png" alt="" width="100%"/></a>
          <p>
            Sebuah konsep game top down yang dibuat dengan HTML CSS JS
          </p>
          TAP
          <div id="swipe-icon">
            <div id="swipe-1" class="square"></div>
            <div id="swipe-2" class="square"></div>
            <div id="swipe-3" class="square"></div>
            <div id="swipe-4" class="square"></div>
            <div id="swipe-5"></div>
          </div>`,
    "url(../images/2.png)",
    "images/lblue-gradient.png",
    "16%",
  ],
  [
    `<h1>PHP</h1>
          <p>
            Bahasa server side yang paling lama dan banyak digunakan. 79% website menggunakan PHP. Sehingga meskipun banyak bahasa baru yang lebih unggul, namun PHP tetap eksis
          </p>
          <h2 class="info-h2">
            1 PROJECT <br />
            12 MONTHS EXP
          </h2>
          <div id="progress">
            <div id="bar" class="bar">
              <div id="fill-bar" class="fill-bar"></div>
            </div>
            <span>8%</span>
          </div>
          <div>
            <img src="images/2.png" alt="skill-logo" />
            <img src="images/transparent.png" alt="skill-logo" />
            <img src="images/5.png" alt="skill-logo" />
            <img src="images/1.png" alt="skill-logo" />
            <img src="images/4.png" alt="skill-logo" />
            <img src="images/3.png" alt="skill-logo" />
          </div>`,
    `<h1><span class="orange-text" >PROUDEST PROJECT</span></h1>
          <a href="https://github.com/Ikhwanu-Robik/ki_point_of_sales" target="_blank" class="details-inside-a"><img src="images/phpwork.png" alt="" width="100%"/></a>
          <p>
            Web Point of Sales yang dilengkapi fitur Autentikasi, dan CRUD
          </p>
          TAP
          <div id="swipe-icon">
            <div id="swipe-1" class="square"></div>
            <div id="swipe-2" class="square"></div>
            <div id="swipe-3" class="square"></div>
            <div id="swipe-4" class="square"></div>
            <div id="swipe-5"></div>
          </div>`,
    "url(../images/6.png)",
    "images/purple-gradient.png",
    "8%",
  ],
  [
    `<h1>Laravel</h1>
          <p>
           Framework dari bahasa PHP, dapat digunakan untuk membuat API ataupun sebagai framework fullstack
          </p>
          <h2 class="info-h2">
            1 PROJECT <br />
            12 MONTHS EXP
          </h2>
          <div id="progress">
            <div id="bar" class="bar">
              <div id="fill-bar" class="fill-bar"></div>
            </div>
            <span>8%</span>
          </div>
          <div>
            <img src="images/2.png" alt="skill-logo" />
            <img src="images/6.png" alt="skill-logo" />
            <img src="images/transparent.png" alt="skill-logo" />
            <img src="images/1.png" alt="skill-logo" />
            <img src="images/4.png" alt="skill-logo" />
            <img src="images/3.png" alt="skill-logo" />
          </div>`,
    `<h1><span class="orange-text" >PROUDEST PROJECT</span></h1>
          <a href="https://github.com/Ikhwanu-Robik/laundry-crud-laravel" target="_blank" class="details-inside-a"><img src="images/laravelwork.png" alt="" width="100%"/></a>
          <p>
            Website CRUD sederhana
          </p>
          TAP
          <div id="swipe-icon">
            <div id="swipe-1" class="square"></div>
            <div id="swipe-2" class="square"></div>
            <div id="swipe-3" class="square"></div>
            <div id="swipe-4" class="square"></div>
            <div id="swipe-5"></div>
          </div>`,
    "url(../images/5.png)",
    "images/red-gradient.png",
    "8%",
  ],
  [
    `<h1>C++</h1>
          <p>
            Bahasa pemrograman high-level dengan basis OOP, kerap digunakan untuk membuat system software, game development, embedded systems, scientific computing and high-performance applications
          </p>
          <h2 class="info-h2">
            10 PROJECT <br />
            12 MONTHS EXP
          </h2>
          <div id="progress">
            <div id="bar" class="bar">
              <div id="fill-bar" class="fill-bar"></div>
            </div>
            <span>83%</span>
          </div>
          <div>
            <img src="images/2.png" alt="skill-logo" />
            <img src="images/6.png" alt="skill-logo" />
            <img src="images/5.png" alt="skill-logo" />
            <img src="images/transparent.png" alt="skill-logo" />
            <img src="images/4.png" alt="skill-logo" />
            <img src="images/3.png" alt="skill-logo" />
          </div>`,
    `<h1><span class="orange-text" >PROUDEST PROJECT</span></h1>
          <a href="https://replit.com/@IkhwanuRobik/Kasir" target="_blank" class="details-inside-a"><img src="images/cppwork.png" alt="" width="100%"/></a>
          <p>
            Program kasir CLI
          </p>
          TAP
          <div id="swipe-icon">
            <div id="swipe-1" class="square"></div>
            <div id="swipe-2" class="square"></div>
            <div id="swipe-3" class="square"></div>
            <div id="swipe-4" class="square"></div>
            <div id="swipe-5"></div>
          </div>`,
    "url(../images/1.png)",
    "images/blue-gradient.png",
    "83%",
  ],
  [
    `<h1>Java</h1>
          <p>
            Bahasa pemrograman OOP tua untuk membuat aplikasi desktop dan backend.
          </p>
          <h2 class="info-h2">
            1 PROJECT <br />
            6 MONTHS EXP
          </h2>
          <div id="progress">
            <div id="bar" class="bar">
              <div id="fill-bar" class="fill-bar"></div>
            </div>
            <span>16%</span>
          </div>
          <div>
            <img src="images/2.png" alt="skill-logo" />
            <img src="images/6.png" alt="skill-logo" />
            <img src="images/5.png" alt="skill-logo" />
            <img src="images/1.png" alt="skill-logo" />
            <img src="images/transparent.png" alt="skill-logo" />
            <img src="images/3.png" alt="skill-logo" />
          </div>`,
    `<h1><span class="orange-text" >PROUDEST PROJECT</span></h1>
          <a href="https://github.com/Ikhwanu-Robik/cashier-app" target="_blank" class="details-inside-a"><img src="images/cashierapp.png" alt="" width="100%"/></a>
          <p>
            Point of Sales desktop yang masih berupa folder projek, memiliki modul sign up, login, transaksi, CRUD.
          </p>
          TAP
          <div id="swipe-icon">
            <div id="swipe-1" class="square"></div>
            <div id="swipe-2" class="square"></div>
            <div id="swipe-3" class="square"></div>
            <div id="swipe-4" class="square"></div>
            <div id="swipe-5"></div>
          </div>`,
    "url(../images/4.png)",
    "images/yellow-gradient.png",
    "16%",
  ],
  [
    `<h1>INKSCAPE</h1>
          <p>
            Aplikasi desain vector open source
          </p>
          <h2 class="info-h2">
            1 PROJECT <br />
            5 WEEKS EXP
          </h2>
          <div id="progress">
            <div id="bar" class="bar">
              <div id="fill-bar" class="fill-bar"></div>
            </div>
            <span>20%</span>
          </div>
          <div>
            <img src="images/2.png" alt="skill-logo" />
            <img src="images/6.png" alt="skill-logo" />
            <img src="images/5.png" alt="skill-logo" />
            <img src="images/1.png" alt="skill-logo" />
            <img src="images/4.png" alt="skill-logo" />
            <img src="images/transparent.png" alt="skill-logo" />
          </div>`,
    `<h1><span class="orange-text" >PROUDEST PROJECT</span></h1>
          <a href="https://drive.google.com/file/d/1Cei9-xUQOo1W-4B6g1BdMwRldMo_E8kS/view?usp=drive_link" target="_blank" class="details-inside-a"><img src="images/ikhwanu-16-pplg-1.png" alt="" width="40%"/></a>
          <p>
            Poster portofolio pribadi
          </p>
          TAP
          <div id="swipe-icon">
            <div id="swipe-1" class="square"></div>
            <div id="swipe-2" class="square"></div>
            <div id="swipe-3" class="square"></div>
            <div id="swipe-4" class="square"></div>
            <div id="swipe-5"></div>
          </div>`,
    "url(../images/3.png)",
    "images/white-gradient.png",
    "20%",
  ],
  [
    `<h1>CERTIFICATES</h1>
    <div id="certif" onclick="window.open('https://drive.google.com/drive/folders/1vgvjsqMTRW6Hex9muFC2yRMZjeKaV0L1?usp=drive_link', '_blank').focus()">
      <img src="./images/Certificates/certificate_cs1.jpg" alt="">
      <img src="./images/Certificates/certificate_cs2.jpg" alt="">
      <img src="./images/Certificates/certificate_c++1.jpg" alt="">
      <img src="images/Certificates/sertifikat_course_123_3838263_120324171353 (1) (2)/sertifikat_course_123_3838263_120324171353 (1) (2)-1.jpg" alt="">
      <img src="images/Certificates/sertifikat_course_177_3838263_010724190839/sertifikat_course_177_3838263_010724190839-1.jpg" alt="">
      <img src="images/Certificates/sertifikat_course_256_3838263_090524060428 (1)/sertifikat_course_256_3838263_090524060428 (1)-1.jpg" alt="">
      <img src="images/Certificates/sertifikat_course_315_3838263_150624195537/sertifikat_course_315_3838263_150624195537-1.jpg" alt="">
      <img src="images/Certificates/sertifikat_course_600_3838263_090724093353/sertifikat_course_600_3838263_090724093353-1.jpg" alt="">
      <img src="images/Certificates/sertifikat_course_653_3838263_230624112650/sertifikat_course_653_3838263_230624112650-1.jpg" alt="">
      <img src="images/Certificates/sertifikat_course_86_3838263_260724211817/sertifikat_course_86_3838263_260724211817-1.jpg" alt="">
    </div>
    `,
    `
          TAP
          <div id="swipe-icon">
            <div id="swipe-1" class="square"></div>
            <div id="swipe-2" class="square"></div>
            <div id="swipe-3" class="square"></div>
            <div id="swipe-4" class="square"></div>
            <div id="swipe-5"></div>
          </div>`,
  ],
  [
    `<h1>FORMAL<br>EDUCATION</h1>
    <h2>TK PERTIWI XVIII</h2>
          <p>
            Tempat belajar membaca dan berhitung untuk pertama kali. TK ini bertempat di timur Balai Desa Rejosari, Jalan Melati No. 58.
            <br>
            2013 - 2014
          </p>
    <h2>SDN 2 Rejosari</h2>
          <p>
            Terletak di sebelah barat TK PERTIWI XVIII dengan hanya dibatasi gedung Balai Desa. Di sini, minat teknologi saya mulai muncul.
            <br>
            2014 - 2020
          </p>
    <h2>SMPN 1 Jatiroto</h2>
          <p>
            Bila dua institusi sebelumnya berada di Jatisrono, saat SMP ini pindah ke kecamatan Jatiroto. Pada masa ini, saya mulai mempelajari dasar penggunaan komputer.
            <br>
            2020 - 2023
          </p>
    <h2>SMKN 1 Jatiroto</h2>
          <p>
            Tempat saya belajar saat ini. Kemampuan pemrograman mulai berkembang karena memilih jurusan PPLG (Pengembangan Perangkat Lunak dan Gim), hingga akhirnya bisa membuat website ini.
            <br>
            2023 - Present
          </p>
          `,
    `<h1>COURSES</h1>
          <h2>DICODING</h2>
          <p>
            Sebuah platform belajar pemrograman secara mandiri dengan diberikan materi dan learning path. Dicoding juga memberikan sertifikat setelah penyelesaian kelas.
          </p>
          <h2>Kelas Industri Crocodic</h2>
          <p>
            Sebuah kelas online yang berupa video meet seminggu sekali yang diselenggarakan oleh Crocodic dengan bekerja sama dengan sekolah-sekolah SMK.
          </p>
          TAP
          <div id="swipe-icon">
            <div id="swipe-1" class="square"></div>
            <div id="swipe-2" class="square"></div>
            <div id="swipe-3" class="square"></div>
            <div id="swipe-4" class="square"></div>
            <div id="swipe-5"></div>
          </div>`,
  ],
  [
    ``,
    `<h1>CONTACT ME</h1>
        <div id="socials">
  <a href="https://www.instagram.com/ikuwandesu/"><img src="images/sosmed/ig.png" alt="" target="_blank"/></a>
  <a href="mailto:robikikhwan@gmail.com?subject=Hello%20Iwan!%20Let's%20Talk!" target="_blank"><img src="images/sosmed/email.png" alt="" /></a>
  <a href="https://t.me/ikuwandesu" target="_blank"><img src="images/sosmed/telegram.png" alt="" /></a>
  <a href="https://maps.app.goo.gl/QYT54N4wCbWibamN9" target="_blank"><img src="images/sosmed/office.png" alt="" /></a>
</div>`,
  ],
];

function closePageChange(info, details, main) {
  pageNumber++;

  info.className = "";
  details.className = "";
  main.style.setProperty("--bgopc", 1);

  blinkingSwipes();
  const swipeIcon = document.getElementById("swipe-icon");
  if (swipeIcon) {
    swipeIcon.addEventListener("click", checkTap);
  }
}

function page6(info, details, main) {
  main.style.setProperty("--bgimg", "url(../images/transparent.png)");
  document.getElementById("iwan").src = "/images/transparent.png";
  document.getElementById("info").style.justifyContent = "flex-start";
  document.getElementById("info").style.height = "100vh";
  document.getElementById("person").style.display = "none";
  document.getElementById("details").style.background =
    "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%,rgba(33, 33, 33, 1) 80%)";
  main.style.flexDirection = "column";

  info.innerHTML = PAGE_CONTENT[pageNumber][0];
  details.innerHTML = PAGE_CONTENT[pageNumber][1];
}

function page7(info, details, main) {
  document.getElementById("iwan").src = "images/iwan-seragam.png";
  document.getElementById("person").style.display = "block";
  document.getElementById("person").className = "";
  document.getElementById("details").style.background =
    "linear-gradient(-90deg,rgba(0, 0, 0, 1) 0%,rgba(33, 33, 33, 1) 80%)";
  document.getElementById("details-inside").style.alignItems = "start";
  main.style.flexDirection = "row";

  info.innerHTML = PAGE_CONTENT[pageNumber][0];
  details.innerHTML = PAGE_CONTENT[pageNumber][1];

  let h2Title = document.querySelectorAll("main h2");
  h2Title.forEach((h2) => {
    h2.style.fontFamily = "oswald";
    h2.style.fontSize = "30px";
  });
}

function page8(info, details, main) {
  document
    .querySelector("main")
    .style.setProperty("--bgimg", "url(../images/Reunion.webp)");
  details.style.alignItems = "center";
  main.animate([{ transform: `translateX(-25vw)` }], {
    duration: 1000,
    fill: "forwards",
    timingFunction: "ease-in-out",
  });

  info.innerHTML = PAGE_CONTENT[pageNumber][0];
  details.innerHTML = PAGE_CONTENT[pageNumber][1];
}

function blinkingSwipes() {
  let swipes = [
    document.getElementById("swipe-1"),
    document.getElementById("swipe-2"),
    document.getElementById("swipe-3"),
    document.getElementById("swipe-4"),
    document.getElementById("swipe-5"),
  ];

  let idx = 0;

  function startSwipeAnimation() {
    if (idx === 5) {
      idx = 0;
      for (let i = 0; i < 5; i++) {
        if (i !== 4) {
          swipes[i].setAttribute("style", "background-color: white;");
        } else {
          swipes[i].setAttribute("style", "border-left: 1em solid white;");
        }
      }
    }

    if (idx !== 4) {
      swipes[idx].setAttribute("style", "background-color: #FF4934;");
    } else {
      swipes[idx].setAttribute("style", "border-left: 1em solid #FF4934;");
    }

    idx++;
  }

  setInterval(startSwipeAnimation, 300);
}

function changeContent(info, details, main) {
  if (pageNumber < 6) {
    main.style.setProperty("--bgimg", PAGE_CONTENT[pageNumber][2]);

    info.innerHTML = PAGE_CONTENT[pageNumber][0];
    details.innerHTML = PAGE_CONTENT[pageNumber][1];
    document.getElementById("fill-bar").style.width =
      PAGE_CONTENT[pageNumber][4];

    pageNumber++;

    info.className = "";
    details.className = "";
    main.style.setProperty("--bgopc", 1);

    blinkingSwipes();
    const swipeIcon = document.getElementById("swipe-icon");
    if (swipeIcon) {
      swipeIcon.addEventListener("click", checkTap);
    }
  } else if (pageNumber == 6) {
    page6(info, details, main);
    closePageChange(info, details, main);
  } else if (pageNumber == 7) {
    page7(info, details, main);
    closePageChange(info, details, main);
  } else if (pageNumber == 8) {
    closePageChange(info, details, main);
  }
}

function changeStyle(info, details, fire, main) {
  console.log(pageNumber);
  if (pageNumber < 6) {
    main.classList.add("mainbf");
    info.classList.add("info");
    details.classList.add("details");

    document.getElementById("fire-img").src = PAGE_CONTENT[pageNumber][3];
    fire.className = "";

    setTimeout(changeContent, 1500, info, details, main);
  } else if (pageNumber == 6) {
    main.classList.add("mainbf");
    info.classList.add("info");
    details.classList.add("details");

    setTimeout(changeContent, 1500, info, details, main);
  } else if (pageNumber == 7) {
    main.classList.add("mainbf");
    info.classList.add("info");
    details.classList.add("details");

    document.getElementById("fire-img").src = PAGE_CONTENT[pageNumber][3];
    fire.className = "";

    setTimeout(changeContent, 1500, info, details, main);
  } else if (pageNumber == 8) {
    main.classList.add("mainbf");
    info.classList.add("info");
    details.classList.add("details");

    page8(info, details, main);

    setTimeout(changeContent, 1500, info, details, main);
  }
}

function swipeContent(e) {
  let info = document.getElementById("info-inside");
  let infoX = info.getBoundingClientRect().x - 300;
  let details = document.getElementById("details-inside");
  let main = document.querySelector("main");
  let fire = document.getElementById("fire-img");

  info.animate([{ transform: `translateX(${infoX}px)` }], {
    duration: 1000,
    fill: "none",
    timingFunction: "ease-in-out",
  });
  details.animate([{ transform: `translateX(${infoX}px)` }], {
    duration: 1000,
    fill: "none",
    timingFunction: "ease-in-out",
  });

  info.className = "fade-out";
  details.className = "fade-out";
  fire.className = "fade-out";
  main.style.setProperty("--bgopc", 0);
  if (pageNumber == 6) {
    document.getElementById("person").classList.add("fade-out");
  }

  setTimeout(changeStyle, 1500, info, details, fire, main);
}

function checkTap(e) {
  swipeContent(e);
}

document.addEventListener("DOMContentLoaded", function () {
  blinkingSwipes();

  document.getElementById("swipe-icon").addEventListener("click", checkTap);
});
