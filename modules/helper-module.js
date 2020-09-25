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
        i.addEventListener("click", e => {
            const name = e.target.getAttribute("target") || "_blank";
            if ("_self" === name) {
                location.assign(e.target.getAttribute("href"));
            } else {
                window.open(e.target.getAttribute("href"), name);
            }
        });
    });
}        
