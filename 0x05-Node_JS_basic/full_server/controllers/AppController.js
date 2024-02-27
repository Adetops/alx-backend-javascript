/**
 * Contains the miscellaneous route handlers.
 * @author Heritage Adeleke <https://github.com/Adetops>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
