import { parsed } from "./document-promises.js";

export async function create_repository_menu() {
    await parsed;
    const repos = ["SimpleSPA", "SimpleAPI", "oidc-tester", "push-demo", "webauthn-tester"];
    const div = document.getElementById("repository_menu");
    for (const i of repos) {
        const button = document.createElement("button");
        button.setAttribute("href", `https://github.com/psteniusubi/${i}`);
        button.innerText = i;
        div.appendChild(button);
    }
}
export async function set_button_href_handlers() {
    await parsed;
    document.querySelectorAll("button[href]").forEach(i => {
        if (!i.hasAttribute("title")) {
            const url = new URL(i.getAttribute("href"), location.href);
            i.setAttribute("title", url);
        }
        i.addEventListener("click", e => {
            const button = e.currentTarget;
            const target = button.getAttribute("target") || "_blank";
            if ("_self" === target) {
                location.assign(button.getAttribute("href"));
            } else {
                window.open(button.getAttribute("href"), target);
            }
        });
        // i.addEventListener("mouseenter", e => {
        //     const button = e.currentTarget;
        //     const url = new URL(i.getAttribute("href"), location.href);
        //     console.log("enter " + url);
        //     window.status = url;
        // });
        // i.addEventListener("mouseleave", e => {
        //     const button = e.currentTarget;
        //     const url = new URL(i.getAttribute("href"), location.href);
        //     console.log("leave " + url);
        //     window.status = null;
        // });
    });
}        
