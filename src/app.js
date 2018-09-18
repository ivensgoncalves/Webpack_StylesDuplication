var styles = require('app.css');

var app = document.createElement('div');
app.id = 'app';

app.innerHTML = `
  <button class="${styles.nextButton}">Next</button>
  <button class="${styles.backButton}">Back</button>
`;

document.body.append(app);
