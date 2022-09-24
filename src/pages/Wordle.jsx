import React, { useEffect } from "react";

const Wordle = () => {
  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerHeight - 251;
      document.getElementById("board").style.height = `${newHeight}px`;
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="wordle">
      <div className="wordle__container">
        <section className="wordle-board" id="board"></section>

        <section className="wordle-keyboard">
          <div>
            {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map(
              (letter) => {
                return (
                  <button id={letter} key={letter}>
                    {letter}
                  </button>
                );
              }
            )}
          </div>
          <div>
            {["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"].map(
              (letter) => {
                return (
                  <button id={letter} key={letter}>
                    {letter}
                  </button>
                );
              }
            )}
          </div>
          <div>
            <button className="button-enter">enter</button>
            {["z", "x", "c", "v", "b", "n", "m"].map((letter) => {
              return (
                <button id={letter} key={letter}>
                  {letter}
                </button>
              );
            })}
            <button className="button-delete">
              <svg height="24" width="24" viewBox="0 0 24 24">
                <path
                  fill="var(--color-tone-1)"
                  d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
                ></path>
              </svg>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Wordle;
