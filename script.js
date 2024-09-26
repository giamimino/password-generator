const generate = document.getElementById("generate");
const copy = document.getElementById("copy");
const input = document.getElementById("input");

generate.addEventListener("click", ()=>
{
    createPassword();
});

copy.addEventListener("click", ()=>
{
    copyPassword();
});

function createPassword()
{
    const chars = 
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    const passwordLength = 14;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    input.value = password;
}

function copyPassword()
{
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
}