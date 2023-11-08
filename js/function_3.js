const node_for_click = document.getElementById("for click")

function find_edit () {
    const secondName = document.getElementsByTagName('span')[3]
    console.log(secondName.innerText)
    secondName.innerText = 'Sadykova'
    const Name = document.getElementsByTagName('span')[4]
    console.log(Name.innerText)
    Name.innerText = 'Diana'
    const Surname = document.getElementsByTagName('span')[5]
    console.log(Surname.innerText)
    Surname.innerText = 'Amirovna'
}
node_for_click.addEventListener("click", find_edit)
