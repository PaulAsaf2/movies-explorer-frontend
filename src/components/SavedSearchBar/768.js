
// <Media query={{ maxWidth: 620 }}>
// {matches =>
//   matches ? (
//     <>
//       <section className="search-bar">
//         <form
//           name="search"
//           onSubmit={handleSearch}
//           noValidate
//           className="search-bar__form" >
//           <input
//             required
//             type="search"
//             id="search"
//             name="search"
//             minLength="1"
//             maxLength="40"
//             placeholder="Фильм"
//             className="search-bar__input"
//             // onInput={handleChange}
//             // onChange={(e) => onFilterTextChange(e.target.value)}
//             value={filterText || ''} />
//           <span
//             className="search-bar__span">
//             {/* {!isValid && errorMessage} */}
//           </span>
//           <button
//             className={submitError}
//             type="submit" >
//           </button>
//         </form>
//       </section >
//       <div className="search-bar__container">
//         <label className="toggle">
//           <input
//             className="toggle__input"
//             type="checkbox"
//             checked={isShortFilm}
//             onChange={() => setIsShortFilm(!isShortFilm)} />
//           <span className="toggle__span" />
//         </label>
//         <p className="search-bar__text">Короткометражки</p>
//       </div>
//     </>
//   ) : (
//     <section className="search-bar">
//       <form
//         name="search"
//         onSubmit={handleSubmitForm}
//         noValidate
//         className="search-bar__form" >
//         <input
//           required
//           type="search"
//           id="search"
//           name="search"
//           minLength="1"
//           maxLength="40"
//           placeholder="Фильм"
//           className="search-bar__input"
//           // onInput={handleChange}
//           onChange={(e) => setFilterText(e.target.value)}
//           value={filterText || ''} />
//         <span
//           className="search-bar__span">
//           {/* {!isValid && errorMessage} */}
//         </span>
//         <button
//           className={submitError}
//           type="submit" >
//         </button>
//       </form>
//       <div className="search-bar__separation-line"></div>
//       <label className="toggle">
//         <input
//           className="toggle__input"
//           type="checkbox"
//           checked={isShortFilm}
//           onChange={() => setIsShortFilm(!isShortFilm)} />
//         <span className="toggle__span" />
//       </label>
//       <p className="search-bar__text">Короткометражки</p>
//     </section >
//   )
// }
// </Media > 