const fetchUsers = () => {
  const getUserUrl = (id) =>
    `https://jsonplaceholder.typicode.com/users/${id}`

  const userPromises = []

  for (let i = 1; i <= 10; i++) {
    userPromises.push(
      fetch(getUserUrl(i)).then((response) => response.json())
    )
  }

  //se todas Promises estiverem resolvidas essa expressão irá retornar uma Promise com todos resultados resolvidos (um objeto de usuários)
  Promise.all(userPromises).then((users) => {
    const liUsers = users.reduce((accumulator, user) => {
      accumulator += `
        <li class="card">
          <h3 class="card__title">${user.name}</h3>
          <article class="card__info">
            <span>Email: ${user.email}</span class="card__info">
            <span>Phone: ${user.phone}</span>
            <span>Company: ${user.company.name}</span>
            <span>Our Work: ${user.company.catchPhrase}</span>
          </article>
        </li>
      `
      return accumulator
    }, '')

    const ul = document.querySelector('[data-js="users"]')

    ul.innerHTML = liUsers
  })
}

fetchUsers()
