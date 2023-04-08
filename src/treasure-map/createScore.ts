import DOM from "/src/shared/dom";

type Score = {
  updateScore: () => void;
  init: () => void;
};

export default function createScore(): Score {
  const id = "score";
  let totalClicks = 0;

  const getScoreText = () => {
    return `Total clicks: ${totalClicks}`;
  };

  const reRender = () => {
    if (document.getElementById(id)) {
      document.getElementById(id)!.innerText = getScoreText();
      return;
    }
    throw new Error("Score element not found");
  };
  return {
    updateScore() {
      totalClicks++;
      reRender();
    },

    init() {
      DOM.append(
        DOM.createDiv((div) => {
          div.id = id;
          div.innerText = getScoreText();
        })
      );
    },
  };
}
