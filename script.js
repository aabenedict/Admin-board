// namespace object
const app = {};

// namespace variables
app.openButton = document.getElementById("open-form");
app.form = document.getElementById("my-form");
app.sectionOne = document.querySelector('.section-one')

// on click of new-post button, it opens a form
app.openButton.addEventListener("click", () => {
    app.form.classList.add("open");
});

// on submit of form, it appends question & answer to the page
app.form.addEventListener('submit', (event) => {
    event.preventDefault();
    app.question = document.querySelector('#question').value;
    app.answer = document.querySelector('#answer').value;
    const result = document.createElement('div');
    result.classList.add("projects")
    result.innerHTML = `
        <ul class="project">
            <li class="question">${app.question}</li>
            <li class="answer">${app.answer}</li>
        </ul>
        <ul class="action-block">
            <li><img src="./img/save.png" alt="save icon" class="action-img"></li>
            <li><img src="./img/delete.png" alt="delete icon" class="delete-icon action-img"></li>
            <li><img src="./img/share.png" alt="share icon" class="action-img"></li>
        </ul>
    `;
    const firstChild = app.sectionOne.firstChild;
    app.sectionOne.insertBefore(result, firstChild);

    // Attach event listener to delete icon to remove result
    const deleteIcon = result.querySelector(".delete-icon");
    deleteIcon.addEventListener("click", () => {
        result.remove();
    });

    app.form.classList.remove('open');
});
