import {
  getExtension,
  getImageFromData,
  toBase64,
  urlToData,
  getScreenshotURLById,
  getDataContent,
} from './screenshots';

const mockURLResult = 'http://someurl.com/images/someId';
const mockGetScreenshotURLById = jest.fn(() => mockURLResult);

const originalFetch = global.fetch;
const originalCreateObjectURL = global.URL.createObjectURL;

beforeEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  global.fetch = originalFetch;
  global.URL.createObjectURL = originalCreateObjectURL;
});

const mockImgData =
  'iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg==';

describe('getExtension', () => {
  it('should get the correct extension', () => {
    const image = 'http://somecdn.com/someimage.png';
    expect(getExtension(image)).toEqual('.png');
  });
});

describe('getImageFromData', () => {
  it('should map correctly img data, passing extension', () => {
    expect(getImageFromData(mockImgData, 'png')).toEqual(
      `data:image/png;base64,${mockImgData}`
    );
  });
});

describe('toBase64', () => {
  it('should file object correctly', async () => {
    const sampleFile = new File(['(⌐□_□)'], 'goat.png', {
      type: 'image/png',
    });

    const mapResult = await toBase64(sampleFile);
    expect(mapResult).toEqual({
      name: 'goat.png',
      image: 'data:image/png;base64,KOKMkOKWoV/ilqEp',
      url: '',
      caption: '',
      isValidUrl: true,
    });
  });
});

describe('urlToData', () => {
  const mockCreateObjectURL = jest.fn(() => 'http://somelocalurl.com');
  const mockBlob = new Blob(['(⌐□_□)'], { type: 'image/webp' });
  global.fetch = jest.fn(() =>
    Promise.resolve({
      blob: () => Promise.resolve(mockBlob),
    })
  );
  global.URL.createObjectURL = mockCreateObjectURL;

  it('should return an local url for url image resource', async () => {
    const localURL = await urlToData('http://someurl.com');
    expect(localURL).toEqual('http://somelocalurl.com');
    expect(mockCreateObjectURL).toHaveBeenCalledTimes(1);
    expect(mockCreateObjectURL).toHaveBeenCalledWith(mockBlob);
  });
});

describe('getScreenshotURLById', () => {
  it('should call the method passed to it', () => {
    expect(getScreenshotURLById(23, mockGetScreenshotURLById)).toEqual(
      mockURLResult
    );
    expect(mockGetScreenshotURLById).toHaveBeenCalledTimes(1);
    expect(mockGetScreenshotURLById).toHaveBeenCalledWith(23);
  });
});

describe('getDataContent', () => {
  it('should map the content property', () => {
    const sampleData = { content: [{ id: 1 }] };
    expect(getDataContent(sampleData)).toEqual([{ id: 1 }]);
  });

  it('should return null if content property doesnt exist', () => {
    const sampleData = {};
    expect(getDataContent(sampleData)).toEqual(null);
  });
});
