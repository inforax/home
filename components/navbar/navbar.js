var navbar = {
 view: function () {
  return m("nav", { class: "navbar navbar-expand-lg navbar-dark bg-dark fixed-top" }, [
   m("div", { class: "container" }, [
    m("a", { class: "navbar-brand", href: "index" }, [
     m("span", { class: "text-white" }, "INFORAX")
    ]),
    m("button", { class: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarResponsive", "aria-controls": "navbarResponsive", "aria-expanded": "false", "aria-label": "Toggle navigation" }, [
     m("span", { class: "navbar-toggler-icon" })
    ]),
    m("div", { class: "collapse navbar-collapse", id: "navbarResponsive" }, [
     m("ul", { class: "navbar-nav ml-auto" }, [
      m("li", { class: "nav-item" }, [
       m("a", { class: "nav-link", href: "vaca" }, "Ищем")
      ]),
      m("li", { class: "nav-item" }, [
       m("a", { class: "nav-link", href: "https://www.facebook.com/groups/inforax", target: "_blank" }, [
        m("img", { class: "d-none d-sm-block nav-svg-icon", src: "bl-themes/blogx/img/facebook.svg", alt: "Facebook" }),
        m("span", { class: "d-inline d-sm-none" }, "Facebook")
       ])
      ]),
      m("li", { class: "nav-item" }, [
       m("a", { class: "nav-link", href: "https://www.instagram.com/kayzerinsta/", target: "_blank" }, [
        m("img", { class: "d-none d-sm-block nav-svg-icon", src: "bl-themes/blogx/img/instagram.svg", alt: "Instagram" }),
        m("span", { class: "d-inline d-sm-none" }, "Instagram")
       ])
      ]),
      m("li", { class: "nav-item" }, [
       m("a", { class: "nav-link", href: "https://vk.com/inforax", target: "_blank" }, [
        m("img", { class: "d-none d-sm-block nav-svg-icon", src: "bl-themes/blogx/img/vk.svg", alt: "VK" }),
        m("span", { class: "d-inline d-sm-none" }, "VK")
       ])
      ])
     ])
    ])
   ])
  ])
 }
};

let component = document.getElementById("navbar");
component ? m.mount(component, navbar) : null;


/*
	<div class="container">
		<a class="navbar-brand" href="index">
			<span class="text-white">INFORAX</span>
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav ml-auto">

				<!-- Static pages here -->
								<li class="nav-item">
					<a class="nav-link" href="vaca">Ищем</a>
				</li>

				<!-- Social Networks -->
								<li class="nav-item">
					<a class="nav-link" href="https://www.facebook.com/groups/inforax" target="_blank">
						<img class="d-none d-sm-block nav-svg-icon" src="bl-themes/blogx/img/facebook.svg" alt="Facebook" />
						<span class="d-inline d-sm-none">Facebook</span>
					</a>
				</li>
								<li class="nav-item">
					<a class="nav-link" href="https://www.instagram.com/kayzerinsta/" target="_blank">
						<img class="d-none d-sm-block nav-svg-icon" src="bl-themes/blogx/img/instagram.svg" alt="Instagram" />
						<span class="d-inline d-sm-none">Instagram</span>
					</a>
				</li>
								<li class="nav-item">
					<a class="nav-link" href="https://vk.com/inforax" target="_blank">
						<img class="d-none d-sm-block nav-svg-icon" src="bl-themes/blogx/img/vk.svg" alt="VK" />
						<span class="d-inline d-sm-none">VK</span>
					</a>
				</li>

			</ul>
		</div>
	</div> */