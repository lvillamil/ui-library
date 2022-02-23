export const getExtension = (file) => file.match(/\.([0-9a-z])+$/i)[0];

export const getImageFromData = (data, extension) =>
  `data:image/${extension};base64,${data}`;

export const getBase64FromItem = (item) => {
  try {
    const extension = getExtension(item.imagePath);
    return getImageFromData(item.imageByte, extension);
  } catch (error) {
    console.error(error);
  }
};

export const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // return formatted object
      return resolve({
        name: file.name,
        image: reader.result.toString(),
        url: '',
        caption: '',
        isValidUrl: true,
      });
    };
    reader.onerror = (error) => reject(error);
  });
};

export const urlToData = async (url) => {
  return fetch(url)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
};

export const getScreenshotURLById = (id, getUrl) => getUrl(id);

export const getDataContent = (content) => content?.content || null;
