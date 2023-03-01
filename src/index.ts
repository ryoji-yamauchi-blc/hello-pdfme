import { Template, BLANK_PDF, generate } from "@pdfme/generator";

const template: Template = {
  basePdf: BLANK_PDF,
  schemas: [
    {
      a: {
        type: "text",
        position: { x: 0, y: 0 },
        width: 10,
        height: 10
      },
      b: {
        type: "text",
        position: { x: 10, y: 10 },
        width: 10,
        height: 10
      },
      c: {
        type: "text",
        position: { x: 20, y: 20 },
        width: 10,
        height: 10
      }
    }
  ]
};

const handlePrint = async () => {
  const inputs = [{ a: "a1", b: "b1", c: "c1" }];
  const pdf = await generate({ template, inputs });
  const blob = new Blob([pdf.buffer], { type: "application/pdf" });
  window.open(URL.createObjectURL(blob));
};

const init = () => {
  const button = document.getElementById("button");

  if (button) {
    button.addEventListener("click", handlePrint);
  }
};

init();
