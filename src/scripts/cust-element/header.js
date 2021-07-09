const makeHeader = () => {
  const body = document.querySelector('.container');

  const header = document.createElement('header');
  header.classList.add('header');
  const h1 = document.createElement('h1');
  const textHead = document.createTextNode('“Good food ends with good talk.”');
  h1.appendChild(textHead);
  const p = document.createElement('p');
  const textP = document.createTextNode('~ Geoffrey Neighor ~');
  p.appendChild(textP);
  header.appendChild(h1);
  header.appendChild(p);

  body.insertAdjacentElement('afterbegin', header);
};

const removeHeader = () => {
  const getHeader = document.querySelector('.container header');
  getHeader.remove();
};

const checkHeader = () => {
  const getHeader = document.querySelector('.container header');
  if (getHeader === null) {
    makeHeader();
  }
};

const allHeader = () => {
  const loc = window.location.hash;
  const regex = /#\/(details|favorites)\//g;

  const found = loc.match(regex);

  if (found) {
    checkHeader();
    removeHeader();
  } else {
    checkHeader();
  }
};

export default allHeader;
