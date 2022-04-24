import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
// Class App dibuat bertujuan untuk menginisiasikan komponen-komponen dari Application Shell
class App {
    constructor({ button, drawer, content }) {
      this._button = button;
      this._drawer = drawer;
      this._content = content;

      this._initialAppShell(); // untuk menginisiasikan komponen-komponen AppShell yang sudah dimasukkan pada properti class
    }

    _initialAppShell() {
        // TODO: initial Drawer
        // kita bisa menginisiasikan komponen lain bila ada
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
      });
  }
// asynchronous fungsi baru untuk me-render halaman berdasarkan URL yang aktif
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

  export default App;