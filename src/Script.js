// menu
const sidebar = document.getElementById("sidebar");
const closebtn = document.getElementById("closeBtn");
const humberIcon = document.getElementById("menuBtn");

humberIcon.addEventListener("click" ,()=>{
    sidebar.classList.remove("-translate-x-full");
});
closebtn.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
});

// slider

const silders = document.getElementById("slider");
const slides = silders.children;
const slidercount = slides.length;

let index = 0;

// show first slide initially
slides[0].classList.remove("opacity-0", "pointer-events-none");
slides[0].classList.add("opacity-100");

function autoSlider() {
  // hide all slides
  [...slides].forEach((slide) => {
    slide.classList.add("opacity-0", "pointer-events-none");
    slide.classList.remove("opacity-100");
  });

  index++;

  silders.style.transition = "transform 0.7s linear";
  silders.style.transform = `translateX(-${index * 100}%)`;

  // show active slide
  if (slides[index]) {
    slides[index].classList.remove("opacity-0", "pointer-events-none");
    slides[index].classList.add("opacity-100");
  }

  // infinite loop reset
  if (index === slidercount-1) {
    setTimeout(() => {
      silders.style.transition = "none";
      silders.style.transform = "translateX(0)";
      index = 0;

      [...slides].forEach((slide) => {
        slide.classList.add("opacity-0", "pointer-events-none");
        slide.classList.remove("opacity-100");
      });

      slides[0].classList.remove("opacity-0", "pointer-events-none");
      slides[0].classList.add("opacity-100");

      // force reflow
      silders.offsetHeight;

      silders.style.transition = "transform 0.7s linear";
    }, 700);
  }
}

setInterval(autoSlider, 3000);


// tab


const tab_btn = document.querySelectorAll(".tab-btn");
const card = document.querySelectorAll(".item");
const wrapper = document.getElementById("productwraper");

tab_btn.forEach((tab) => {
  tab.addEventListener("click", () => {

    let category = tab.dataset.tab;
    let visibleCount = 0;
    // Reset tabs style
    tab_btn.forEach((b) => {
      b.classList.remove("border-b-2", "border-black", "text-black");
      b.classList.add("text-[#838383]");
    });

    // Active tab style
    tab.classList.add("border-b-2", "border-black", "text-black");
    tab.classList.remove("text-[#838383]");

    // Show / Hide products
    card.forEach((product) => {
      if (product.dataset.category === category) {
        product.classList.remove("hidden");
      } else {
        product.classList.add("hidden");
      }
    });

    if (visibleCount <= 5) {
      wrapper.classList.remove("justify-start");
      wrapper.classList.add("justify-center");
    } else {
      wrapper.classList.remove("justify-center");
      wrapper.classList.add("justify-start");
    }
  });
});
wrapper.addEventListener("click" ,(e)=>{
  e.preventDefault()
  wrapper.scrollLeft+=e.deltaZ
})

const prvesbutton = document.getElementById("prevBtn");
const nextbutton = document.getElementById("nextBtn");
 const scrollAmount = 305;

 nextBtn.addEventListener("click", () => {
   wrapper.scrollBy({
     left: scrollAmount,
     behavior: "smooth",
   });
 });

 
 prevBtn.addEventListener("click", () => {
   wrapper.scrollBy({
     left: -scrollAmount,
     behavior: "smooth",
   });
 });

// document.querySelector("card").click();



//modal

const button = document.getElementById("quick");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");

button.addEventListener("click", ()=>{
  modal.classList.remove("hidden");   
})
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if(e.target == modal){
    modal.classList.add("hidden"); 
  }
});
document.addEventListener("click", (e) => {
  if (e.key == "Escape") {
    modal.classList.add("hidden");
  }
});



    const data = [
      {
        text: "I am a regular at this fashion shop - their stylish clothes and accessories always keep me ahead of the trend.",
        author: "MADELYN GEORGE, ELLE",
        avatar: "images/r1.jpg"
      },
      {
        text: "The curated selection and customer service make every purchase an effortless experience.",
        author: "MICHAEL S., CUSTOMER",
        avatar: "images/r2.jpg"
      },
      {
        text: "Fast delivery and high quality — I keep coming back for new collections.",
        author: "SOPHIA L., BLOGGER",
        avatar: "images/r3.jpg"
      }
    ];

    let idx = 0;
    const avatar = document.getElementById('t-avatar');
    const text = document.getElementById('t-text');
    const author = document.getElementById('t-author');
    const prev = document.getElementById('t-prev');
    const next = document.getElementById('t-next');
  
    function render(){
      avatar.src= data[idx].avatar;
      text.textContent = data[idx].text;
      author.textContent = data[idx].author;
    }

    prev.addEventListener("click" , ()=>{
      idx--;
      if(idx<0)idx= data.length-1;
        render()
      
    })
   next.addEventListener("click" , ()=>{
      idx++;
      if(idx>=data.length)
        idx=0;
        render()
})

