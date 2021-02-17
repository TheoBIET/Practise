//Supprimer la DIV
document.querySelector("#a-supprimer").remove();

// Body
let body = document.querySelector('html');
body.style.backgroundColor = "#fff";

//Header
let headerColor = "#e3b04b";
let header = document.createElement("header");
header.textContent = "Bienvenue";
header.className = "container-fluid"
document.body.append(header);
header.style.backgroundColor = headerColor;
header.style.fontSize = "30px";
header.style.padding = "30px";

//Sous-header
let breadcrumbColor = "#f1d6ab";
let breadcrumb = document.createElement("div");
breadcrumb.textContent = "Accueil / Une autre page";
breadcrumb.className = "breadcrumb"
document.body.append(breadcrumb);
breadcrumb.style.backgroundColor = breadcrumbColor;

// Paragraphe
let p = document.createElement("p");
p.textContent = "They argue. While the argument seems to be different the truth is it's always the same. Yes, the topic may be different or the circumstances, but when all said and done, it all came back to the same thing. They both knew it, but neither has the courage or strength to address the underlying issue. So they continue to argue.";
p.className = "container"
document.body.append(p);
p.style.backgroundColor = pColor;
p.style.fontSize = "20px";
