
import categories from "categories.js";
let sidebar = document.getElementById("sidebar");
console.log(categories);
sidebar.innerHTML = `
<!-- Right Sidebar -->
<div class="col-md-3">
 <div
  w3-include-html="https://inforax.com/cats.html"></div>
 <div
  w3-include-html="https://inforax.com/latest.html"></div>
 <div class="plugin plugin-tags"></div>
 <div
  w3-include-html="https://inforax.com/about.html"></div>
 <script>w3IncludeHTML();</script>
</div>
</div>`;
