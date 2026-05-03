document.getElementById("scroll-to-bsl").onclick = () => {
  const element = document.getElementById("bst");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};
