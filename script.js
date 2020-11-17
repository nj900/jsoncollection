const portfolioSection = document.querySelector(".portfolio-section");

window.onload = () => {
  getContents();
};

const getContents = () => {

  fetch("data.json", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      buildPortfolioSection(data);
    });
};


const buildPortfolioSection = (data) => {
  let portfolioContent = "";
  for (item of data) {
    portfolioContent += `
            <div class="portfolio-item" style="background-image: url('${item.image}');">
                <div class="item-content">
                    <h3>Title: ${item.title}</h3>
                    <p>
                        Description: ${item.description}
                    </p>
                </div>
            </div>
          `;
  }

  portfolioSection.innerHTML = portfolioContent;
};
