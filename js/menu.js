/* toggleLinks
 * Display / hide navigation links
 */
export const toggleLinks = () => {
  const toggleBtn = document.querySelector("#toggle-btn");
  const links = document.querySelector("#navbar-links");
  toggleBtn.addEventListener("click", () => {
    links.classList.toggle("active");
  });
};
