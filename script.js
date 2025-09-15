<button id="colorBtn">Change Background</button>

<script>

const btn = document.getElementById("colorBtn");

btn.addEventListener("click", () => {

  const randomColor = `hsl(${Math.floor(Math.random()*360)},70%,70%)`;

  document.body.style.background = randomColor;

});

</script>