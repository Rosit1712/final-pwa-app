// import {
//   status, endPoint, optionsAddRev,
// } from './api';

// const addReview = () => {
//   const reviewSelector = document.querySelector('#cust-review .innerText');
//   reviewSelector.innerHTML += `
//         <form class="add-review">
//             <h4>Add Review</h4>
//             <div class="content-review">
//                 <div class="name-container">
//                     <p>Name</p>
//                     <input type="text" id="nameReview" placeholder="Input Name Here">
//                 </div>
//                 <textarea id="textReview" placeholder="Input Review Here"></textarea>
//                 <button id="submit">Submit</button>
//             </div>
//         </form>
//     `;
// };
// const sendReview = () => {
//   const submit = document.getElementById('submit');
//   submit.addEventListener('click', () => {
//     const user = document.getElementById('nameReview').value;
//     const text = document.getElementById('textReview').value;
//     console.log(user);
//     console.log(text);
//   });
//   sendReviewAPI();
// };

// const sendReviewAPI = (id) => {
//   fetch(endPoint('/review'), optionsAddRev)
//     .then(status);
// };
// export { addReview, sendReview };
