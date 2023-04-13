import "./styles.scss";
import "./components/image-card/index";
import sourceImages from "./source.json";
import generatedImages from "./source.json";

export const status = {
  UPLOADED: "uploaded",
  PROCESSED: "processed"
};

const sourceList = sourceImages.map((s) => {
  return `<image-card 
            status=${s.status} 
            repeat="true"
            image=${s.image}
            ></image-card>`;
});

const generatedList = generatedImages.map((s) => {
  return `<image-card
            image=${s.image}
            ></image-card>`;
});

document.getElementById("app").innerHTML = `
    <div class="container">
        <div class="section">
          <div class="section-header">Upload</div>
        </div>
        <div class="section">
          <div class="section-header">Source Images</div>
          <div class="image-container">
            ${sourceList}
          </div>
        </div>
        <div class="section">
          <div class="section-header">Generated Images</div>
          <div class="image-container">
            ${generatedList}
        </div>
        </div>
      </div>
    `;
