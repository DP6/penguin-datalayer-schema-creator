function download(content, fileName) {
  const a = document.createElement('a');
  const arquivo = new Blob([content], { type: 'text/plain' });
  a.href = URL.createObjectURL(arquivo);
  a.download = fileName;
  a.click();
}

let onDownload = () => {
  const jsonContent = document.querySelector('#schemaExample').innerHTML;
  console.log(jsonContent);
  download(jsonContent, 'config_data.json');
};

const onCopy = () => {
  const jsonContent = document.querySelector('#schemaExample').innerHTML;
  console.log(jsonContent);

  navigator.clipboard.writeText(jsonContent);
};
